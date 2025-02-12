// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './App.css'

// eslint-disable-next-line no-unused-vars
function TrickOne () {
  const [name, setName] = useState('')
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-dark'>Count: {count}</h1>
      <button onClick={() => setCount(count => count + 1)}>Increment</button>
      <br />
      <hr />
      <h1>Name: {name}</h1>
      <input
        type='text'
        onChange={e => {
          setName(e.target.value)
        }}
      />
      <br />
      <br />
      <hr />
    </>
  )
}

export default TrickOne