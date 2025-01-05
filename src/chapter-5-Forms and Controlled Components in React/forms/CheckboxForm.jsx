// src/components/forms/CheckboxForm.jsx
import  { useState } from 'react';

function CheckboxForm() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      {isChecked ? 'Checked' : 'Unchecked'}
    </label>
  );
}

export default CheckboxForm;
