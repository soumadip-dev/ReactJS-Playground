export const formTypes = {
  INPUT: 'input',
  SELECT: 'select',
  TEXTAREA: 'textarea',
};

export const loginFormElements = [
  {
    name: 'email',
    id: 'email',
    label: 'Email',
    componentType: 'input',
    placeholder: 'Enter your email',
    type: 'email',
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    componentType: 'input',
    id: 'password',
    type: 'password',
  },
];

export const registerFormElements = [
  {
    name: 'fullName',
    id: 'fullName',
    label: 'Full Name',
    componentType: 'input',
    placeholder: 'Enter your full name',
    type: 'text',
  },
  {
    name: 'email',
    id: 'email',
    label: 'Email',
    componentType: 'input',
    placeholder: 'Enter your email',
    type: 'email',
  },
  {
    name: 'password',
    id: 'password',
    label: 'Password',
    componentType: 'input',
    placeholder: 'Create a password',
    type: 'password',
  },
];
