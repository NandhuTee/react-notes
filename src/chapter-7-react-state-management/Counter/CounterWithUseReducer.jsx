import{ useReducer } from 'react';

// Define the initial state for the reducer
const initialState = { count: 0 };

// Define the reducer function to handle actions
function reducer(state, action) {
  switch (action.type) {
    case 'increment': // Increment action
      return { count: state.count + 1 };
    case 'decrement': // Decrement action
      return { count: state.count - 1 };
    case 'reset': // Reset action
      return { count: 0 };
    default: // Handle unexpected actions
      throw new Error('Unknown action type');
  }
}

function CounterWithUseReducer() {
  // useReducer returns the current state and a dispatch function
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Counter with useReducer</h2>
      
      {/* Display the current count */}
      <p>Count: {state.count}</p>
      
      {/* Increment button triggers the 'increment' action */}
      <button onClick={() => dispatch({ type: 'increment' })}>
        Increment
      </button>

      {/* Decrement button triggers the 'decrement' action */}
      <button onClick={() => dispatch({ type: 'decrement' })}>
        Decrement
      </button>

      {/* Reset button triggers the 'reset' action */}
      <button onClick={() => dispatch({ type: 'reset' })}>
        Reset
      </button>
    </div>
  );
}

export default CounterWithUseReducer;
