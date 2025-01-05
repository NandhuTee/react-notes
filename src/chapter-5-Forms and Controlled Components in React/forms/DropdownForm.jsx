// src/components/forms/DropdownForm.jsx
import  { useState } from 'react';

function DropdownForm() {
  const [selectedValue, setSelectedValue] = useState('apple');

  return (
    <select value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
      <option value="apple">Apple</option>
      <option value="orange">Orange</option>
      <option value="banana">Banana</option>
    </select>
  );
}

export default DropdownForm;
