

const WelcomeMessage = ({ message }) => {
  return <h1>{message}</h1>;
};

WelcomeMessage.defaultProps = {
  message: "Welcome to the React App!",
};

export default WelcomeMessage;
