import React from 'react';

const Button = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

const ButtonGroup = () => {
  return (
    <div>
      <Button label="Save" onClick={() => alert("Save clicked")} />
      <Button label="Cancel" onClick={() => alert("Cancel clicked")} />
    </div>
  );
};

export default ButtonGroup;
