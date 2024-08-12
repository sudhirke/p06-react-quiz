function FinishedScreen({ points, maxPoints, highscore, dispatch }) {
  const percent = (points / maxPoints) * 100;
  let emoji;
  if (percent >= 90) emoji = "🏆";
  if (percent >= 70 && percent < 90) emoji = "🥇";
  if (percent >= 50 && percent < 70) emoji = "🥉";
  if (percent < 50) emoji = "🤦🏼‍♂️";
  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        You scored <strong>{points}</strong> out of {maxPoints} ({percent}){" "}
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishedScreen;
