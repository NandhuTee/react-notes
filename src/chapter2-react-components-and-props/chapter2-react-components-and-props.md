### Chapter 2: ****React Components and Props****

**Heading**: Building Blocks of React Applications

**1\. Introduction to Components**

- **Definition**:  
    A **component** in React is a reusable and independent block of UI that can manage its own structure, behavior, and state. Components enable modular development, making code more manageable and reusable.
- **Types of Components**:
    1. **Functional Components**:
        - Simple JavaScript functions that accept props and return JSX.
        - Can use hooks (like useState) to manage state.
        -	Example:
```jsx

function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

```

  **1. Class Components**:
        - ES6 classes that extend React.Component.
        - Can maintain internal state using this.state and update it with this.setState().
        - Example:

```jsx

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

**2\. Functional Components in Detail**

- **Features**:
  - Simpler and easier to understand.
  - Recommended for most use cases.
  - Use hooks for state and lifecycle management.
- **Example with Props**:

```jsx

function Greeting(props) {
  return <h1>Welcome, {props.username}!</h1>;
}
```

- **Example with useState Hook**:

```jsx

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

**3\. Class Components in Detail**

- **Features**:
  - Used in older React applications before hooks were introduced.
  - Can maintain state and have access to lifecycle methods.

- **Lifecycle Methods**:
  - **Mounting** (e.g., componentDidMount)
  - **Updating** (e.g., componentDidUpdate)
  - **Unmounting** (e.g., componentWillUnmount)
```jsx
import { Component } from 'react';

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor called");
  }

  componentDidMount() {
    console.log("componentDidMount called");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate called");
  }

  render() {
    return <h1>Check the console for lifecycle logs!</h1>;
  }
}

export default LifecycleDemo;
```

**4\. Understanding Props**

- **Definition**:  
    Props (short for "properties") are inputs to a component. They are immutable and passed from parent to child components.
- **Passing Props**:

```jsx

function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Welcome name="John" />;
}
```

- **Default Props**:

```jsx

function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

Welcome.defaultProps = {
  name: "Guest",
};
```
- **PropTypes**:  
    PropTypes help validate the type of props passed to a component.

```jsx

import PropTypes from 'prop-types';

function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
};
```

**5\. Composition vs. Inheritance**

- React encourages **composition** over **inheritance**.
- **Composition**: Passing child components or data through props to create flexible and reusable components.
- **Example of Composition**:

```jsx

function Dialog(props) {
  return (
    <div className="dialog">
      <h1>{props.title}</h1>
      {props.children}
    </div>
  );
}

function App() {
  return (
    <Dialog title="Welcome">
      <p>This is a reusable dialog component!</p>
    </Dialog>
  );
}
```
**6\. React Fragment**

- A **React Fragment** is used to group multiple elements without adding extra nodes to the DOM.
- **Example**:

```jsx

function List() {
  return (
    <>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </>
  );
}
```
**7\. Reusability with Components**

- Components promote **code reusability** by allowing you to build and use modular pieces of UI across different parts of your application.
- **Reusable Button Example**:

```jsx

function Button(props) {
  return <button onClick={props.onClick}>{props.label}</button>;
}

function App() {
  const handleClick = () => alert("Button clicked!");

  return <Button label="Click Me" onClick={handleClick} />;
```
**8\. Best Practices for Components and Props**

- **Keep Components Small and Focused**: A component should ideally do one thing.
- **Use Descriptive Prop Names**: Make it clear what each prop does.
- **Pass Only Required Data**: Avoid passing unnecessary data through props.
- **Avoid Mutating Props**: Always treat props as immutable.
- **Use Default Props and Prop Validation**: Define default values for props and validate them using PropTypes.

**9\. Conclusion and Next Steps**

- This chapter introduced React components (functional and class), the role of props, and the importance of composition.
- The next chapter will cover **State and Lifecycle in React**, focusing on managing and updating data dynamically within components.
