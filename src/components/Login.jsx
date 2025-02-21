import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row, Form, FloatingLabel } from "react-bootstrap";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve users from local storage (or set empty array if none exist)
    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    // Find user with case-insensitive email match
    const user = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user)); // ✅ Save session
      alert("Login successful!");
      navigate("/dashboard"); // ✅ Redirect to Dashboard
    } else {
      alert("Invalid email or password! Please check your details.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="w-50 border shadow border-dark bg-light p-3">
        <Row>
          <Col>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsmsJfOACE0EFcsBVuFb-obb_ByZgeIOZa9w&s"
              alt="login"
              className="img-fluid"
            />
          </Col>
          <Col>
            <h2>LOG IN</h2>
            <Form onSubmit={handleLogin}>
              <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </FloatingLabel>

              <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </FloatingLabel>

              <div className="mt-2 d-flex justify-content-between">
                <button type="submit" className="btn btn-info">LOG IN</button>
                <a href="/signup" className="btn btn-link">New User?</a>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Login;
