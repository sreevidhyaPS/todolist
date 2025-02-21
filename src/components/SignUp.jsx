import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // 🔹 Handle Sign Up
  const handleSignUp = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some(user => user.email === email)) {
      alert("User already exists! Please log in.");
      return;
    }

    const newUser = { email, username, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful! Please log in.");
    navigate("/login");
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="w-50 border shadow border-dark bg-light p-3">
        <Row>
          <Col>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-illustration-download-in-svg-png-gif-file-formats--account-login-miscellaneous-pack-illustrations-5230178.png?f=webp"
              alt="signup"
              className="img-fluid"
            />
          </Col>
          <Col>
            <h2>SIGN UP</h2>
            <Form onSubmit={handleSignUp}>
              <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </FloatingLabel>

              <FloatingLabel controlId="floatingInputUser" label="Username" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                <button type="submit" className="btn btn-success">
                  Sign Up
                </button>
                <a href="/login" className="btn btn-link">Already a User?</a>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default SignUp;