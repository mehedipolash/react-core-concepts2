import { useState } from 'react';

export default function Bowler() {
  const [balls, setBalls] = useState(0);
  const [wickets, setWickets] = useState(0);

  const handleBall = () => {
    const updatedBalls = balls + 1;
    setBalls(updatedBalls);
  };

  const handleWicket = () => {
    const updatedWickets = wickets + 1;
    setWickets(updatedWickets);
  };

  return (
    <div className="bowler">
      <h3>Bowler: Shakib al hasan</h3>
      <h1>Wickets: {wickets}</h1>
      {wickets === 5 && <p>Congratulations for fifer!</p>}
      <p>
        <small>
          Bowling figure: {parseInt(balls / 6)}.{balls % 6} overs
        </small>
      </p>
      <button onClick={handleBall}>Ball</button>
      <button onClick={handleWicket}>Wickets</button>
    </div>
  );
}
