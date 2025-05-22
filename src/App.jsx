
import './App.css'
import Counter from './Counter'
import Batsman from './Batsman'
import Bowler from './Bowler'

function App() {

  function handleClick() {
    alert('i am clicked')
  }

  const handleClick3 = () => {
    alert('clicked3')
  }

  const handleClick5 = (num) => {
    const newnumber = num + 5;
    alert(newnumber);
  }
  

  return (
    <>
      
      <h3>Vite + React</h3>
      <Batsman></Batsman> 
      <br />
      <Bowler></Bowler>
      <Counter></Counter>

      {/* <button onclick='handleClick()'>click me</button> */}
      <button onClick={handleClick}>click me</button>
      <button onClick={function handleClick2() { alert('clicked 2') }}>click me2</button>
      <button onClick={handleClick3}>Click me 3</button>
      <button onClick={()=>alert('clicked4')}>Click me 4</button>
      <button onClick={()=>handleClick5(10)}>Click add 5</button>
      
    </>
  )
}

export default App
