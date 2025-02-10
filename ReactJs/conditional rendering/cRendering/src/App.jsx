
import { useState } from 'react'
import './App.css'
import LogOut from './components/LogOut'
import LoginBtn from './components/LoginBtn'

function App() {
 const [isLoggedIn, setLoggedIn] = useState(true)

//  if (!isLoggedIn) {
//     return(
//       <LoginBtn/>
//     )
//  }


// return(
//   <div>
//     <h1>welcome everyone</h1>
//     <div>
//       {isLoggedIn && <LogOut/>}
//     </div>
//   </div>
// )

//  return(
//   <div>
//     {isLoggedIn ? <LogOut/> : <LoginBtn/>}
//   </div>
//  )

  // if (isLoggedIn) {
  //   return (
  //     <LogOut/>
  //   )
  // }

  // else{
  //   return (
  //     <LoginBtn/>
  //   )
  // }
}

export default App
