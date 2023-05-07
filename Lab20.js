import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Task1 extends Component {
  state = {
    textareaValue: '',
  };

  handleTextareaChange = (event) => {
    this.setState({
      textareaValue: event.target.value,
    });
  };

  render() {
    const { textareaValue } = this.state;

    return (
      <div>
        <textarea value={textareaValue} onChange={this.handleTextareaChange} />
        <p>{textareaValue}</p>
      </div>
    );
  }
}

class Task2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }

  handleCheckboxChange = (event) => {
    this.setState({ checked: event.target.checked });
  }

  render() {
    return (
      <div>
        <input type="checkbox" onChange={this.handleCheckboxChange} />
        <span>{this.state.checked ? 'Відмічено' : 'Не відмічено'}</span>
      </div>
    );
  }
}

class Task3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ checked: event.target.checked });
  }

  render() {
    const { checked } = this.state;
    const style = checked ? { display: "block" } : { display: "none" };
    return (
      <div>
        <input type="checkbox" onChange={this.handleChange} />
        <p style={style}>Текст абзацу, який з'явиться або зникне при зміні стану чекбоксу</p>
      </div>
    );
  }
}

class Task4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: ["Київ", "Львів", "Одеса", "Харків", "Дніпро"],
      selectedCity: ""
    };
  }

  handleCityChange = (event) => {
    this.setState({ selectedCity: event.target.value });
  };

  render() {
    return (
      <div>
        <select onChange={this.handleCityChange}>
          {this.state.cities.map((city) => (
            <option key={city}>{city}</option>
          ))}
        </select>
        <p>Обране місто: {this.state.selectedCity}</p>
      </div>
    );
  }
}

class Task5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: '' 
    };
  }

  handleRadioButtonChange = (event) => {
    this.setState({
      selectedValue: event.target.value 
    });
  }

  render() {
    return (
      <div>
        <input type="radio" name="option" value="1" onChange={this.handleRadioButtonChange} />
        <input type="radio" name="option" value="2" onChange={this.handleRadioButtonChange} />
        <input type="radio" name="option" value="3" onChange={this.handleRadioButtonChange} />
        <p>Вибрано: {this.state.selectedValue}</p>
      </div>
    );
  }
}

class Task6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texts: [],
      currentText: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleInputChange(event) {
    this.setState({ currentText: event.target.value });
  }

  handleButtonClick(event) {
    const newTexts = [...this.state.texts, this.state.currentText];
    this.setState({ texts: newTexts, currentText: '' });
  }

  render() {
    const textElements = this.state.texts.map((text, index) => (
      <p key={index}>{text}</p>
    ));

    return (
      <div>
        <textarea value={this.state.currentText} onChange={this.handleInputChange} />
        <button onClick={this.handleButtonClick}>Додати текст</button>
        {textElements}
      </div>
    );
  }
}

class Task7 extends Component {
  constructor(props) {
    super(props);
    this.state = { color: 'black' };
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleColorChange(event) {
    this.setState({ color: event.target.value });
  }

  render() {
    const { color } = this.state;
    const style = { color: color };

    return (
      <div>
        <select value={color} onChange={this.handleColorChange}>
          <option value="black">Чорний</option>
          <option value="red">Червоний</option>
          <option value="blue">Синій</option>
          <option value="green">Зелений</option>
        </select>
        <p style={style}>Це текст, який змінює колір залежно від вибраного кольору.</p>
      </div>
    );
  }
}

class Task8 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkboxChecked: false,
      selectValue: 'не позначено'
    };
  }

  handleCheckboxChange = () => {
    this.setState(prevState => ({
      checkboxChecked: !prevState.checkboxChecked
    }));
  };

  handleSelectChange = event => {
    this.setState({ selectValue: event.target.value });
  };

  render() {
    const { checkboxChecked, selectValue } = this.state;
    return (
      <div>
        <select value={selectValue} onChange={this.handleSelectChange}>
          <option value="позначено">позначено</option>
          <option value="не позначено">не позначено</option>
        </select>
        <input
          type="checkbox"
          checked={checkboxChecked}
          onChange={this.handleCheckboxChange}
          disabled={selectValue === 'позначено'}
        />
      </div>
    );
  }
}

class Task9 extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedOption: '' };
  }

  handleChange = (event) => {
    this.setState({ selectedOption: event.target.value });
  }

  render() {
    let paragraphToShow;
    if (this.state.selectedOption === 'option1') {
      paragraphToShow = <p>Перший абзац</p>;
    } else if (this.state.selectedOption === 'option2') {
      paragraphToShow = <p>Другий абзац</p>;
    } else if (this.state.selectedOption === 'option3') {
      paragraphToShow = <p>Третій абзац</p>;
    }

    return (
      <div>
        <select value={this.state.selectedOption} onChange={this.handleChange}>
          <option value="">Оберіть абзац</option>
          <option value="option1">Абзац 1</option>
          <option value="option2">Абзац 2</option>
          <option value="option3">Абзац 3</option>
        </select>
        {paragraphToShow}
      </div>
    );
  }
}

class Task10 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectOptions: ['Option 1', 'Option 2', 'Option 3'],
      inputValue: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  handleButtonClick = () => {
    const newOption = this.state.inputValue;
    this.setState(prevState => ({
      selectOptions: [...prevState.selectOptions, newOption],
      inputValue: ''
    }));
  }

  render() {
    const options = this.state.selectOptions.map((option, index) => (
      <option key={index} value={option}>{option}</option>
    ));

    return (
      <div>
        <select>{options}</select>
        <input value={this.state.inputValue} onChange={this.handleInputChange} />
        <button onClick={this.handleButtonClick}>Додати</button>
      </div>
    );
  }
} 

class Task11 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkboxChecked: false,
      inputValue: ''
    };
  }

  handleCheckboxChange = (event) => {
    this.setState({ checkboxChecked: event.target.checked });
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    const { checkboxChecked, inputValue } = this.state;

    return (
      <div>
        <label>
          <input type="checkbox" checked={checkboxChecked} onChange={this.handleCheckboxChange} />
          Заблокувати інпут
        </label>
        <br />
        <label>
          Введіть текст:
          <input type="text" value={inputValue} onChange={this.handleInputChange} disabled={checkboxChecked} />
        </label>
      </div>
    );
  }
}

class Task12 extends Component {
  constructor(props) {
    super(props);
    const today = new Date();
    this.state = {
      day: today.getDate(),
      month: today.getMonth() + 1,
      year: today.getFullYear(),
      dayOfWeek: '',
    };
  }

  handleDayChange = (event) => {
    this.setState({ day: parseInt(event.target.value) });
  }

  handleMonthChange = (event) => {
    this.setState({ month: parseInt(event.target.value) });
  }

  handleYearChange = (event) => {
    this.setState({ year: parseInt(event.target.value) });
  }

  getDayOfWeek = () => {
    const { day, month, year } = this.state;
    const daysOfWeek = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пʼятниця', 'Субота'];
    const dayOfWeekIndex = new Date(year, month - 1, day).getDay();
    return daysOfWeek[dayOfWeekIndex];
  }

  render() {
    const { day, month, year } = this.state;

    return (
      <div>
        <select value={day} onChange={this.handleDayChange}>
          {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
            <option key={day} value={day}>{day}</option>
          ))}
        </select>
        <select value={month} onChange={this.handleMonthChange}>
          {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
            <option key={month} value={month}>{month}</option>
          ))}
        </select>
        <select value={year} onChange={this.handleYearChange}>
          {Array.from({ length: 100 }, (_, i) => 2022 - i).map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
        <p>{this.getDayOfWeek()}</p>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Task12 />);