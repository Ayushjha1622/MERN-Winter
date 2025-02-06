
import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count+1)
  }
 

  return (
   <div>

    <Button incrementCount = {handleClick} text="click me"/>
    <h1>{count}</h1>
    {/* <h1>Ayush jha</h1> */}
    {/* <Card name="Ayush jha">
      <h1>best web dev course</h1>
      <p>best course for web development</p>
      <p>will complete the course soon</p>
    </Card> */}
   </div>
  )
}

export default App
