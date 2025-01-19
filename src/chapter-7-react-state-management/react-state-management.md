### **Introduction to State Management in React**

State management in React refers to handling the state of a component or application. State is a plain JavaScript object that represents part of the component's data that may change over time. Effective state management ensures that your UI updates automatically when the state changes, keeping your application dynamic and interactive.

React provides several ways to manage state, ranging from local state within a component to global state using external libraries like Redux or Context API.

### **Types of State in React**

1.  **Local State:** Managed within a single component using hooks like useState.
    
2.  **Global State:** Shared across multiple components, often managed using libraries like Context API, Redux, or MobX.
    
3.  **Server State:** Data fetched from an external server and integrated into the UI.
    
4.  **URL State:** Data present in the URL, like query parameters or route state.
    

### **Example Programs**

#### 1\. **Managing Local State with useState**

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // Initialize state

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
```

**Explanation:**

*   useState(0) initializes the state variable count with a value of 0.
    
*   setCount updates the state.
    
*   The UI updates automatically when count changes.
    

#### 2\. **Using the Context API for Global State Management**
```jsx
import React, { createContext, useState, useContext } from "react";

// Create Context
const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme}>
        <h1>Theme is {theme}</h1>
        <ToggleTheme />
      </div>
    </ThemeContext.Provider>
  );
}

function ToggleTheme() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Toggle Theme
    </button>
  );
}

export default App;
   ```

**Explanation:**

*   ThemeContext is used to share state across components.
    
*   The useContext hook allows components to consume the shared state.
    

#### 3\. **State Management with Redux**

Install Redux:

```bash
   npm install redux react-redux  
   ```

**Counter Example with Redux**

*   **Store (state):**
    

```jsx
// store.js
import { createStore } from "redux";

const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const store = createStore(counterReducer);

export default store;
```

*   **Provider and Component:**
    

```jsx
   // App.js
import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store";

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
  ```

**Explanation:**

*   Redux manages global state using a centralized store.
    
*   useSelector reads data from the Redux store.
    
*   useDispatch sends actions to update the store.
    

### **Best Practices**

1.  Use **local state** for simple, component-specific data.
    
2.  Use **Context API** or libraries like **Redux** for complex, app-wide state.
    
3.  Keep state updates predictable and avoid mutating state directly.
    
4.  Split state into manageable parts to avoid bloated state objects.