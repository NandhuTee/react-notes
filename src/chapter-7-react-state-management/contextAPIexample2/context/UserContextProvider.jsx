// Import React to use createContext for creating a context.
import { createContext } from 'react';

// Create a new context using createContext.
// This will allow us to share data (user name) across components.
export const UserContext = createContext();

// UserContextProvider is a component that wraps children components and provides context value.
export default function UserContextProvider({ children }) {
  // The value that will be provided to the components that consume the context
  const userName = "Nandhu"; // Value to provide
  
  // Return the context provider and pass the userName as the context value.
  return (
    <UserContext.Provider value={userName}>
      {children} {/* The children components inside UserContextProvider will have access to the context */}
    </UserContext.Provider>
  );
}
