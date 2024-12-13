
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./fairbase";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handlesubmit = async (e) => {
    e.preventDefault();
    try{
        await signInWithEmailAndPassword(auth, email, password);
        console.log("User Logged in Successfully");
        window.location.href = "/Home"

    }catch(error) {

    }
  }

  

  return (
    <form onSubmit={handlesubmit}>
      <h3>Login</h3>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
       
      </div>
      <p className="forgot-password text-right">
        New user <a href="/register">Register Here</a>
      </p>
      
    </form>
  );
}

export default Login;