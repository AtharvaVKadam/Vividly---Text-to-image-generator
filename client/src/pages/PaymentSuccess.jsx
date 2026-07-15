import { motion } from "framer-motion";
import { CheckCircle, Sparkles } from "lucide-react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 7000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-violet-50 via-white to-fuchsia-50 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg w-full bg-white rounded-3xl shadow-2xl p-10 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 180,
          }}
          className="flex justify-center"
        >
          <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle size={60} className="text-green-600" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-8 text-4xl font-bold text-gray-900"
        >
          Payment Successful!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-gray-500 leading-7"
        >
          Thank you for upgrading your Vividly account.
          <br />
          Your credits have been added successfully and are ready to use.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 rounded-2xl bg-violet-50 border border-violet-100 p-5"
        >
          <div className="flex justify-center items-center gap-2 text-violet-700 font-semibold">
            <Sparkles size={20} />
            Credits Added Successfully
          </div>

          <p className="mt-2 text-sm text-gray-500">
            You can start generating AI images immediately.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            to="/"
            className="flex-1 py-3 rounded-xl bg-linear-to-r from-violet-600 via-fuchsia-500 to-pink-500 text-white font-semibold hover:scale-105 transition"
          >
            Generate Images
          </Link>

          <Link
            to="/buy"
            className="flex-1 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition"
          >
            View Plans
          </Link>
        </div>

        <p className="mt-8 text-xs text-gray-400">
          Redirecting to Home in a few seconds...
        </p>
      </motion.div>
    </div>
  );
};

export default PaymentSuccess;
