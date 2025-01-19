
/**
 * CounterWithPropsChild component displays a count and provides buttons
 *  to increment and decrement the count.
 *
 * @param {Object} props - The props object.
 * @param {number} props.count - The current count value.
 * @param {Function} props.increment - Function to increment the count.
 * @param {Function} props.decrement - Function to decrement the count.
 * @returns {JSX.Element} The rendered component.
 */
function CounterWithPropsChild({ count, increment, decrement }) {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default CounterWithPropsChild;
