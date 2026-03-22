import { useState } from 'react';
import CommonForm from '../common-form';
import { loginFormElements } from '../config';

export default function Login() {
  const initialState = {
    email: '',
    password: '',
  };

  const [loginFormData, setLoginFormData] = useState(initialState);

  function onHandleSubmit(event) {
    event.preventDefault();
    setLoginFormData(initialState);
    // Send to server and get response
    // For now, just logging the form data
    console.log(loginFormData);
  }

  return (
    <div className="container" style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ marginBottom: '24px', fontSize: '28px', textAlign: 'center' }}>Login</h1>
      <CommonForm
        formControls={loginFormElements} // Login form instructions
        formData={loginFormData} // state
        setFormData={setLoginFormData} // setState
        buttonText={'Login'} // Text on the submit button
        handleSubmit={onHandleSubmit} // Submit handler method
      />
    </div>
  );
}
