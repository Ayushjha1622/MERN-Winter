import usercard from "./components/usercard"
import aj  from "../assets/aj.jpeg"
import mp  from "../assets/aj.jpg"
import prc  from "../assets/aj.jpg"

function App() {
  

  return (
    <div className="container">
      <usercard name="love1 ayush" desc="desc1" image={aj} style={{"border-radius": "10px"}}/>    
      <usercard name="love2 ayush" desc="desc2" image={mp}/>    
      <usercard name="love3 ayush" desc="desc3" image={prc}/>    
    </div>
  )
}

export default App
