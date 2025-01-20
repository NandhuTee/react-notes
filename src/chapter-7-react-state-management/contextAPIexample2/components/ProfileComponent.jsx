// Import React and the useContext hook to consume the context.
import  { useContext } from 'react';
// Import the UserContext created in UserContextProvider to access the context value.
import { UserContext } from '../context/UserContextProvider';

// ProfileComponent is a functional component that consumes the context.
export default function ProfileComponent() {
  // useContext is used to access the value from the UserContext.
  const user = useContext(UserContext); // Consume context value

  // Return the JSX displaying the user value from the context.
  return <p>User: {user}</p>; // This will render "User: John Doe" based on the provided context value.
}
