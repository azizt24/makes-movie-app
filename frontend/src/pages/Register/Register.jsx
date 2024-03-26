import React, { useState } from "react";
import "./Register.css";
import { useAuth0 } from "@auth0/auth0-react";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const { loginWithRedirect } = useAuth0();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await loginWithRedirect({
        screen_hint: 'signup',
      });
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="register-container">
      <div className="form-container">
        <h2>Create Account</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Create Account</button>
        </form>
      </div>
      <div className="illustration-container">
        <div className="placeholder">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M50 0C77.6142 0 99.4982 21.8858 99.4982 50C99.4982 78.1142 77.6142 100 50 100C22.3858 100 0.501795 78.1142 0.501795 50C0.501795 21.8858 22.3858 0 50 0ZM50 83C57.5228 83 64 76.5228 64 70V30C64 23.4772 57.5228 17 50 17C42.4772 17 36 23.4772 36 30V70C36 76.5228 42.4772 83 50 83Z"
              fill="#C4C4C4"
            />
          </svg>
          <p>Grow with Us</p>
        </div>
      </div>
    </div>
  );
}

export default Register;