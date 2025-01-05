import React from "react";
function UncontrolledForm() {
    const inputRef = React.useRef(null);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`Submitted: ${inputRef.current.value}`);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
    );
  }

  export default UncontrolledForm;