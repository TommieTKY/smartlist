import { useEffect, useState } from "react";
import { useNavigate } from "react-router"; // React Router for navigation

const userList = [
  {
    email: "smartlist@test.ca",
    password: "password"
  }
];

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Use React Router for navigation

  useEffect(() => {
    document.title = "Login | SmartList";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValidUser = userList.some(user => user.email === email && user.password === password);

    if (isValidUser) {
      navigate("/home");
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="p-3">
      <header className="display-inline">
        <div>
          <a href="/member" className="text-dark"><i className="bi bi-arrow-left"></i></a>
        </div>
        <div className="text-center">
          <img src="/logo.png" alt="Logo" style={{ width: "5rem" }} />
        </div>
      </header>
      <main>
        <h1 className="fs-4 fw-bolder mt-4">Welcome Back</h1>
        <p className="text-muted login-font">Login with your registered email address to gain access.</p>

        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit} className="login-font">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
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
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <p className="mb-3 text-end">
            <a className="link-success link-underline-success" href="#">Forgot Password?</a>
          </p>
          <button type="submit" className="btn w-100 mt-5 login-font background-green p-2">Login</button>
          </form>
        </main>
    </div>
  );
}
