import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Button from "../components/Button";
import InputField from "../components/InputField";

import "../styles/login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter Email and Password.");
      return;
    }

    navigate("/profile");
  };

  return (
    <motion.div
      className="login-page"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="login-card">
        <h1>Signin to your PopX account</h1>

        <p>
  Welcome back! Sign in to access
  <br />
  your PopX account and continue.
</p>

        <InputField
          label="Email Address"
          placeholder="Enter email address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputField
          label="Password"
          placeholder="Enter password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          text="Login"
          background="linear-gradient(135deg,#64cfc1,#69d998)"
          color="#171616"
          onClick={handleLogin}
        />
      </div>
    </motion.div>
  );
}

export default Login;