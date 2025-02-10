
import './App.css'

function App() {

  function handleClick() {
    alert("I m Clicked")
  }

  function handleMouseOver() {
    alert("mein upar aa gya ")
  }

  function handleInputChange(e) {
    // console.log("input me value change hui h");

    console.log("value till now:",e.target.value);
    
    
    
  }

  function handleSubmit(e) {
    e.preventDefault()
    alert("submit kardu kya")
  }

  
  

  return (
    <div>

      <button onClick={() => alert("button click hua h")}>
        click me
      </button>

      {/* <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} />
        <button type='submit'>Submit</button>
      </form> */}

      {/* <p onMouseOver={handleMouseOver} style={{border: "1px solid black"}}>
        I m para
      </p>
      
      <button onClick={handleClick}>
        Click Me
      </button>*/
   }
     </div>
  )
}
export default App
