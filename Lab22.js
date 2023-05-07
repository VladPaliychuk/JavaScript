import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Task1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isValid: false
    };
  }

  handleInputChange = event => {
    const value = event.target.value;
    const isValid = value.length >= 4 && value.length <= 9;
    this.setState({ value, isValid });
  };

  render() {
    const { value, isValid } = this.state;

    const inputStyle = {
      border: `2px solid ${isValid ? 'green' : 'red'}`
    };

    return (
      <div>
        <input
          type="text"
          value={value}
          onChange={this.handleInputChange}
          style={inputStyle}
        />
      </div>
    );
  }
}

const Task3 = ({ employees = [
  { id: 1, firstName: 'Ростислав', lastName: 'Дзедзінський', salary: 4000 },
  { id: 2, firstName: 'Ростиславн', lastName: 'Дзедзінський', salary: 2000  },
  { id: 3, firstName: 'Ростислав', lastName: 'Дзедзінський', salary: 3000  },
  { id: 4, firstName: 'Ростислав', lastName: 'Дзедзінський', salary: 4000  },
  { id: 5, firstName: 'Ростислав', lastName: 'Дзедзінський', salary: 11000  },
  { id: 6, firstName: 'Ростислав', lastName: 'Дзедзінський', salary: 2000  },
  { id: 7, firstName: 'Ростислав', lastName: 'Дзедзінський', salary: 1000  },
  { id: 8, firstName: 'Ростислав', lastName: 'Дзедзінський', salary: 6000  },
  { id: 9, firstName: 'Ростислав', lastName: 'Дзедзінський', salary: 4000  },
  { id: 10, firstName: 'Ростислав', lastName: 'Дзедзінськийо', salary: 5000  },
  { id: 11, firstName: 'Ростислав', lastName: 'Дзедзінський', salary: 3000  },
  { id: 12, firstName: 'Ростислав', lastName: 'Дзедзінський', salary: 6000  },
] }) => {
  const [page, setPage] = React.useState(1);
  const itemsPerPage = 10;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedEmployees = employees.slice(startIndex, endIndex);

  const pageCount = Math.ceil(employees.length / itemsPerPage);
  const pageNumbers = Array.from({ length: pageCount }, (_, i) => i + 1);

  const handlePageClick = (pageNum) => {
    setPage(pageNum);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {displayedEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {pageNumbers.map((pageNum) => (
          <button key={pageNum} onClick={() => handlePageClick(pageNum)}>
            {pageNum}
          </button>
        ))}
      </div>
    </div>
  );
};

function Task2() {
  const [employees, setEmployees] = React.useState([
    { firstName: "John", lastName: "Doe", salary: 50000, gender: "Male" },
    { firstName: "Jane", lastName: "Doe", salary: 60000, gender: "Female" },
  ]);

  const [newEmployee, setNewEmployee] = React.useState({
    firstName: "",
    lastName: "",
    salary: "",
    gender: "Male",
  });

  const handleInputChange = (event) => {
    setNewEmployee({
      ...newEmployee,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmployees([...employees, newEmployee]);
    setNewEmployee({
      firstName: "",
      lastName: "",
      salary: "",
      gender: "Male",
    });
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Salary</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.salary}</td>
              <td>{employee.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={newEmployee.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={newEmployee.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="salary">Salary:</label>
          <input
            type="text"
            name="salary"
            value={newEmployee.salary}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <select
            name="gender"
            value={newEmployee.gender}
            onChange={handleInputChange}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

class Task4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: [],
      selectedCity: ''
    };
  }

  handleCityChange = (event) => {
    this.setState({ selectedCity: event.target.value });
  }

  handleAddCity = () => {
    const { cities } = this.state;
    const newCity = this.inputCity.value;
    if (newCity && !cities.includes(newCity)) {
      this.setState({
        cities: [...cities, newCity],
        selectedCity: newCity
      });
      this.inputCity.value = '';
    }
  }

  render() {
    const { cities, selectedCity } = this.state;

    return (
      <div>
        <label htmlFor="citySelect">Select a city:</label>
        <select id="citySelect" value={selectedCity} onChange={this.handleCityChange}>
          <option value="">--Select a city--</option>
          {cities.map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
        <br />
        <label htmlFor="newCity">Add a city:</label>
        <input type="text" id="newCity" ref={(input) => { this.inputCity = input; }} />
        <button onClick={this.handleAddCity}>Add</button>
        <br />
        {selectedCity && <p>You have selected {selectedCity}</p>}
      </div>
    );
  }
}

class Task5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      fromCurrency: 'USD',
      toCurrency: 'EUR',
      conversionRate: 0.0
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleConvertClick = this.handleConvertClick.bind(this);
  }

  componentDidMount() {
    this.fetchConversionRate();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.fromCurrency !== this.state.fromCurrency || prevState.toCurrency !== this.state.toCurrency) {
      this.fetchConversionRate();
    }
  }

  fetchConversionRate() {
    const url = `https://api.exchangerate-api.com/v4/latest/${this.state.fromCurrency}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const conversionRate = data.rates[this.state.toCurrency];
        this.setState({ conversionRate });
      });
  }

  handleInputChange(event) {
    const { value } = event.target;
    this.setState({ amount: value });
  }

  handleSelectChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleConvertClick() {
    const { amount, conversionRate } = this.state;
    const result = amount * conversionRate;
    alert(`${amount} ${this.state.fromCurrency} = ${result} ${this.state.toCurrency}`);
  }

  render() {
    return (
      <div>
        <h2>Currency Converter</h2>
        <form>
          <label>
            Amount:
            <input type="number" value={this.state.amount} onChange={this.handleInputChange} />
          </label>
          <label>
            From:
            <select name="fromCurrency" value={this.state.fromCurrency} onChange={this.handleSelectChange}>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </label>
          <label>
            To:
            <select name="toCurrency" value={this.state.toCurrency} onChange={this.handleSelectChange}>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </label>
          <button type="button" onClick={this.handleConvertClick}>Convert</button>
        </form>
      </div>
    );
  }
}

class Task6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: [
        {
          question: 'Питання 1',
          answers: [
            'Відповідь 1',
            'Відповідь 2',
            'Відповідь 3',
            'Відповідь 4',
            'Відповідь 5',
          ],
          right: 1,
          selected: null,
        },
        {
          question: 'Питання 2',
          answers: [
            'Відповідь 1',
            'Відповідь 2',
            'Відповідь 3',
            'Відповідь 4',
            'Відповідь 5',
          ],
          right: 3,
          selected: null,
        },
        {
          question: 'Питання 3',
          answers: [
            'Відповідь 1',
            'Відповідь 2',
            'Відповідь 3',
            'Відповідь 4',
            'Відповідь 5',
          ],
          right: 2,
          selected: null,
        },
      ],
    };
  }

  handleAnswerChange = (questionIndex, answerIndex) => {
    this.setState((prevState) => {
      const newTest = [...prevState.test];
      newTest[questionIndex].selected = answerIndex;
      return { test: newTest };
    });
  };

  checkAnswer = (questionIndex) => {
    const question = this.state.test[questionIndex];
    if (question.selected === null) {
      return;
    }
    if (question.selected === question.right) {
      return 'correct';
    }
    return 'incorrect';
  };

  render() {
    return (
      <div>
        {this.state.test.map((question, questionIndex) => (
          <div key={questionIndex}>
            <p>{question.question}</p>
            {question.answers.map((answer, answerIndex) => (
              <label key={answerIndex}>
                <input
                  type="radio"
                  name={`question-${questionIndex}`}
                  value={answerIndex}
                  checked={question.selected === answerIndex}
                  onChange={() => this.handleAnswerChange(questionIndex, answerIndex)}
                />
                {answer}
              </label>
            ))}
            <p style={{ color: this.checkAnswer(questionIndex) === 'correct' ? 'green' : 'red' }}>
              {this.checkAnswer(questionIndex) === 'correct' ? 'Відповідь правильна' : 'Відповідь неправильна'}
            </p>
          </div>
        ))}
      </div>
    );
  }
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Task6 />);