import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./Login.css";

export default function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.title = "Sign Up | SmartList";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/member");
  };

  return (
    <div className="p-3 mb-4">
      <header className="display-inline">
        <div>
          <a href="/member" className="text-dark"><i className="bi bi-arrow-left"></i></a>
        </div>
        <div className="text-center">
          <img src="/logo.png" alt="Logo" style={{ width: "5rem" }} />
        </div>
      </header>

      <h1 className="fs-4 fw-bolder mt-4">Welcome!</h1>
      <p className="text-muted login-font">Fill in the informations below to gain access.</p>

      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit} className="login-font">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input
            type="number"
            className="form-control"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            aria-describedby="passwordHelp"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div id="passwordHelp" className="form-text">
            <div className="text-muted">Use at least 8 characters long.</div>
            <div className="text-muted">Include a number or special character.</div>
            <div className="text-muted">Avoid common words like 'password' or '123456'</div>
          </div>
        </div>
        <button type="submit" className="btn w-100 login-font mt-4 p-2 background-green">Sign Up</button>
      </form>
    </div>
  );
}
