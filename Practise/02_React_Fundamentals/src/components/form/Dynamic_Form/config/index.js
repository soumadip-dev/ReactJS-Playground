// All possible form types
export const formTypes = {
  INPUT: 'input',
  SELECT: 'select',
  TEXTAREA: 'textarea',
};

// Instructions for the login form
export const loginFormElements = [
  {
    name: 'email', // What to call this field
    id: 'email', // HTML id
    label: 'Email', // What text to show
    componentType: 'input', // What kind of field
    placeholder: 'Enter your email', // Hint text
    type: 'email', // Input type
    required: true, // required
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    componentType: 'input',
    id: 'password',
    type: 'password',
    required: true,
  },
];

// Instructions for the registration form
export const registerFormElements = [
  {
    name: 'fullName',
    id: 'fullName',
    label: 'Full Name',
    componentType: 'input',
    placeholder: 'Enter your full name',
    type: 'text',
    required: true,
  },
  {
    name: 'email',
    id: 'email',
    label: 'Email',
    componentType: 'input',
    placeholder: 'Enter your email',
    type: 'email',
    required: true,
  },
  {
    name: 'password',
    id: 'password',
    label: 'Password',
    componentType: 'input',
    placeholder: 'Create a password',
    type: 'password',
    required: true,
  },
  {
    name: 'country',
    id: 'country',
    label: 'Country',
    componentType: 'select',
    placeholder: 'Select your country',
    options: [
      { value: 'in', label: 'India' },
      { value: 'us', label: 'United States' },
      { value: 'uk', label: 'United Kingdom' },
      { value: 'ca', label: 'Canada' },
      { value: 'au', label: 'Australia' },
    ],
    required: true,
  },
  {
    name: 'address',
    id: 'address',
    label: 'Address',
    componentType: 'textarea',
    placeholder: 'Enter your full address',
    rows: 4,
    required: true,
    maxLength: 500,
  },
];
