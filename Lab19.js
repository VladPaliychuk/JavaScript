import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Task1to4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ['Коля', 'Василь', 'Петро', 'Іван', 'Дмитро']
    };
  }

  clickAdd = () =>{
    const { names } = this.state;
    this.setState({ names: [...names, 'пункт'] });
  }

  clickRemoveLast = () => {
    const { names } = this.state;
    if (names.length === 0) {
      alert("Список порожній, немає елементів для видалення!");
      return;
    }
    const updatedNames = names.slice(0, names.length - 1);
    this.setState({ names: updatedNames });
  };

  clickRemoveByIndex(index) {
    const { names } = this.state;
    const updatedNames = names.filter((name, i) => i !== index);
    this.setState({ names: updatedNames });
  }


  render() {
    return (
      <div>
        <ul>
          {this.state.names.map((name, index) => (
           <li>
            {name}   
            <button onClick={() => this.clickRemoveByIndex(index)}>Видалити</button>
          </li>
         ))}
        </ul>

        <button onClick={this.clickAdd}>Додати пункт</button>
        <button onClick={this.clickRemoveLast}>Видалити останній пункт</button>
      </div>
      
    );
  }
}

class Task5to6 extends Component {
  state = {
    value: ''
  };

  handleInputChange = (event) => {
    const newValue = event.target.value.toUpperCase();
    this.setState({ value: newValue });
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleInputChange} />
        <p>{this.state.value}</p>
      </div>
    );
  }
}

class Task7 extends Component {
  constructor(props) {
    super(props);
    this.state = { age: '' };
  }

  handleChange = (e) => {
    this.setState({ age: e.target.value });
  }

  render() {
    const currentYear = new Date().getFullYear();
    const yearOfBirth = currentYear - this.state.age;

    return (
      <div>
        <input type="text" value={this.state.age} onChange={this.handleChange} />
        <p>{yearOfBirth}</p>
      </div>
    );
  }
}

class Task8 extends Component {
  state = {
    fullName: '',
    lastName: '',
    firstName: '',
    middleName: '',
  };

  handleInputChange = (event) => {
    const fullName = event.target.value;
    const fullNameParts = fullName.split(' ');
    const lastName = fullNameParts[0] || '';
    const firstName = fullNameParts[1] || '';
    const middleName = fullNameParts[2] || '';

    this.setState({
      fullName,
      lastName,
      firstName,
      middleName,
    });
  };

  render() {
    const { lastName, firstName, middleName } = this.state;

    return (
      <div>
        <input type="text" onChange={this.handleInputChange} />
        <p>{lastName}</p>
        <p>{firstName}</p>
        <p>{middleName}</p>
      </div>
    );
  }
}

class Task9 extends Component {
  state = {
    inputValue: '',
    outputValue: ''
  };

