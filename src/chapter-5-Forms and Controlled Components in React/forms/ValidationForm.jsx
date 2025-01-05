// src/components/forms/ValidationForm.jsx
import  { useState } from 'react';

function ValidationForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    setError(value.includes('@') ? '' : 'Invalid email address');
  };

  return (
    <div>
      <input type="email" value={email} onChange={handleChange} />
      <p style={{ color: 'red' }}>{error}</p>
    </div>
  );
}

export default ValidationForm;
