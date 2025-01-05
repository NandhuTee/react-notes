// src/utils/formHelpers.js
export function handleChange(event, setState) {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  }
  