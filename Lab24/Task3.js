import React, { useState } from 'react';

const questions = [
  {
    id: 1,
    text: 'Яка столиця України?',
    correctAnswer: 'Київ'
  },
  {
    id: 2,
    text: 'Який рік був проголошений незалежність України?',
    correctAnswer: '1991'
  },
  {
    id: 3,
    text: 'Які кольори на прапорі України?',
    correctAnswer: 'синій, жовтий'
  }
];

const Test = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(''));
  const [showResults, setShowResults] = useState(false);

  const handleAnswerChange = event => {
    const index = currentQuestionIndex;
    const newAnswers = [...userAnswers];
    newAnswers[index] = event.target.value;
    setUserAnswers(newAnswers);
  };

  const handlePrevClick = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleCheckAnswersClick = () => {
    setShowResults(true);
  };

  const handleResetClick = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers(Array(questions.length).fill(''));
    setShowResults(false);
  };

  const renderQuestion = question => {
    return (
      <div key={question.id}>
        <h3>{question.text}</h3>
        <input type="text" value={userAnswers[currentQuestionIndex]} onChange={handleAnswerChange} />
      </div>
    );
  };

  const renderResults = () => {
    const results = questions.map((question, index) => {
      const isCorrect = userAnswers[index] === question.correctAnswer;
      const resultStyle = isCorrect ? { color: 'green' } : { color: 'red' };
      return (
        <div key={question.id}>
          <h3>{question.text}</h3>
          <p style={resultStyle}>Ваша відповідь: {userAnswers[index]}</p>
          <p style={resultStyle}>
            {isCorrect ? 'Правильно!' : `Неправильно. Правильна відповідь: ${question.correctAnswer}`}
          </p>
        </div>
      );
    });
    return (
      <div>
        {results}
        <button onClick={handleResetClick}>Заново</button>
      </div>
    );
  };

  const currentQuestion = questions[currentQuestionIndex];
  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  return (
    <div>
      {!showResults && (
        <div>
          {renderQuestion(currentQuestion)}
          <button onClick={handlePrevClick} disabled={isFirstQuestion}>
            Назад
          </button>
          <button onClick={handleNextClick} disabled={isLastQuestion}>
            Вперед
          </button>
          {isLastQuestion && <button onClick={handleCheckAnswersClick}>перевірити відповіді</button>}
        </div>
      )}
      {showResults && renderResults()}
    </div>
  );
};

export default Test;