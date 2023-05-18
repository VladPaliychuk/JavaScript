import { useState, useEffect } from 'react';

function Test() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(3).fill([]));

  const questions = [
    {
      text: 'Яка столиця України?',
      options: ['Київ', 'Львів', 'Одеса', 'Харків']
    },
    {
      text: 'Який рік був проголошений незалежність України?',
      options: ['1991', '1993', '1989', '1994']
    },
    {
      text: 'Які кольори на прапорі України?',
      options: ['синій, жовтий', 'синій', 'жовтий', 'жовтий, синій']
    },
  ];

  function handleCheckboxChange(event, index) {
    const isChecked = event.target.checked;
    const option = event.target.value;

    setAnswers(prevAnswers => {
      const newAnswers = [...prevAnswers];
      if (isChecked) {
        newAnswers[currentQuestion] = [...newAnswers[currentQuestion], option];
      } else {
        newAnswers[currentQuestion] = newAnswers[currentQuestion].filter(a => a !== option);
      }
      return newAnswers;
    });
  }

  function handleNext() {
    setCurrentQuestion(prevQuestion => prevQuestion + 1);
  }

  function handleBack() {
    setCurrentQuestion(prevQuestion => prevQuestion - 1);
  }

  useEffect(() => {
    setCurrentQuestion(0);
    setAnswers(Array(3).fill([]));
  }, []);

  return (
    <div>
      <h2>{questions[currentQuestion].text}</h2>
      <form>
        {questions[currentQuestion].options.map((option, index) => (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                value={option}
                checked={answers[currentQuestion].includes(option)}
                onChange={(event) => handleCheckboxChange(event, index)}
              />
              {option}
            </label>
          </div>
        ))}
      </form>
      <button onClick={handleBack} disabled={currentQuestion === 0}>Назад</button>
      <button onClick={handleNext} disabled={currentQuestion === 2}>Далі</button>
    </div>
  );
}

export default Test;