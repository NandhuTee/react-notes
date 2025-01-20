//import React from 'react';
import UserContextProvider from './context/UserContextProvider';
import ProfileComponent from './components/ProfileComponent';

export default function ProviderComponents() {
  return (
    // Wrap the ProfileComponent with UserContextProvider to provide context value
    <UserContextProvider>
        {/* ProfileComponent now has access to the context value */}
      <ProfileComponent />
    </UserContextProvider>
  );
}
