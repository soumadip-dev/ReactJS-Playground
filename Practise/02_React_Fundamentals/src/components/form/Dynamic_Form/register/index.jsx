import { useState } from 'react';
import CommonForm from '../common-form';
import { registerFormElements } from '../config';

export default function Register() {
  const initialState = {
    fullName: '',
    email: '',
    password: '',
    country: '',
    address: '',
  };

  const [registerFormData, setRegisterFormData] = useState(initialState);

  function onHandleSubmit(event) {
    event.preventDefault();
    setRegisterFormData(initialState);

    // Send to server and get response
    // For now, just logging the form data
    console.log(registerFormData);
  }
  return (
    <div className="container" style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ marginBottom: '28px', fontSize: '28px', textAlign: 'center' }}>Register</h1>
      <CommonForm
        formControls={registerFormElements}
        formData={registerFormData}
        setFormData={setRegisterFormData}
        buttonText={'Register'}
        handleSubmit={onHandleSubmit}
      />
    </div>
  );
}
