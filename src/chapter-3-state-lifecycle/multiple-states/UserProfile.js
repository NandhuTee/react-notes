import React, { useState } from "react";

const UserProfile = () => {
  const [name, setName] = useState("John Doe");
  const [age, setAge] = useState(25);

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <button onClick={() => setName("Jane Smith")}>Change Name</button>
      <button onClick={() => setAge(age + 1)}>Increase Age</button>
    </div>
  );
};

export default UserProfile;
