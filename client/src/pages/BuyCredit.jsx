import React from "react";
import { motion } from "framer-motion";
import { assets, plans } from "../assets/assets";

const BuyCredit = () => {
  return (
    <motion.div
      className="min-h-[calc(100vh-80px)] px-6 py-16"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <button className="border border-gray-300 text-gray-600 px-8 py-2 rounded-full text-sm">
          Pricing
        </button>

        <h1 className="mt-6 text-5xl font-bold text-zinc-900">
          Unlock Unlimited Creativity
        </h1>

        <p className="mt-4 text-zinc-500 text-lg">
          Generate stunning AI images without limits.
        </p>
      </motion.div>

      <div className="mt-16 flex flex-wrap justify-center gap-8">
        {plans.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            className={`relative w-80 rounded-3xl border p-8 flex flex-col transition-all duration-300
            ${
              item.id === "Advanced"
                ? "border-fuchsia-500 shadow-xl scale-105"
                : "border-zinc-200 shadow-md hover:-translate-y-2 hover:shadow-xl"
            }`}
          >
            {item.id === "Advanced" && (
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  delay: 0.5,
                  type: "spring",
                  stiffness: 300,
                }}
                viewport={{ once: true }}
                className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-linear-to-r from-violet-600 via-fuchsia-500 to-pink-500 px-5 py-1 text-sm font-semibold text-white shadow-lg"
              >
                Most Popular
              </motion.span>
            )}

            <motion.img
              src={assets.logo_icon}
              alt=""
              className="w-20 h-20 object-contain"
              whileHover={{ rotate: 8, scale: 1.08 }}
              transition={{ duration: 0.3 }}
            />

            <h2 className="mt-6 text-3xl font-bold text-zinc-900">{item.id}</h2>

            <p className="mt-3 text-zinc-500 leading-6">{item.desc}</p>

            <div className="mt-10">
              <span className="text-5xl font-bold">${item.price}</span>

              <p className="mt-2 text-zinc-500">{item.credit} Credits</p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className={`mt-auto py-3 rounded-xl font-semibold text-white transition-all duration-300
              ${
                item.id === "Advanced"
                  ? "bg-linear-to-r from-violet-600 via-fuchsia-500 to-pink-500 shadow-lg shadow-fuchsia-300/50 hover:shadow-fuchsia-500/60"
                  : "bg-black hover:bg-zinc-800"
              }`}
            >
              Get Started
            </motion.button>

            <p className="text-center text-xs text-zinc-400 mt-4">
              Cancel anytime
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default BuyCredit;
