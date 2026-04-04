import { useState } from 'react';
import './form.css';

export default function FORM() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}`);
    setFormData({ name: '', email: '' });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div className="container">
      <h1>Form</h1>

      <form className="formBox" onSubmit={handleSubmit}>
        <input
          name="name"
          id="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
