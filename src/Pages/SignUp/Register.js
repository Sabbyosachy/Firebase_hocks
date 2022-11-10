import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../Context/UseAuth";

const Register = () => {
  const { googleSignIn } = useAuth();
  return (
    <div>
      <div className="mx-auto w-25">
        <h4 className="my-3 text-danger">Please Register Here</h4>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
        <Link to="/login">Already have an account? please Login.</Link>
        <button onClick={googleSignIn}>GoogleSignIn</button>
      </div>
    </div>
  );
};

export default Register;
