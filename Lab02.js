import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Task1 extends React.Component {
  render() {
    return (
      <div>
        text
      </div>
    );
  }
}

class Task2 extends React.Component {
  render() {
    const text = 'текст';

    return (
      <div>
        {text}
      </div>
    );
  }
}

class Task3 extends React.Component {
  render() {
    const text = 'text';

    return (
      <div dangerouslySetInnerHTML={{__html: text}}></div>
    );
  }
}

class Task4 extends React.Component {
  render() {
    const text1 = '<p>text1</p>';
    const text2 = '<p>text2</p>';

    return (
      <div>
        <p dangerouslySetInnerHTML={{__html: text1}}></p>
        <p>!!!</p>
        <p dangerouslySetInnerHTML={{__html: text2}}></p>
      </div>
    );
  }
}

class Task5 extends React.Component {
  render() {
    const attr = 'block';
    return (
      <div id={attr}>
        текст
      </div>
    );
  }
}

class Task6 extends React.Component {
  render() {
    const str = 'block';
    return (
      <div className={str}>
        текст
      </div>
    );
  }
}

class Task7 extends React.Component {
  render() {
    const divStyle = {
      backgroundColor: 'green',
      border: '1px solid black',
      borderRadius: '30px',
      padding: '10px',
    };
    return (
      <div style={divStyle}>
        тут текст
      </div>
    );
  }
}

class Task8 extends React.Component {
  render() {
    const show = true;

    return (
      <div>
        {show ? <p>text1</p> : <p>text2</p>}
      </div>
    );
  }
}

class Task9 extends React.Component {
  render() {
    const arr = ['a', 'b', 'c', 'd', 'e'];

    const list = arr.map((item) =>
      <li>{item}</li>
    );

    return (
      <ul>
        {list}
      </ul>
    );
  }
}

class Task10 extends React.Component {
  getText() {
    return '<p>text</p>';
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: this.getText()}} />
    );
  }
}

class Task11 extends React.Component{
  getNum1(){
    return 1;
  }
  getNum2(){
    return 2;
  }

  render(){
    const sum = this.getNum1() + this.getNum2();

    return(
      <div>
        <p>sum: {sum}</p>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Task11 />);