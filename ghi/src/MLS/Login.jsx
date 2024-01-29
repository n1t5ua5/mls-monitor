import React, { useState } from "react";
import { useLoginMutation } from "./app/apiSlice";
import "./styles/Login.css";
import Footer from "./Footer";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password });
      window.location.href = "/";
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="wrapper">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="email">Email</label>
        </div>

        <div className="input-box">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
        </div>

        <button className="button" type="submit">
          Submit
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default LoginForm;
