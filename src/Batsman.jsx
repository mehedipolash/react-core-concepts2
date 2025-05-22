import { useState } from "react"

export default function Batsman() {

  const [runs, setRuns] = useState(0)
  const [sixes, setSixes] = useState(0)
   
  const handleSingle=() => {
    const updatedRuns = runs + 1;
    
    setRuns(updatedRuns)
  }

  const handleSix=() => {
    const updatedRuns = runs + 6;
    const updatedSixes = sixes + 1;
    setRuns(updatedRuns)
    setSixes(updatedSixes);

  }

  return (
    <div className="batsman">
      <h3>player: Bangla Batsman</h3>
      <p>
        <small>six = {sixes}</small>
      </p>
      {runs > 50 && <p>Congratulations for 50!</p>}
      <h1>Score: {runs} </h1>
      <button onClick={handleSingle}>Singles</button>
      <button>Fours</button>
      <button onClick={handleSix}>Six</button>
      <br />
      <br />
    </div>
  );
}