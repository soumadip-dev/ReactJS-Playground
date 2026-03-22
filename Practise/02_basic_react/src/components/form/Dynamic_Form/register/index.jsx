import { useState } from 'react';
import CommonForm from '../common-form';
import { registerFormElements } from '../config';

export default function Register() {
  const initialState = {
    fullname: '',
    email: '',
    password: '',
  };

  const [registerFormData, setRegisterFormData] = useState(initialState);

  function onHandleSubmit(event) {
    event.preventDefault();
    console.log(registerFormData);
    // Do api related tasks
    setRegisterFormData(initialState);
  }
  return (
    <div className="container">
      <h1>Register</h1>
      <CommonForm
        formControls={registerFormElements}
        formData={registerFormData}
        buttonText={'Register'}
        handleSubmit={onHandleSubmit}
      />
    </div>
  );
}
