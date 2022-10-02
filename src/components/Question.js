import { useState } from "react";

function Question({
  question,
  totalQuestions,
  currentQuestion,
  setAnswer,
  setCurrentQuestionIndex,
  setisQuestionEnd,
}) {
  const [selectedOption, setSelectedOption] = useState(null);

  const gotoNextQuestion = () => {
    if (selectedOption) {
      if (currentQuestion === 8) {
        return setisQuestionEnd(true);
      } else {
        console.log(`ans set ${selectedOption}`);
        setAnswer(selectedOption);
        setCurrentQuestionIndex(currentQuestion + 1);
      }
    }
  };

  return (
    <div className="question">
      <div className="progress-bar"></div>
      <div className="question-count">
        <b>{currentQuestion + 1}</b>
        of
        <b>{totalQuestions}</b>
      </div>
      <div className="main">
        <div className="title">
          <span>Question:</span>
          <p>{question.title}</p>
        </div>
        <div className="options">
          {question.options.map((option, index) => {
            return (
              <div
                className={index == selectedOption ? "option active" : "option"}
                key={index}
                onClick={() => setSelectedOption(index)}
              >
                {option}
              </div>
            );
          })}
        </div>
      </div>
      <div className="control">
        <button onClick={gotoNextQuestion}>Next</button>
      </div>
    </div>
  );
}

export default Question;
