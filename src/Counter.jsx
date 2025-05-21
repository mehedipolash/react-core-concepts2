import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0);

  // useState is a built-in React Hook to manage component state
  //The first item is the current state.The second item is the function to update that state

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
    // setCount is the function returned by useState to update the state
  };

  const CounterStyle = {
    border: '2px solid yellow',
  };

  return (
    <div style={CounterStyle}>
      <h3>Count: {count}</h3>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}