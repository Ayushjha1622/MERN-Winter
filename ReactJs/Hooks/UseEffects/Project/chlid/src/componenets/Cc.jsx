import React, { useContext } from 'react'
import { ThemeContext } from '../App'
const Cc = () => {
    // const theme = useContext(ThemeContext)
    const {theme, setTheme} = useContext(ThemeContext)
    function ToggleTheme() {
        if (theme === 'light') {
            setTheme('dark')
        }

        else{
            setTheme('light')
        }
        
    }
  return (
    <div>
      <button onClick={ToggleTheme}>
        Change Theme
      </button>
    </div>
  )
}

export default Cc
