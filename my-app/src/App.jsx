import { useState, Fragment } from "react";

export function App() {
  const [count, setCount] = useState(0)
  const handleCllick= () => {
    console.log('hello from click handler')
    setCount(count+1)
  }
  const a = "Bye"
  const b = "Hello"

  return (
          <Fragment> 
            <h1>hello world </h1> <h2> count is: {count} </h2>
            <button onClick={ handleCllick }> Increment</button>
            <div>
              <Toggle />
              <Toggle />
              <Toggle />
              <Toggle />
            </div>

            <h3> toggle with props: </h3>
            <div>
              <ToggleBetween thingA = {a} thingB = {b} username = "John Doe" />
              <ToggleBetween thingA = {1} thingB = {0} username = "Jane"  />
              <ToggleBetween thingA = {"cat"} thingB = {"dog"} username = "Joana" />
              <ToggleBetween thingA = {"true"} thingB = {"false"} username = "Alice" />
            </div>
  
          </Fragment>
  );
}

export function Toggle () {
  const [on, setOn] = useState(false)
  return (
  <>
   <button onClick={()=> setOn(!on)}> {on ? "On" : "Off"} </button>
  </>
  )
}

function ToggleBetween(props) {
  console.log(props)
  const [on, setOn] = useState(false)
  
  return (
  <>
  <h4>{props.username}</h4>
   <button onClick={()=> setOn(!on)}> {on ? props.thingA : props.thingB} </button>
  </>
  )
}