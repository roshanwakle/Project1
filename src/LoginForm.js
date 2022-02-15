import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function LoginForm() {
  const [userId, setUserId] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const onSubmit = () => {
    console.log("submit", userId, password);
    // api request
    if (userId === "admin1" && password === "pwd123") {
      navigate("/dashboard");
    }
  };

  return (
    <>
      <div className="container">
        <form onSubmit={onSubmit}>
          <h5>Login</h5>
          <div className="form-group">
            <label>User Id</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
