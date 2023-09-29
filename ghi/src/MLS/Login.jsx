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
    <div className="center-container">
      <div className="wrapper">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              placeholder="Email"
              required
              type="text"
              name="username"
              id="username"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="username"></label>
          </div>

          <div className="input-box">
            <input
              placeholder="Password"
              required
              type="password"
              name="Password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password"></label>
          </div>
          <button className="button" type="submit">
            Submit
          </button>
        </form>
        <Footer />
      </div>
    </div>
  );
};

export default LoginForm;
