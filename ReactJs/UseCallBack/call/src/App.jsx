
import { useCallback, useState } from 'react'
import './App.css'
import Child from "./components/Child"

function App() {
  const [count, setCount] = useState(0)


  const handleClick = useCallback(() =>   {
    setCount(count+1)
  },[])



  return (
    <div>
      <div>
        Count: {count}
      </div>

      <div>
        <button onClick={handleClick}>
          Increment
        </button>
      </div>
      <br />
      <br />

      <div>
        <Child buttonName="Click me"/>
      </div>
    </div>
  )
}

export default App
