**Chapter 3: State and Lifecycle in React**

**Heading**: _Managing Dynamic Data and Behavior in Components_

**1\. Introduction to State in React**

- **Definition**:  
    State is a built-in object that allows components to hold and manage dynamic data. Unlike props, state is mutable and can change during the lifecycle of the component.
- **Key Points**:
  - State is private and fully controlled by the component.
  - Updating state triggers a re-render of the component.

**2\. Using State in Functional Components**

- **State with useState Hook**:  
    The useState hook lets you add React state to functional components.
- **Example**:

```jsx

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
```
- **Multiple States in a Component**:  
    You can have multiple useState calls in a single component to manage different pieces of state.

```jsx

function UserInfo() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter age"
        onChange={(e) => setAge(e.target.value)}
      />
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}
```

**3\. Using State in Class Components**

- **Initializing State**:  
    State is initialized in the constructor of a class component.
- **Example**:

```jsx

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```

- **Updating State**:
  - Use this.setState() to update state.
  - Avoid modifying state directly, as it will not trigger a re-render.

**4\. State vs. Props**

| **State** | **Props** |
| --- | --- |
| Owned and managed by the component. | Passed from parent to child. |
| Mutable and dynamic. | Immutable. |
| Used for interactivity and managing local data. | Used to pass data and functions to child components. |

**5\. Lifecycle of Class Components**

- Class components have lifecycle methods to manage state and behavior during their lifecycle.
- **Phases of Lifecycle**:
    1. **Mounting**: Component is created and inserted into the DOM.
        - constructor(): Initialize state.
        - componentDidMount(): Perform setup tasks like API calls.
    2. **Updating**: Component re-renders when props or state change.
        - componentDidUpdate(prevProps, prevState): Run after every update.
    3. **Unmounting**: Component is removed from the DOM.
        - componentWillUnmount(): Cleanup tasks like clearing timers.
- **Lifecycle Methods Example**:

```jsx

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <h1>Time: {this.state.seconds}s</h1>;
  }
}
```

**6\. State Management with Hooks**

- **useEffect for Lifecycle-like Behavior**:  
    The useEffect hook allows you to handle side effects in functional components, replacing lifecycle methods in class components.
- **Example**:

```jsx

import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  return <h1>Time: {seconds}s</h1>;
```

**7\. Common Patterns with State**

- **Conditional Rendering**:  
    Render elements or components based on state.

```jsx

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}
```
- **Form Handling**:  
    Use state to manage form inputs.

```jsx

function Form() {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${input}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

**8\. Best Practices for State Management**

- Use functional components and hooks for new projects.
- Keep state as simple and minimal as possible.
- Avoid overusing state; only use it when necessary.
- Group related state variables together using objects when applicable.
- Use local state for component-specific data and a global state (e.g., Context or external libraries like Redux) for shared data.

**9\. Conclusion and Next Steps**

- This chapter explored state, its management, and the lifecycle of React components.
- The next chapter will cover **Event Handling and Conditional Rendering**, diving deeper into how React manages user interactions dynamically.