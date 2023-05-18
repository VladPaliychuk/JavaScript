import { useState } from 'react';

const questions = [
  {
    question: 'Яка столиця України?',
    answer: 'Київ'
  },
  {
    question: 'Який рік був проголошений незалежність України?',
    answer: '1991'
  },
  {
    question: 'Які кольори на прапорі України?',
    answer: 'синій, жовтий'
  }
];

function Test() {
  const [answers, setAnswers] = useState(new Array(questions.length).fill(''));
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleInputChange = (event, index) => {
    const newAnswers = [...answers];
    newAnswers[index] = event.target.value;
    setAnswers(newAnswers);
  };

  const renderQuestion = (question, index) => {
    if (submitted) {
      const answer = answers[index];
      const correct = answer === question.answer;
      const message = correct
        ? 'ваша відповідь правильна'
        : `ваша відповідь така, не правильно, правильна відповідь: ${question.answer}`;
      const color = correct ? 'green' : 'red';

      return (
        <div key={index}>
          <p>{question.question}</p>
          <p style={{ color }}>{message}</p>
        </div>
      );
    } else {
      return (
        <div key={index}>
          <p>{question.question}</p>
          <input type="text" value={answers[index]} onChange={(event) => handleInputChange(event, index)} />
        </div>
      );
    }
  };

  const renderQuestions = () => {
    return questions.map(renderQuestion);
  };

  const renderButton = () => {
    if (submitted) {
      return null;
    } else {
      return <button onClick={handleSubmit}>скласти тест</button>;
    }
  };

  const renderScore = () => {
    if (submitted) {
      const correctCount = questions.filter((question, index) => answers[index] === question.answer).length;
      const score = `${correctCount}/${questions.length}`;
      return <p>Ваш результат: {score}</p>;
    } else {
      return null;
    }
  };

  return (
    <div>
      {renderQuestions()}
      {renderButton()}
      {renderScore()}
    </div>
  );
}

export default Test;