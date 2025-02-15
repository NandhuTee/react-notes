import React from 'react';

function ControlledForm() {
  const [inputValue, setInputValue] = React.useState('');
  const handleChange = (event) => setInputValue(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted: ${inputValue}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
export default ControlledForm;