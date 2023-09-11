import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useCreateAccountMutation } from "./app/apiSlice";
import { useNavigate } from "react-router-dom";
import "./styles/CreateAccount.css"

function CreateAccount() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [full_name, setFullName] = useState("");
  const [errorMessage] = useState("");

  const [createaccount, createAccountResponse] = useCreateAccountMutation();

  useEffect(() => {
    if (createAccountResponse.isSuccess) navigate("/");
  }, [createAccountResponse]);

  const handleSubmit = (e) => {
    e.preventDefault();
    createaccount({ username, email, password, full_name });
  };

  return (
    <div className="wrapper">
      <h2>Create Account</h2>
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            placeholder="Username"
            type="text"
            className="form-control"
            id="CreateAccount__username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="CreateAccount__username">
          </label>
        </div>
        <div className="input-box">
          <input
            placeholder="Email"
            type="email"
            className="form-control"
            id="CreateAccount__email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="CreateAccount__email">
          </label>
        </div>
        <div className="input-box">
          <input
            placeholder="Password"
            type="password"
            className="form-control"
            id="CreateAccount__password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="CreateAccount__password" className="form-label">
          </label>
        </div>
        <div className="input-box">
          <input
            placeholder="Full Name"
            type="text"
            className="form-control"
            id="CreateAccount__full_name"
            value={full_name}
            onChange={(e) => setFullName(e.target.value)}
          />
          <label htmlFor="CreateAccount__password" className="form-label">
          </label>
        </div>
        <button type="submit" className="button">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default CreateAccount;
