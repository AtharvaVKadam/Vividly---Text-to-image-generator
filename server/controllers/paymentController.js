import polar from "../config/polar.js";
import userModel from "../models/userModel.js";

export const createCheckout = async (req, res) => {
  try {
    const { plan } = req.body;

    let productId;

    switch (plan) {
      case "basic":
        productId = process.env.POLAR_BASIC_PRODUCT_ID;
        break;

      case "advanced":
        productId = process.env.POLAR_ADVANCED_PRODUCT_ID;
        break;

      case "business":
        productId = process.env.POLAR_BUSINESS_PRODUCT_ID;
        break;

      default:
        return res.json({
          success: false,
          message: "Invalid Plan",
        });
    }

    const checkout = await polar.checkouts.create({
      products: [productId],

      metadata: {
        userId: req.userId,
        plan,
      },

      successUrl: `${process.env.CLIENT_URL}/payment-success`,
      returnUrl: `${process.env.CLIENT_URL}/buy`,
    });

    res.json({
      success: true,
      url: checkout.url,
    });
  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const paymentWebhook = async (req, res) => {
  try {
    console.log("Webhook Received");

    const event = req.body;

    if (
      (event.type === "order.updated" || event.type === "order.paid") &&
      event.data.paid
    ) {
      const userId = event.data.metadata.userId;

      const credits = Number(event.data.product.metadata.Credits);

      const user = await userModel.findById(userId);

      if (!user) {
        return res.sendStatus(404);
      }

      await userModel.findByIdAndUpdate(userId, {
        creditBalance: user.creditBalance + credits,
      });

      console.log(`Added ${credits} credits to ${user.name}`);
    }

    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};
