import  { useState } from 'react';

function UserProfileWithUseState() {
  const [user, setUser] = useState({ name: '', age: '' });

  const updateUserName = () => setUser({ ...user, name: 'John Doe' });
  const updateUserAge = () => setUser({ ...user, age: 25 });

  return (
    <div>
      <h2>User Profile with useState</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={updateUserName}>Update Name</button>
      <button onClick={updateUserAge}>Update Age</button>
    </div>
  );
}

export default UserProfileWithUseState;
