// eslint-disable-next-line no-unused-vars
import React, { useState,useEffect } from 'react'
import './App.css'

// eslint-disable-next-line no-unused-vars
function TrickTwo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default TrickTwo