// src/components/forms/RadioForm.jsx
import  { useState } from 'react';

function RadioForm() {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <form>
      <label>
        <input
          type="radio"
          name="option"
          value="Option A"
          checked={selectedOption === 'Option A'}
          onChange={(e) => setSelectedOption(e.target.value)}
        />
        Option A
      </label>
      <label>
        <input
          type="radio"
          name="option"
          value="Option B"
          checked={selectedOption === 'Option B'}
          onChange={(e) => setSelectedOption(e.target.value)}
        />
        Option B
      </label>
      <p>Selected: {selectedOption}</p>
    </form>
  );
}

export default RadioForm;
