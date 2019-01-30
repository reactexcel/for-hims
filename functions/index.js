const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const express = require("express");
const cors = require("cors")({ origin: true });
const app = express();
const stripe = require("stripe")(functions.config().stripe.token);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
async function charge(req, res) {
  const body = req.body;
  const userId = body.userId;
  const token = body.token.id;
  const amount = body.charge.amount;
  const currency = body.charge.currency;
  // Charge card
  try {
    const response = await admin
      .firestore()
      .collection("users")
      .doc(userId)
      .get();
    const userData = response.data();
    if (!userData.customerId) {
      const customer = await stripe.customers.create({
        source: token.id,
        email: userData.email
      });
      admin
        .firestore()
        .collection("users")
        .doc(userId)
        .set({ customerId: customer.id }, { merge: true });

      const charge = await stripe.charges.create({
        amount,
        currency,
        description: "Charges for noledreum",
        customer: customer.id
      });
      send(res, 200, {
        message: "Success",
        charge
      });
    }
  } catch (err) {
    console.log(err);
    send(res, 500, {
      error: err.message
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
app.post("/", (req, res) => {
  // Catch any unexpected errors to prevent crashing
  try {
    charge(req, res);
  } catch (e) {
    console.log(e);
    send(res, 500, {
      error: `The server received an unexpected error. Please try again and contact the site admin if the error persists.`
    });
  }
});

exports.charge = functions.https.onRequest(app);

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   response.send("Hello from Firebase!");
// });
