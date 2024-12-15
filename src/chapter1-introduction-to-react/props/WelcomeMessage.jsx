
function WelcomeMessage({ name }) {
  return <h1>Welcome, {name}!</h1>;
}

export default WelcomeMessage;
// Disable ESLint rule for missing prop validation
/* eslint-disable react/prop-types */