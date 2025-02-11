
import { useEffect, useState } from 'react'
import './App.css'
import LoggerComponents from './components/LoggerComponents'

function App() {
  // const [count, setCount] = useState(0)
  // const [total, setTotal] = useState(1)

  // runs on each render
  // useEffect(() => {
  //   alert("i will run on each render")
  // })






  // that runs only on first render
    // useEffect(() => {
    // alert("i will run on only one render")
    //  },[])





    // useEffect(() => {
    //   alert("I will run on every line when count is updated")
    // },[count])





    //  useEffect(() => {
    //   alert("I will run every time when count is updated")
      
    // },[count,total])



  //   useEffect(() => {
  //     alert("count is updated")
  //     return () => {
  //       alert("count is unmounted from UI")
  //     }
  //   },[count])






  // function handleClick() {
  //   setCount(count+1)
    
  // }


  // function handleClickTotal() {
  //   setTotal(total+1)
  // }
  

  return (
    <div>
      <LoggerComponents/>
     {/* <button onClick={handleClick}>
      update Count
     </button>
     <br/>
     Count is: {count}


     <br />
     <button onClick={handleClickTotal}>
      update Total
     </button>
     <br/>
     Total is: {total} */}
    </div>
  )
}

export default App
