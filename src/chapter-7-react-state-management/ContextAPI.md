### 1\. **Introduction to React Context API**

The **Context API** in React is a tool for state management that avoids the problem of **prop drilling** (passing data down through multiple layers of components). Instead of passing data through intermediate components, the Context API allows you to make data globally available to all components that need it. It avoids performance issues and large bundle sizes that state management libraries might cause.

### 2\. **Using the React Context API**

To use Context, there are three main steps:

*   **Context Creator**: You create a context using createContext() (similar to a Redux store).
    
*   **Context Provider**: The Provider component allows components to access the context's data.
    
*   **Context Consumer**: The Consumer component allows components to use the context's data.

### **How does React Context API work?**

The **React Context API** is a way to share values between components without having to pass props manually at every level. It provides a way to make certain values (like themes, user data, settings, etc.) available globally throughout your component tree, allowing you to avoid "prop drilling," where you have to pass props from parent to child components at multiple levels.

The Context API works by creating a **context** object that holds the data you want to share. You can then **provide** the context value at a higher level in the component tree and **consume** that value at any level of the tree, avoiding the need to pass props manually.

### **How do you provide a context value?**

To provide a context value in React, you use the Provider component from the context object. The Provider component is used to wrap the part of the component tree that should have access to the context value.

Here's how to provide a context value:

1.  **Create a context** using React.createContext().
    
2.  **Use the Provider component** to wrap your component tree and provide the value you want to share.
    
```jsx

#### Example:

import React, { createContext, useState } from 'react';

// Create a context
export const ThemeContext = createContext();

export function App() {
  const [theme, setTheme] = useState('light');

  return (
    // Provide the context value
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <SomeComponent />
    </ThemeContext.Provider>
  );
}
```

In this example, ThemeContext.Provider is used to provide the theme and setTheme values to the SomeComponent and all its descendants.

### **How do you consume a context value in a child component?**

To consume the context value in a child component, you use the useContext hook or the Context.Consumer component.

#### 1\. **Using useContext Hook** (Recommended for function components):
```jsx
import React, { useContext } from 'react';
import { ThemeContext } from './App'; // Import context

function SomeComponent() {
  // Consume the context value using useContext
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>The current theme is {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
}
```

#### 2\. **Using Context.Consumer** (For class components or legacy code):
```jsx

import React from 'react';
import { ThemeContext } from './App';

class SomeComponent extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, setTheme }) => (
          <div>
            <p>The current theme is {theme}</p>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
              Toggle Theme
            </button>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
```

In both examples, the child component (SomeComponent) can access the theme and setTheme values directly from the context.

### **How does React Context API prevent "props drilling"?**

**Props drilling** happens when you pass props down through multiple layers of components, even if intermediate components don't need them, just to reach a deeply nested child component. This can lead to cumbersome and hard-to-maintain code.

React's **Context API** prevents props drilling by allowing you to "skip" intermediate layers of components and directly provide or consume values at any level in the component tree.

Here's how it prevents props drilling:

*   Instead of passing props through each intermediate component, you provide a context value at a higher level in the component tree (e.g., at the root or a parent component).
    
*   Any child component within the Provider component can access this context value, no matter how deep the component is in the tree, without the need for passing props down manually at every level.
    

#### Without Context API (Props Drilling):
```jsx

function Grandparent() {
  return <Parent />;
}

function Parent() {
  const theme = 'light'; // Parent has to pass the theme prop down to child
  return <Child theme={theme} />;
}

function Child({ theme }) {
  return <div>{theme}</div>;
}
```

#### With Context API (No Props Drilling):
```jsx

import { createContext, useContext } from 'react';

// Create a context
const ThemeContext = createContext();

function App() {
  const theme = 'light';

  return (
    // Provide the theme value
    <ThemeContext.Provider value={theme}>
      <Child />
    </ThemeContext.Provider>
  );
}

function Child() {
  // Consume the theme value
  const theme = useContext(ThemeContext);
  return <div>{theme}</div>;
}
```

In the second example, the Child component can directly access the theme from the context without needing to receive it as a prop through multiple levels.

### Summary:

*   **Providing context**: Use the Provider component to wrap the part of your app that should have access to the shared state.
    
*   **Consuming context**: Use the useContext hook (for function components) or Context.Consumer (for class components) to access the context value.
    
*   **Prevents props drilling**: Context allows you to avoid passing props down through intermediate components, making the code cleaner and easier to maintain.
*   
[Read about the Context API in React](https://www.freecodecamp.org/news/context-api-in-react/)
