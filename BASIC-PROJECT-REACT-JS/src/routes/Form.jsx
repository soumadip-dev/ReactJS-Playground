import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { useForm } from '../hooks/useForm';

export const Route = createFileRoute('/Form')({
  component: RouteComponent,
});

function RouteComponent() {
  // State management remains the same
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errorUsername, setErrorUsername] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

  const [userColor, setUserColor] = useState('');
  const [emailColor, setEmailColor] = useState('');
  const [passwordColor, setPasswordColor] = useState('');
  const [confirmPasswordColor, setConfirmPasswordColor] = useState('');

  const { loading, successMessage, errorMessage, submitContact } = useForm();

  // Style objects
  const cardStyles = {
    maxWidth: '500px',
    margin: '50px auto',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
  };

  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  };

  const inputStyles = {
    padding: '12px 15px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '16px',
    transition: 'border-color 0.3s ease',
  };

  const errorStyles = {
    color: 'red',
    fontSize: '14px',
    marginTop: '-15px',
    marginBottom: '-5px',
  };

  const successStyles = {
    color: 'green',
    fontSize: '16px',
    textAlign: 'center',
    padding: '10px',
  };

  const buttonStyles = {
    padding: '12px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#667eea',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    ':hover': {
      backgroundColor: '#5a6fd1',
    },
  };

  const buttonDisabledStyles = {
    ...buttonStyles,
    backgroundColor: '#cccccc',
    cursor: 'not-allowed',
  };

  // Validate function remains the same
  const validate = async e => {
    e.preventDefault();
    let isValid = true;

    if (username.length >= 8) {
      setErrorUsername('');
      setUserColor('green');
    } else {
      setErrorUsername('Username must be at least 8 characters');
      setUserColor('red');
      isValid = false;
    }

    if (email.includes('@') && email.includes('.')) {
      setErrorEmail('');
      setEmailColor('green');
    } else {
      setErrorEmail('Invalid email');
      setEmailColor('red');
      isValid = false;
    }

    if (password.length >= 8) {
      setErrorPassword('');
      setPasswordColor('green');
    } else {
      setErrorPassword('Password must be at least 8 characters');
      setPasswordColor('red');
      isValid = false;
    }

    if (password === confirmPassword && password !== '') {
      setErrorConfirmPassword('');
      setConfirmPasswordColor('green');
    } else {
      setErrorConfirmPassword('Passwords do not match');
      setConfirmPasswordColor('red');
      isValid = false;
    }

    if (isValid) {
      await submitContact({ username, email, password });
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <div style={cardStyles}>
      <form onSubmit={validate} style={formStyles}>
        <input
          type="text"
          placeholder="Name"
          style={{
            ...inputStyles,
            borderColor: userColor || '#ddd',
            ':focus': {
              outline: 'none',
              borderColor: userColor || '#667eea',
            },
          }}
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        {errorUsername && <p style={errorStyles}>{errorUsername}</p>}

        <input
          type="text"
          placeholder="Email"
          style={{
            ...inputStyles,
            borderColor: emailColor || '#ddd',
          }}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        {errorEmail && <p style={errorStyles}>{errorEmail}</p>}

        <input
          type="password"
          placeholder="Password"
          style={{
            ...inputStyles,
            borderColor: passwordColor || '#ddd',
          }}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {errorPassword && <p style={errorStyles}>{errorPassword}</p>}

        <input
          type="password"
          placeholder="Confirm Password"
          style={{
            ...inputStyles,
            borderColor: confirmPasswordColor || '#ddd',
          }}
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
        {errorConfirmPassword && <p style={errorStyles}>{errorConfirmPassword}</p>}

        <button
          type="submit"
          style={loading ? buttonDisabledStyles : buttonStyles}
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>

        {successMessage && <p style={successStyles}>{successMessage}</p>}
        {errorMessage && (
          <p style={{ ...errorStyles, fontSize: '16px', textAlign: 'center' }}>{errorMessage}</p>
        )}
      </form>
    </div>
  );
}
