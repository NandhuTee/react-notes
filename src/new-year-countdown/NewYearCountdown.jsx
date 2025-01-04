import  { useEffect, useState } from "react";
import "./Countdown.css";

const Countdown = () => {
  const [count, setCount] = useState(30);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (count > 0) {
      const timer = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      setShowMessage(true);
    }
  }, [count]);

  return (
    <div className="countdown-container">
      {!showMessage ? (
        <div className="countdown">{count}</div>
      ) : (
        <div className="new-year-message">
          <h1>Happy New Year! Success in all you do</h1>
          <div className="fireworks">
            <div className="firework"></div>
            <div className="firework"></div>
            <div className="firework"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Countdown;
