

function ButtonClick() {
  const handleClick = () => {
    console.log("Button was clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}

export default ButtonClick;
