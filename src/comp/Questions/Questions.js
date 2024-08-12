import Options from "../Options/Options";

function Questions({ question, dispatch, answer }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options
        question={question}
        dispatch={dispatch}
        answer={answer}
      ></Options>
    </div>
  );
}

export default Questions;
