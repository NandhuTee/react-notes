import  { useState, useEffect } from 'react';

function UseEffectex3() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
      //console.log(seconds);
    }, 1000);

    return () => {
      clearInterval(interval); // Cleanup
    };
  }[seconds]);

  return <div>Timer: {seconds} seconds</div>;
}
export default UseEffectex3;