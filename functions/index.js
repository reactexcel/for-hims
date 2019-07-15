const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const smtpTransport =require("nodemailer-smtp-transport")
admin.initializeApp(functions.config().firebase);
// const settings = { timestampsInSnapshots: true };
// // admin.firestore(settings);
const express = require("express");
const cors = require("cors")({ origin: true });
const app = express();
const stripe = require("stripe")(functions.config().stripe.token);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
async function payment(req, res) {
  const body = req.body;
  const uid = body.uid;
  const token = body.token.id;
  const email = body.email;
  // Charge card
  try {
    const response = await admin
      .firestore()
      .collection("users")
      .doc(uid)
      .get();
    if (response.exists) {
      const userData = response.data();
      if (!userData.customerId) {
        const customer = await stripe.customers.create({
          source: token,
          email: userData.email
        });

        admin
          .firestore()
          .collection("users")
          .doc(uid)
          .set({ customerId: customer.id }, { merge: true });

        const cardList = await stripe.customers.listCards(customer.id);
        send(res, 200, {
          message: "Success",
          cardList: cardList.data
        });
      } else {
        const charge = await stripe.customers.createSource(
          userData.customerId,
          {
            source: token
          }
        );
        const cardList = await stripe.customers.listCards(userData.customerId);

        send(res, 200, {
          message: "Success",
          cardList: cardList.data
        });
      }
    } else {
      const customer = await stripe.customers.create({
        source: token,
        email: email
      });

      admin
        .firestore()
        .collection("users")
        .doc(uid)
        .set({ customerId: customer.id }, { merge: true });

      const cardList = await stripe.customers.listCards(customer.id);
      send(res, 200, {
        message: "Success",
        cardList: cardList.data
      });
    }
  } catch (err) {
    console.log(err);
    send(res, 500, {
      error: err.message
    });
  }
}

async function getAllCards(req, res) {
  const body = req.body;
  const uid = body.uid;

  try {
    const response = await admin
      .firestore()
      .collection("users")
      .doc(uid)
      .get();
    const userData = response.data();
    if (!userData.customerId) {
      send(res, 404, {
        error: "No Cards found"
      });
    } else {
      const cardList = await stripe.customers.listCards(userData.customerId);
      send(res, 200, {
        message: "Success",
        cardList: cardList.data
      });
    }
  } catch (e) {
    send(res, 500, {
      error: e.message
    });
  }
}

async function charge(req, res) {
  const body = req.body;
  const uid = body.uid;
  const orderId = body.orderId;
  const cardId = body.cardId;
  try {
    const orderResponse = await admin
      .firestore()
      .collection("orders")
      .where("id", "==", orderId)
      .get();
    const response = await admin
      .firestore()
      .collection("users")
      .doc(uid)
      .get();
    if (response.exists) {
      const customerData = response.data();
      if (customerData.customerId) {
        if (cardId !== 0) {
          /*eslint-disable-line*/
          const updateCard = await stripe.customers.update(
            customerData.customerId,
            {
              default_source: cardId
            }
          );
        }
        if (customerData.approvalStatus === "Approved") {
          const charge = await stripe.orders.pay(orderId, {
            customer: customerData.customerId
          });
          const updateOrder = await stripe.orders.update(orderId, {
            metadata: { approvalStatus: "Approved" }
          });
          const order = await stripe.orders.retrieve(orderId);
          let doctorId;
          const doctor = await admin
            .firestore()
            .collection("users")
            .where("role", "==", "doctor")
            .where("shippingAddress.states", "==", order.shipping.address.state)
            .get();
          doctor.forEach(doc => {
            doctorId = doc.id;
          });
          const orderResponse = await admin
            .firestore()
            .collection("orders")
            .doc(orderId)
            .update({
              ...order,
              userId: uid,
              doctorId
            });

          send(res, 200, {
            message: "Success",
            charge: charge
          });
        } else if (customerData.approvalStatus === "Waiting") {
          send(res, 200, {
            message: "Success",
            charge: "You will be charged after approval by Doctor"
          });
        } else if (customerData.approvalStatus === "Denied") {
          const orderResponse = await admin
            .firestore()
            .collection("orders")
            .doc(orderId)
            .update({
              "metadata.approvalStatus": "Denied",
              status: "cancelled"
            });
          send(res, 200, {
            message: "Success",
            charge: "Your medication has been denied"
          });
        }
      } else {
        send(res, 404, {
          error: "User is not a customer yet"
        });
      }
    } else {
      send(res, 404, {
        error: "No User found"
      });
    }
  } catch (e) {
    send(res, 500, {
      error: e.message
    });
  }
}

