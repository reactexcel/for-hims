const functions = require("firebase-functions");
const admin = require("firebase-admin");
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

  try {
    const response = await admin
      .firestore()
      .collection("users")
      .doc(uid)
      .get();
    if (response.exists) {
      const customerData = response.data();
      if (customerData.customerId) {
        const charge = await stripe.charges.create({
          amount: 30000,
          currency: "usd",
          customer: customerData.customerId
        });
        console.log(charge);
        send(res, 200, {
          message: "Success",
          charge: charge
        });
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

async function createProduct(req, res) {
  try {
    const product = stripe.products.create({
      name: "Sildenafil",
      type: "good",
      description: "Medicine for Erectile Dysfunction",
      attributes: ["size"]
    });
    send(res, 200, {
      message: "Success",
      product
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

exports.payment = functions.https.onRequest(app);
