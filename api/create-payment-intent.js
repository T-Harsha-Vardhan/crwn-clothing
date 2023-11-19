require("dotenv").config();
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);

export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { amount, description } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "inr",
      description: description || "payment description",
    });

    return res.status(200).json({ paymentIntent });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
