import  { useState } from 'react';

function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn(!isOn);

  return (
    <div>
      <h1>Switch is {isOn ? "ON" : "OFF"}</h1>
      <button onClick={toggle}>{isOn ? "Turn OFF" : "Turn ON"}</button>
    </div>
  );
}

export default ToggleSwitch;
