import  { useState } from 'react';
import CounterWithPropsChild from './CounterWithPropsChild';

/**
 * CounterWithPropsParent component manages the state for a counter and passes
 * the state and state-modifying functions as props to the CounterWithPropsChild component.
 *
 * @component
 * @example
 * return (
 *   <CounterWithPropsParent />
 * )
 */


function CounterWithPropsParent() {
  // Declare a state variable 'count' with initial value 0 and a function 'setCount' to update it
  const [count, setCount] = useState(0);

  // Function to increment the count state
  const increment = () => setCount(count + 1);

  // Function to decrement the count state
  const decrement = () => setCount(count - 1);

  return (
    <div>
      {/* Render the title for the counter */}
      <h2>Counter with Props</h2>
      {/* Render the CounterWithPropsChild component with count, increment, and decrement passed as props */}
      <CounterWithPropsChild 
        count={count} 
        increment={increment} 
        decrement={decrement} 
      />
    </div>
  );
}

export default CounterWithPropsParent;
