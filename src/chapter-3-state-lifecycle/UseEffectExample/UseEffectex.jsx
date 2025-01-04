import { useEffect } from 'react';

function UseEffectExample() {
  useEffect(() => {
    console.log('Component mounted');
    // Fetch data or perform one-time operations here.
  }, []); // Empty dependency array

  return <div>Hello World</div>;
}

export default UseEffectExample;
