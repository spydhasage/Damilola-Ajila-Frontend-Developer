import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Button, Form, FormGroup, Input, Label } from 'reactstrap';

const LoginPrompt = ({ onLogin }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Use a mock authentication function here
    if (username === 'admin' && password === 'password') {
      onLogin();
    } else {
      setErrorMessage('Invalid username or password.');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {errorMessage && <Alert color="danger">{errorMessage}</Alert>}
      <FormGroup>
        <Label for="username">Username</Label>
        <Input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </FormGroup>
      <Button color="primary" type="submit">
        Log in
      </Button>
    </Form>
  );
};

LoginPrompt.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginPrompt;
