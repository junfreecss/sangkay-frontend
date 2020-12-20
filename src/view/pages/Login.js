import React from 'react';
import AppName from '../components/AppName';

import {
  Card, 
  Alert,
  Form,
  Button
} from 'react-bootstrap';

class Login extends React.Component {

  render() {
    return (
      <>
        <div className="center-vh">
          <AppName className="logo-lg" title="Sangkay"/>
          <Card>
            <Card.Body>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" required />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" minLength="4" required/>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button className="w-100" variant="primary">
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }

}

export default Login;