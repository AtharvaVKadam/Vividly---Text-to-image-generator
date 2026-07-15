import express from "express";
import userAuth from "../middlewares/auth.js";
import {
  createCheckout,
  paymentWebhook,
} from "../controllers/paymentController.js";

const paymentRouter = express.Router();

paymentRouter.post("/checkout", userAuth, createCheckout);
paymentRouter.post("/webhook", paymentWebhook);

export default paymentRouter;
