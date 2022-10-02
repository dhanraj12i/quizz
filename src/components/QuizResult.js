import { useEffect } from "react";
import React from "react";

function QuizResult({ result, retry, correct }) {
  //
  // console.log(result,correct);
  return (
    <div className="result-screen">
      <h2>Result</h2>
      <p>Correct Attempted: {correct} </p>
      {/* <p>Correct Attempted: {correct} </p> */}
      {/* <p>IncorrectAttempted: {totala - correcta}</p> */}
      <p>Total Marks: {result.total}</p>
      <br />
      <button onClick={retry}>Retry</button>
    </div>
  );
}

export default QuizResult;