async function order(req, res) {
  const body = req.body;
  const uid = body.uid;
  const address = body.address;
  const email = body.email;
  const cardId = body.cardId;

  // const quantity = body.quantity;

  const response = await admin
    .firestore()
    .collection("users")
    .doc(uid)
    .get();
  const userOrders = await admin
    .firestore()
    .collection("orders")
    .where("userId", "==", uid)
    .get();
  const currentApprovalStatus = response.data().approvalStatus;
  const approvalStatus = userOrders.size
    ? currentApprovalStatus === "Denied"
      ? "Waiting"
      : "Approved"
    : "Waiting";

  try {
    const order = await stripe.orders.create({
      currency: "usd",
      email: response.data().email || email,
      items: [
        {
          type: "sku",
          parent: "sku_EaAGvTgxtOgg8s",
          quantity: 1
        }
      ],
      shipping: {
        name: `${response.data().firstName} ${response.data().lastName}`,
        address: { ...address }
      },
      metadata: { approvalStatus }
    });
    let doctorId, doctorName;
    const doctor = await admin
      .firestore()
      .collection("users")
      .where("role", "==", "doctor")
      .where("shippingAddress.states", "==", order.shipping.address.state)
      .get();
    doctor.forEach(doc => {
      doctorId = doc.id;
      doctorName = `${doc.data().firstName} ${doc.data().lastName}`;
    });
    const orderResponse = await admin
      .firestore()
      .collection("orders")
      .doc(order.id)
      .set({ ...order, userId: uid, doctorId, cardId, doctorName });

    send(res, 200, {
      message: "Success",
      order
    });
  } catch (e) {
    send(res, 500, {
      error: e.message
    });
  }
}

async function createProduct(req, res) {
  try {
    const product = await stripe.products.create({
      name: "Sildenafil",
      type: "good",
      description: "Medicine for Erectile Dysfunction",
      attributes: ["size"]
    });
    const response = await admin
      .firestore()
      .collection("products")
      .doc(product.id)
      .set({ ...product });
    const sku = await stripe.skus.create({
      currency: "usd",
      inventory: { type: "finite", quantity: 500 },
      price: 30000,
      product: product.id,
      attributes: { size: "20 tablets" }
    });
    const skuResponse = await admin
      .firestore()
      .collection("products")
      .doc(product.id)
      .collection("sku")
      .doc(sku.id)
      .set({ ...sku });
    send(res, 200, {
      message: "Success",
      product,
      sku
    });
  } catch (e) {
    send(res, 500, {
      error: e.message
    });
  }
}

function send(res, code, body) {
  res.send({
    statusCode: code,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify(body)
  });
}

app.use(cors);
app.post("/addNew", (req, res) => {
  // Catch any unexpected errors to prevent crashing
  try {
    payment(req, res);
  } catch (e) {
    console.log(e);
    send(res, 500, {
      error: `The server received an unexpected error. Please try again and contact the site admin if the error persists.`
    });
  }
});

app.post("/getAllCards", (req, res) => {
  try {
    getAllCards(req, res);
  } catch (e) {
    console.log(e);
    send(res, 500, {
      error: `The server received an unexpected error. Please try again and contact the site admin if the error persists.`
    });
  }
});

app.post("/chargeCustomer", (req, res) => {
  try {
    charge(req, res);
  } catch (e) {
    console.log(e);
    send(res, 500, {
      error: `The server received an unexpected error. Please try again and contact the site admin if the error persists.`
    });
  }
});

app.post("/createProduct", (req, res) => {
  try {
    createProduct(req, res);
  } catch (e) {
    send(res, 500, {
      error: `The server received an unexpected error. Please try again and contact the site admin if the error persists.`
    });
  }
});

app.post("/calculateOrder", (req, res) => {
  try {
    order(req, res);
  } catch (e) {
    send(res, 500, {
      error: `The server received an unexpected error. Please try again and contact the site admin if the error persists.`
    });
  }
});

app.post("/emailsend", (req, res) => {
  // getting dest email by query string
  let transporter = nodemailer.createTransport(
    smtpTransport({
      service:'gmail',
      host: "smtp.gmail.com",
      port: 465,
      secure: false,
      auth: {
        user: "rahul.excel2011@gmail.com",
        pass: "Lknh7Gdq"
      }
    })
  );
  const dest = req.body.to;

  const mailOptions = {
    from: "rahul.excel2011@gmail.com", // Something like: Jane Doe <janedoe@gmail.com>
    to: dest,
    subject: "Regarding appoinment", // email subject
    html: `<p style="font-size: 16px;">A new appointment is booked in you area</p>
            
            <br />
        ` // email content in HTML
  };

  // returning result
  transporter.sendMail(mailOptions, (erro, info) => {    
    if (erro) {
      res.send(erro.toString());
    }
    else{
    res.send("Sended");
    }
  });
});

exports.payment = functions.https.onRequest(app);
