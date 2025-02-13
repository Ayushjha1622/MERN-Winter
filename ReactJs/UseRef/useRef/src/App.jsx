
import { useRef, useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {

  const [time, setTime] = useState(0)
  let timerRef = useRef(null);


  function startTimer(){
    timerRef.current = setInterval(() => {
        setTime(time => time+1)
    },1000)
  }
  function stopTimer(){
    clearInterval(timerRef.current)
    timerRef.current = null
  }
  function resetTimer(){
    stopTimer()
    setTime(0)
  }
  // const [count,setCount] = useState(0)
  // let val=useRef(0)
  // let btnRef = useRef()


  // function handleIncrement(){
  //   setCount(count+1)
  //   val.current += 1
  //   console.log("value of val: ",val);

     
  // }

  // function changeColor(){
  //  btnRef.current.style.backgroundColor="red"
  // }

  // useEffect(() => {
  //   console.log("I m rendered");
    
  // })

  return (
   <div>
    <h1>Stopwatch: {time} seconds</h1>
    <button onClick={startTimer}>
      Start
    </button>
    <br />
    <br />
    <button onClick={stopTimer}>
      Stop
    </button>
    <br />
    <br />

    <button onClick={resetTimer}>
      Reset
    </button>


    {/* <button  ref={btnRef}
    onClick={handleIncrement}>
      Increment
    </button>
    <br />
    <br />

    <button 
    onClick={changeColor}>
      Change color of 1st Button
    </button>

    <div>
      Count: {count} *
    </div> */}
   </div>
  )
}

export default App
