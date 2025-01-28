function Parents (props) {
  // eslint-disable-next-line react/prop-types
  return <h1>Hello, {props.name}</h1>
}

// eslint-disable-next-line no-unused-vars
export default function Child () {
  return (
    <div>
      <Parents name='Karan' />
      <Parents name='Laptop' />
      <Parents name='Gaurav' />
    </div>
  )
}
