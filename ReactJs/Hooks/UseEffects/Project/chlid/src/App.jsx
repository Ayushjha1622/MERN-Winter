
import { createContext, useState } from 'react'
import './App.css'


const ThemeContext = createContext()

function App() {

  const [theme, setTheme] = useState('light')
  

  return (
   <div>
    
    <ThemeContext.Provider value ={theme.setTheme}>
   <div id="container" style={{backgroundColor:theme==='light' ? "beige" : "black"}}>
      <Ca/>
   </div>
    </ThemeContext.Provider>
   </div>
  )
}

export default App
export {ThemeContext}
