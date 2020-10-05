import React, { useState } from 'react';
import './App.css';
import { useSpring, animated } from 'react-spring';
import Interface from './Interface.js';
import Stopwatch from './Stopwatch.js';

function App() {
  const [click, setClick] = useState(null);
  const colors =
    ["lightblue",
      "lightgreen",
      "lightgoldenrodyellow",
      "lightpink",
      "lightsalmon",
      "lightcoral",
      "lightskyblue",
      "lightslategrey"];
  const changeColor = useSpring({
    to: { background: click !== null ? colors[click] : 'white' }
  });

  return (
    <animated.div
      className="app-container"
      style={changeColor}
      onClick={() => setClick(click === null ? 0 : (click + 1) % 8)}
    >
      <Stopwatch />
      <Interface />
    </animated.div>
  );
}

export default App;
