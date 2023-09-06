import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useCreateAccountMutation } from "./app/apiSlice";

function CreateAccount() {
  const dispatch = useDispatch();
  const formData = useSelector(state => state.user.formData);
  const [ createaccount ] = useCreateAccountMutation();

  const handleChange = (e) => {
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    dispatch(setFormData(newFormData));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createaccount(formData);
      if (response.data) {
        console.log("Account created successfully:", response.data);
      }
    } catch (error) {
      console.log("Failed to create account", error);
    }
  };

  return (
    <div className="create-account">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default CreateAccount;
