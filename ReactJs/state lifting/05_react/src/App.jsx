
import './App.css'
import Card from './components/Card'


function App() {
  const [name, setName] = useState('')

  return (
    <div>
      <Card name={name}  setName={setName}/>
      {/* <h1>My First React App</h1> */}
      <P>I m inside parent component and value of name is {name}</P>
    </div>
  )
}

export default App
