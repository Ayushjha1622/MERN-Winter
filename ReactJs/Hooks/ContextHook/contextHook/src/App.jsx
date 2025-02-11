
import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA'

const userContext = createContext()



function App() {
  
  const [user, setUser] = useState({name: "Ayush"})

  return (
    <div>
      <userContext.provider value={user}>
        <ChildA />
      </userContext.provider>
    </div>
     
  )
}

export default App
export {userContext}
