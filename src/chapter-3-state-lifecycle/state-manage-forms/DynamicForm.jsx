import React, { useState } from "react";

const DynamicForm = () => {
  const [inputs, setInputs] = useState({ name: "", age: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${inputs.name}, Age: ${inputs.age}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Dynamic Form</h1>
      <label>
        Name:
        <input name="name" value={inputs.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Age:
        <input name="age" value={inputs.age} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
