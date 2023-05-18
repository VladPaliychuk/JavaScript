import React, { useState } from 'react';

const questions = [
  {
    question: 'Яка столиця України?',
    options: ['Київ', 'Львів', 'Одеса', 'Харків'],
    answer: 'Київ'
  },
  {
    question: 'Який рік був проголошений незалежність України?',
    options: ['1991', '1993', '1989', '1994'],
    answer: '1991'
  },
  {
    question: 'Які кольори на прапорі України?',
    options: ['синій, жовтий', 'синій', 'жовтий', 'жовтий, синій'],
    answer: 'синій, жовтий'
  }
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestionClick = () => {
    const isCorrect = selectedAnswer === questions[currentQuestion].answer;
    if (isCorrect) {
      setScore(score + 1);
    }

    setSelectedAnswer('');
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleRetakeQuizClick = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <div>
            You scored {score} out of {questions.length}
          </div>
          <button onClick={handleRetakeQuizClick}>Заново</button>
        </div>
      ) : (
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="question-text">{questions[currentQuestion].question}</div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((answerOption) => (
              <label key={answerOption}>
                <input
                  type="radio"
                  name="answer"
                  value={answerOption}
                  checked={selectedAnswer === answerOption}
                  onChange={() => handleAnswerOptionClick(answerOption)}
                />
                {answerOption}
              </label>
            ))}
          </div>
          <button onClick={handleNextQuestionClick}>Далі</button>
        </div>
      )}
    </div>
  );
}

export default Quiz;