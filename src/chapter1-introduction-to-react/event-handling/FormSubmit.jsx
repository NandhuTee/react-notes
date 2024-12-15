import  { useState } from 'react';

function FormSubmit() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => setInputValue(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted:", inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Enter something" 
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormSubmit;
