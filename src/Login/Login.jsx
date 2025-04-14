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
          <a href="/home" className="text-dark"><i className="bi bi-arrow-left"></i> Back</a>
        </div>
        <div className="text-center">
          <img src="src/assets/logo.png" alt="Logo" style={{ width: "5rem" }} />
        </div>
      </header>
      <main>
        <h1>Welcome Back</h1>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
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
          <div className="mb-3 text-end">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </main>
    </div>
  );
}
