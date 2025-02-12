/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

// eslint-disable-next-line no-unused-vars
function TrickThree() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(()=>{
        setCount(count + 1);
        
    },1000)
  });  

  return (
    <div>
        <h1>UseEffect Timer</h1>
      <h3>You clicked {count} times</h3>      
    </div>
  );
}

export default TrickThree