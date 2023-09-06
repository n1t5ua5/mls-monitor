import useToken from "@galvanize-inc/jwtdown-for-react";
import React, { useState } from "react";
import { useLoginMutation } from "./app/apiSlice";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useToken();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
    e.target.reset();
  };

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Login</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-floating mb-3 text-dark">
              <input
                placeholder="Email"
                required
                type="text"
                name="username"
                id="username"
                className="form-control"
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="username">Username</label>
            </div>

            <div className="form-floating mb-3 text-dark">
              <input
                placeholder="Password"
                required
                type="text"
                name="Password"
                id="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password">Password</label>
            </div>
            <input className="btn btn-primary" type="submit" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