  handleInputChange = (event) => {
    this.setState({
      inputValue: event.target.value
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.setState({
      outputValue: this.state.inputValue
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" onChange={this.handleInputChange} />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.outputValue}</p>
      </div>
    );
  }
}

class Task10 extends Component {
  state = {
    num1: 0,
    num2: 0,
    sum: 0,
  };

  handleNum1Change = (event) => {
    this.setState({ num1: Number(event.target.value) });
  };

  handleNum2Change = (event) => {
    this.setState({ num2: Number(event.target.value) });
  };

  handleButtonClick = () => {
    const sum = this.state.num1 + this.state.num2;
    this.setState({ sum });
  };

  render() {
    const { num1, num2, sum } = this.state;

    return (
      <div>
        <input type="number" value={num1} onChange={this.handleNum1Change} />
        <input type="number" value={num2} onChange={this.handleNum2Change} />
        <button onClick={this.handleButtonClick}>Calculate</button>
        <p>Sum: {sum}</p>
      </div>
    );
  }
}

class Task11 extends Component {
  state = {
    firstName: '',
    lastName: '',
    middleName: '',
    fullName: ''
  };

  handleFirstNameChange = (event) => {
    this.setState({ firstName: event.target.value });
  };

  handleLastNameChange = (event) => {
    this.setState({ lastName: event.target.value });
  };

  handleMiddleNameChange = (event) => {
    this.setState({ middleName: event.target.value });
  };

  handleClick = () => {
    const { firstName, lastName, middleName } = this.state;
    const fullName = `${lastName} ${firstName} ${middleName}`;
    this.setState({ fullName });
  };

  render() {
    const { firstName, lastName, middleName, fullName } = this.state;

    return (
      <div>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={this.handleFirstNameChange} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={this.handleLastNameChange} />
        </label>
        <br />
        <label>
          Middle Name:
          <input type="text" value={middleName} onChange={this.handleMiddleNameChange} />
        </label>
        <br />
        <button onClick={this.handleClick}>Show Full Name</button>
        <br />
        <p>{fullName}</p>
      </div>
    );
  }
}

class Task12and13 extends Component {
  state = {
    names: ['John', 'Jane', 'Bob'],
    newName: '',
  };

  handleInputChange = (event) => {
    this.setState({
      newName: event.target.value,
    });
  };

  handleAddName = () => {
    const { names, newName } = this.state;

    if (newName.trim()) {
      const updatedNames = [...names, newName];
      this.setState({
        names: updatedNames,
        newName: '',
      });
    }
  };

  clickRemoveByIndex(index) {
    const { names } = this.state;
    const updatedNames = names.filter((name, i) => i !== index);
    this.setState({ names: updatedNames });
  }

  render() {
    const { names, newName } = this.state;

    return (
      <div>
        <ul>
          {names.map((name, index) => (
            <li key={name}>{name}
            <button onClick={() => this.clickRemoveByIndex(index)}>Delete</button></li>
          ))}
        </ul>
        <input type="text" value={newName} onChange={this.handleInputChange} />
        <button onClick={this.handleAddName}>Add</button>
      </div>
    );
  }
}

class Task14 extends Component {
  state = {
    hrefs: [
      { href: '1.html', text: 'посилання 1' },
      { href: '2.html', text: 'посилання 2' },
      { href: '3.html', text: 'посилання 3' },
    ],
    newHref: '',
    newLinkText: '',
  };

  handleNewHrefChange = (event) => {
    this.setState({ newHref: event.target.value });
  };

  handleNewLinkTextChange = (event) => {
    this.setState({ newLinkText: event.target.value });
  };

  handleAddLink = () => {
    const { hrefs, newHref, newLinkText } = this.state;

    if (newHref.trim() && newLinkText.trim()) {
      const newLink = { href: newHref, text: newLinkText };
      const updatedHrefs = [...hrefs, newLink];
      this.setState({
        hrefs: updatedHrefs,
        newHref: '',
        newLinkText: '',
      });
    }
  };

  render() {
    const { hrefs, newHref, newLinkText } = this.state;

    return (
      <div>
        <ul>
          {hrefs.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
        <div>
          <label>href:</label>
          <input type="text" value={newHref} onChange={this.handleNewHrefChange} />
        </div>
        <div>
          <label>Link text:</label>
          <input type="text" value={newLinkText} onChange={this.handleNewLinkTextChange} />
        </div>
        <button onClick={this.handleAddLink}>Add link</button>
      </div>
    );
  }
}

class Task15 extends React.Component {
  state = {
    list: ['item 1', 'item 2', 'item 3'],
    indexToRemove: '',
  };

  handleIndexChange = (event) => {
    this.setState({
      indexToRemove: event.target.value,
    });
  };

  handleRemoveItem = () => {
    const { list, indexToRemove } = this.state;

    if (indexToRemove.trim() && indexToRemove >= 1 && indexToRemove <= list.length) {
      const updatedList = list.filter((item, index) => index !== indexToRemove - 1);
      this.setState({
        list: updatedList,
        indexToRemove: '',
      });
    }
  };

  render() {
    const { list, indexToRemove } = this.state;

    return (
      <div>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <input type="text" value={indexToRemove} onChange={this.handleIndexChange} />
        <button onClick={this.handleRemoveItem}>Remove item</button>
      </div>
    );
  }
}

class Task16 extends Component {
  state = {
    users: [
      { name: 'Коля', age: 30 },
      { name: 'Василь', age: 40 },
      { name: 'Петро', age: 50 },
    ],
    newName: '',
    newAge: '',
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleAddUser = () => {
    const { users, newName, newAge } = this.state;

    if (newName.trim() && newAge.trim()) {
      const updatedUsers = [...users, { name: newName, age: newAge }];
      this.setState({
        users: updatedUsers,
        newName: '',
        newAge: '',
      });
    }
  };

  handleRemoveUser = (index) => {
    const { users } = this.state;
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    this.setState({
      users: updatedUsers,
    });
  };

  render() {
    const { users, newName, newAge } = this.state;

    return (
      <div>
        <table>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>
                  <button onClick={() => this.handleRemoveUser(index)}>
                    Видалити
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <input
          type="text"
          name="newName"
          value={newName}
          onChange={this.handleInputChange}
        />
        <input
          type="text"
          name="newAge"
          value={newAge}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddUser}>Додати користувача</button>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Task16 />);