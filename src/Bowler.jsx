import { useState } from 'react';

export default function Bowler() {
  const [balls, setBalls] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [runs, setruns] = useState(0);

  const handleRuns = () => {
    if (runs < 100) {
      const updatedRuns = runs + 1;
      setruns(updatedRuns);
    }
  };

  const handleBall = () => {
    const updatedBalls = balls + 1;
    setBalls(updatedBalls);
  };

  const handleWicket = () => {
    if (wickets < 7) {
      const updatedWickets = wickets + 1;
      setWickets(updatedWickets);
    }
  };

  return (
    <div className="bowler">
      <h3>Bowler: Shakib al hasan</h3>
      <h1>
        Bowling figure: {wickets}/{runs}
      </h1>
      {wickets === 5 && <p>Congratulations for fifer!</p>}
      <p>
        <small>
          Over: {parseInt(balls / 6)}.{balls % 6} overs
        </small>
      </p>
      <button onClick={handleBall}>Ball</button>
      <button onClick={handleWicket}>Wickets</button>
      <button onClick={handleRuns}>Runs</button>
      <br />
      <br />
    </div>
  );
}
