// src/ProviderComponent.jsx
//import React from 'react';
import ThemeContext from './context/ThemeContext';
import Form from './components/Form';
import './ProviderComponent.css';

export default function ProviderComponent() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  );
}
