import React, { useState } from "react";
import { useLoginMutation } from "./app/apiSlice";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password });
      // Redirect to the home page after successful login
      window.location.href = "/"; // Replace "/" with the actual URL of your home page
    } catch (error) {
      // Handle login error here
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3 text-dark">
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
              <label htmlFor="username">Email</label>
            </div>

            <div className="form-floating mb-3 text-dark">
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
              <label htmlFor="password">Password</label>
            </div>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
