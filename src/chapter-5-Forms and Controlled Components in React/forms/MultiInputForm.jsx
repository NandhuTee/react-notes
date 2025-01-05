// src/components/forms/MultiInputForm.jsx
import   { useState } from 'react';
import InputField from '../common/InputField'; // Importing the reusable InputField
import SubmitButton from '../common/SubmitButton'; // Importing the reusable SubmitButton
import { validateEmail } from '../utils/validation'; // Importing the email validation function

function MultiInputForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const inputFields = [
    { name: 'name', placeholder: 'Name' },
    { name: 'email', placeholder: 'Email' },
  ];

   const validateForm = () => {
    const newErrors = {};
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      alert(`Name: ${formData.name}, Email: ${formData.email}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputFields.map((field) => (
        <InputField
          key={field.name}
          name={field.name}
          value={formData[field.name]}
          onChange={handleChange}
          placeholder={field.placeholder}
        />
      ))}
      <SubmitButton />
      {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
    </form>
  );
}

export default MultiInputForm;