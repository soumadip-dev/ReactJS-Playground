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
    console.log(loginFormData);
    // Do api related tasks
    setLoginFormData(initialState);
  }
  return (
    <div className="container">
      <h1>Login</h1>
      <CommonForm
        formControls={loginFormElements}
        formData={loginFormData}
        setFormData={setLoginFormData}
        buttonText={'Login'}
        handleSubmit={onHandleSubmit}
      />
    </div>
  );
}
