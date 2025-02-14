
import './App.css'
import { useMemo, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState(0)


  function ExpensiveTask(num) {
    for (let i = 0; i < 1000000000; i++) {
        return num*2
      
    }
  }


  let doubleValue = ExpensiveTask(4)

  useMemo(() => ExpensiveTask(input),[input])
  
  return (
    <div>
      <button onClick={() => setCount(count+1)}>
        Increment
      </button>

      <div>
        count: {count}
      </div>


      <input 
      type='number'
      placeholder='enter number'
      value={input}
      onChange={(e) => setInput(e.target.value)} />

      <div>
        Double: {doubleValue}
      </div>
    </div>
  )
}

export default App
