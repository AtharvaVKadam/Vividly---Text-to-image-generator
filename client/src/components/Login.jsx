import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [state, setState] = useState("Login");
  const { setIsLogin, backendUrl, setToken, setUser } = useContext(AppContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      let response;

      if (state === "Login") {
        response = await axios.post(`${backendUrl}/api/user/login`, {
          email,
          password,
        });
      } else {
        response = await axios.post(`${backendUrl}/api/user/register`, {
          name,
          email,
          password,
        });
      }

      const data = response.data;

      if (data.success) {
        setUser(data.user);
        setToken(data.token);
        localStorage.setItem("token", data.token);

        toast.success(
          state === "Login"
            ? "Logged in successfully!"
            : "Account created successfully!",
        );

        setIsLogin(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Something went wrong",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.form
        onSubmit={onSubmitHandler}
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
        className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-lg"
      >
        <img
          onClick={() => !loading && setIsLogin(false)}
          src={assets.cross_icon}
          alt=""
          className="absolute top-5 right-5 w-5 cursor-pointer hover:rotate-90 transition duration-200"
        />

        <div className="flex justify-center">
          <img
            src={assets.logo_icon}
            alt=""
            className="w-20 h-20 object-contain"
          />
        </div>

        <h1 className="mt-5 text-center text-3xl font-bold text-zinc-900">
          {state}
        </h1>

        <p className="mt-2 text-center text-zinc-500">
          Welcome to <span className="font-semibold">Vividly</span>. Generate
          amazing AI images in seconds.
        </p>

        {state === "Sign Up" && (
          <div className="mt-8 flex items-center gap-3 rounded-xl border border-zinc-300 px-4 py-3">
            <img src={assets.profile_icon} alt="" className="w-5" />
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Full Name"
              required
              disabled={loading}
              className="w-full outline-none bg-transparent"
            />
          </div>
        )}

        <div className="mt-5 flex items-center gap-3 rounded-xl border border-zinc-300 px-4 py-3">
          <img src={assets.email_icon} alt="" className="w-5" />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email Address"
            required
            disabled={loading}
            className="w-full outline-none bg-transparent"
          />
        </div>

        <div className="mt-5 flex items-center gap-3 rounded-xl border border-zinc-300 px-4 py-3">
          <img src={assets.lock_icon} alt="" className="w-5" />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            required
            disabled={loading}
            className="w-full outline-none bg-transparent"
          />
        </div>

        {state === "Login" && (
          <p className="mt-3 text-right text-sm text-violet-600 cursor-pointer hover:underline">
            Forgot Password?
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-8 w-full rounded-xl bg-linear-to-r from-violet-600 via-fuchsia-500 to-pink-500 py-3 text-white font-semibold shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? "Please wait... Server is starting" : state}
        </button>

        <div className="my-7 flex items-center">
          <div className="flex-1 h-px bg-zinc-300"></div>
          <span className="mx-3 text-sm text-zinc-500">OR</span>
          <div className="flex-1 h-px bg-zinc-300"></div>
        </div>

        <button
          type="button"
          disabled={loading}
          className="w-full rounded-xl border border-zinc-300 py-3 font-medium hover:bg-zinc-50 transition duration-300 disabled:opacity-60"
        >
          Continue with Google
        </button>

        {state === "Login" ? (
          <p className="mt-6 text-center text-zinc-500">
            Don't have an account?{" "}
            <span
              onClick={() => !loading && setState("Sign Up")}
              className="font-semibold text-violet-600 cursor-pointer hover:underline"
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="mt-6 text-center text-zinc-500">
            Already have an account?{" "}
            <span
              onClick={() => !loading && setState("Login")}
              className="font-semibold text-violet-600 cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>
        )}
      </motion.form>
    </motion.div>
  );
};

export default Login;
