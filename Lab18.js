import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Task1 extends React.Component {
  state = { name: "Ivan", age: 24};

    render() {
      return (
        <div>
          <p>Name: {this.state.name}, age: {this.state.age}</p>
        </div>
      );
    }
}

class Task2 extends React.Component {
  showMessage() {
    alert('hello');
  }

  render() {
    return (
      <div>
        <button onClick={() => this.showMessage()}>Click me</button>
      </div>
    );
  }
}

class Task3 extends React.Component{
  constructor(props){
    super(props);
    this.state = { name:"Ivan", age:25} ;
  }

  showName(){
    alert(this.state.name);
  }

  render(){
    return(
      <button onClick={() => this.showName()}>Click me</button>
    );
  }
}

class Task4 extends React.Component{
  constructor(props){
    super(props);
    this.state = { name:"Ivan", age:25};
  }

  clickFunc(){
    this.setState({name: "Kolya", age: 30});
  }

  render(){
    return(
      <div>
        <div>
          Name: {this.state.name}, age: {this.state.age}
        </div>
        <button onClick={() => this.clickFunc()}>Change</button>
      </div>
    );
  }
}

class Task5 extends React.Component{
  constructor(props){
    super(props);
    this.state = { name:"Ivan", show: true};
  }

  render(){
    return(
      <div>
        <p>{this.state.show ? 'Привіт, ' : 'Пока, '}{this.state.name}!</p>
      </div>
    );
  }
}

class Task6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Іван',
      age: 25,
      buttonClicked: false,
    };
  }

  buttonFunc = () => {
    this.setState({
      buttonClicked: true,
    });
  }

  render() {
    const { name, age, buttonClicked } = this.state;
    return (
      <div>
        {buttonClicked && <p>ім'я: {name}, вік: {age}</p>}
        <button onClick={this.buttonFunc}>Натисни на мене</button>
      </div>
    );
  }
}

class Task7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: 'Іван',
      age: 25,
      showText: false,
    };
  }

  buttonFunc = () => {
    this.setState(prevState => ({
      showText: !prevState.showText
    }));
  }

  render() {
    const { name, age, showText } = this.state;
    return (
      <div>
        <button onClick={this.buttonFunc}>Натисни на мене</button>
        {showText && <p>ім'я: {name}, вік: {age}</p>}
      </div>
    );
  }
}

class Task8 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: 'Іван',
      age: 25,
      showText: false,
    };
  }

  buttonFunc = () => {
    this.setState(prevState => ({
      showText: !prevState.showText
    }));
  }

  render() {
    const { name, age, showText } = this.state;
    return (
      <div>
        <button onClick={this.buttonFunc}>{showText ? 'сховати' : 'показати'}</button>
        {showText && <p>ім'я: {name}, вік: {age}</p>}
      </div>
    );
  }
}

class Task9 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ['Коля', 'Вася', 'Петя']
    };
  }

  render() {
    return (
      <ul>
        {this.state.names.map((name, index) => <li>{name} - {index + 1}</li>)}
      </ul>
    );
  }
}

class Task11 extends React.Component {
  state = {
    hrefs: [
      {href: '1.html', text: 'посилання 1'},
      {href: '2.html', text: 'посилання 2'},
      {href: '3.html', text: 'посилання 3'},
    ]
  };

  render() {
    return (
      <ul>
        {this.state.hrefs.map(({href, text}) => (
          <li>
            <a href={href}>{text}</a>
          </li>
        ))}
      </ul>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Task11 />);