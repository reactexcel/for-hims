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
  console.log(
    req.body,
    "==========================================================="
  );
  const body = req.body;
  const token = body.token.id;
  const amount = body.charge.amount;
  const currency = body.charge.currency;

  // Charge card
  try {
    const charge = await stripe.charges.create({
      amount,
      currency,
      description: "Charges for noledreum",
      source: token
    });
    send(res, 200, {
      message: "Success",
      charge
    });
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

async function payment(userId, stripeToken) {
  try {
    let data = await db.cleaner.findOne({ _id: userId });
    data = JSON.parse(JSON.stringify(data));

    if (!data.stripeId) {
      const customer = await stripe.customers.create({
        source: stripeToken.id,
        email: data.email
      });
    }
  } catch (err) {
    throw new Error(err);
  }
}

export default {
  payment,
  cancelSubscription
};

exports.charge = functions.https.onRequest(app);

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   response.send("Hello from Firebase!");
// });

