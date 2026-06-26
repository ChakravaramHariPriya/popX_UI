import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Button from "../components/Button";
import InputField from "../components/InputField";

import "../styles/signup.css";

function Signup() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [agency, setAgency] = useState("Yes");

  const handleSignup = () => {
    if (
      fullName.trim() === "" ||
      phone.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      alert("Please fill all required fields.");
      return;
    }

    navigate("/profile");
  };

  return (
    <motion.div
      className="signup-page"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="signup-card">
        <h1>Create your PopX account</h1>

        <InputField
          label="Full Name*"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <InputField
          label="Phone Number*"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <InputField
          label="Email Address*"
          placeholder="Enter email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputField
          label="Password*"
          placeholder="Enter password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <InputField
          label="Company Name"
          placeholder="Company name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <div className="agency">
          <p>Are you an Agency?*</p>

          <label>
            <input
              type="radio"
              value="Yes"
              checked={agency === "Yes"}
              onChange={(e) => setAgency(e.target.value)}
            />
            Yes
          </label>

          <label>
            <input
              type="radio"
              value="No"
              checked={agency === "No"}
              onChange={(e) => setAgency(e.target.value)}
            />
            No
          </label>
        </div>

        <Button
          text="Create Account"
          background="linear-gradient(135deg,#64cfc1,#69d998)"
          color="#0c0707"
          onClick={handleSignup}
        />
      </div>
    </motion.div>
  );
}

export default Signup;