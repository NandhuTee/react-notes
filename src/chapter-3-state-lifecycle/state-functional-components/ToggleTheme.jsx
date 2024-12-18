import React, { useState } from "react";

const ToggleTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  return (
    <div style={{ background: isDarkTheme ? "#333" : "#fff", color: isDarkTheme ? "#fff" : "#000", padding: "20px" }}>
      <h1>Toggle Theme</h1>
      <p>The current theme is {isDarkTheme ? "Dark" : "Light"}</p>
      <button onClick={toggleTheme}>Switch Theme</button>
    </div>
  );
};

export default ToggleTheme;
