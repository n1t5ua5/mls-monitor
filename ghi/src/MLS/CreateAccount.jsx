import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useCreateAccountMutation } from "./app/apiSlice";
import { useNavigate } from "react-router-dom";

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
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <h1>Create Account</h1>
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="CreateAccount__username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="CreateAccount__username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="CreateAccount__email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="CreateAccount__email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="CreateAccount__password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="CreateAccount__password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="CreateAccount__password" className="form-label">
              Full Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="CreateAccount__full_name"
              value={full_name}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
