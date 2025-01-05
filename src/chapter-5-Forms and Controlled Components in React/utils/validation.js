// src/utils/validation.js
export function validateEmail(email) {
    return /\S+@\+S\.\S+/.test(email);
  }
  