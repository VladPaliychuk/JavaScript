import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Task1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        'Елемент 1',
        'Елемент 2',
        'Елемент 3',
        'Елемент 4',
        'Елемент 5',
      ],
    };
  }

  handleCheckboxClick = (index) => {
    const { list } = this.state;
    const newList = [...list];
    newList[index] = <del>{list[index]}</del>;
    this.setState({ list: newList });
  }

  render() {
    const { list } = this.state;
    return (
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <label>
              <input type="checkbox" onClick={() => this.handleCheckboxClick(index)} />
              {item}
            </label>
          </li>
        ))}
      </ul>
    );
  }
}

class Task2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        { id: 1, firstName: 'John', lastName: 'Doe', salary: 5000, isChecked: true },
        { id: 2, firstName: 'Jane', lastName: 'Smith', salary: 6000, isChecked: true },
        { id: 3, firstName: 'Bob', lastName: 'Johnson', salary: 7000, isChecked: true },
        { id: 4, firstName: 'Sarah', lastName: 'Lee', salary: 8000, isChecked: true },
      ],
    };
  }

  handleCheckboxChange = (event, employeeId) => {
    const { employees } = this.state;
    const index = employees.findIndex((employee) => employee.id === employeeId);
    const updatedEmployees = [...employees];
    updatedEmployees[index].isChecked = event.target.checked;
    this.setState({ employees: updatedEmployees });
  };

  render() {
    const { employees } = this.state;
    const totalSalary = employees.reduce((total, employee) => {
      if (employee.isChecked) {
        return total + employee.salary;
      }
      return total;
    }, 0);

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Salary</th>
              <th>Is Checked</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.salary}</td>
                <td>
                  <input type="checkbox" checked={employee.isChecked} onChange={(event) => this.handleCheckboxChange(event, employee.id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Total salary of checked employees: {totalSalary}</p>
      </div>
    );
  }
}

class Task3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['item 1', 'item 2', 'item 3', 'item 4'],
      checkedItems: new Array(4).fill(true),
    };
  }

  handleCheckboxChange = (index) => {
    const { checkedItems } = this.state;
    checkedItems[index] = !checkedItems[index];
    this.setState({ checkedItems });
  }

  render() {
    const { items, checkedItems } = this.state;

    return (
      <div>
        {items.map((item, index) => (
          <div key={index}>
            <label>
              <input type="checkbox" checked={checkedItems[index]} onChange={() => this.handleCheckboxChange(index)} />
              {item}
            </label>
            {checkedItems[index] && <p>{item}</p>}
          </div>
        ))}
      </div>
    );
  }
}

class Task4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {name: 'Микола', surname: 'Шевченко', age: 30},
        {name: 'Василь', surname: 'Чумак', age: 40},
        {name: 'Петро', surname: 'Стеценко', age: 50},
      ],
      showDetails: true
    };
  }
  
  handleCheckboxChange = (index) => {
    this.setState((prevState) => {
      const newUsers = [...prevState.users];
      newUsers[index].showDetails = !newUsers[index].showDetails;
      return {users: newUsers};
    });
  }
  
  render() {
    return (
      <ul>
        {this.state.users.map((user, index) => (
          <li key={index}>
            <input type="checkbox" checked={user.showDetails} onChange={() => this.handleCheckboxChange(index)} />
            {user.showDetails ? `${user.name} ${user.surname}, ${user.age}` : user.name}
          </li>
        ))}
      </ul>
    );
  }
}

class Task5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        'Елемент 1',
        'Елемент 2',
        'Елемент 3'
      ],
      editingIndex: null
    };
  }

  handleListItemClick = (index) => {
    this.setState({ editingIndex: index });
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState((prevState) => {
      const newItems = [...prevState.items];
      newItems[prevState.editingIndex] = value;
      return { items: newItems };
    });
  }

  handleInputBlur = () => {
    this.setState({ editingIndex: null });
  }

  render() {
    return (
      <ul>
        {this.state.items.map((item, index) => (
          <li key={index} onClick={() => this.handleListItemClick(index)}>
            {this.state.editingIndex === index
              ? <input type="text" value={item} onChange={this.handleInputChange} onBlur={this.handleInputBlur} />
              : item
            }
          </li>
        ))}
      </ul>
    );
  }
}

class Task6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {name: 'Микола', age: 30},
        {name: 'Василь', age: 40},
        {name: 'Петро', age: 50},
      ],
      editing: null,
    };
  }

  handleEditClick = (index) => {
    this.setState({ editing: index });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => {
      const newUsers = [...prevState.users];
      newUsers[prevState.editing][name] = value;
      return { users: newUsers };
    });
  };

  handleInputBlur = () => {
    this.setState({ editing: null });
  };

  render() {
    const { users, editing } = this.state;
    return (
      <table>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>
                {editing === index ? (
                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={this.handleInputChange}
                    onBlur={this.handleInputBlur}
                  />
                ) : (
                  user.name
                )}
              </td>
              <td>
                {editing === index ? (
                  <input
                    type="number"
                    name="age"
                    value={user.age}
                    onChange={this.handleInputChange}
                    onBlur={this.handleInputBlur}
                  />
                ) : (
                  user.age
                )}
              </td>
              <td>
                <button onClick={() => this.handleEditClick(index)}>Редагувати</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

class Task7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: [
        {id: 1, name: 'Гірський похід у Карпати', duration: '5 днів'},
        {id: 2, name: 'Велопрогулянка у лісі', duration: '3 дні'},
        {id: 3, name: 'Каное на річці', duration: '2 дні'},
      ],
      selectedRouteId: null,
    };
  }

  handleRadioChange = (id) => {
    this.setState({selectedRouteId: id});
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.routes.map((route) => (
            <li key={route.id}>
              <input type="radio" name="route" value={route.id} checked={this.state.selectedRouteId === route.id} onChange={() => this.handleRadioChange(route.id)} />
              <span>{route.name} ({route.duration})</span>
            </li>
          ))}
        </ul>
        {this.state.selectedRouteId && <p>Ви обрали маршрут з ID {this.state.selectedRouteId}</p>}
      </div>
    );
  }
}

class Task8 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      noteText: ''
    };
  }

  handleNoteChange = (event) => {
    this.setState({ noteText: event.target.value });
  }

  handleAddNote = () => {
    const date = new Date();
    const newNote = {
      title: `Нотаток ${this.state.notes.length + 1}`,
      text: this.state.noteText,
      time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    };
    this.setState((prevState) => ({ notes: [...prevState.notes, newNote], noteText: '' }));
  }

  handleDeleteNote = (index) => {
    this.setState((prevState) => ({ notes: prevState.notes.filter((note, i) => i !== index) }));
  }

  handleEditNote = (index) => {
    const newNoteText = prompt('Редагувати нотаток', this.state.notes[index].text);
    if (newNoteText !== null) {
      const updatedNote = { ...this.state.notes[index], text: newNoteText };
      const newNotes = [...this.state.notes];
      newNotes[index] = updatedNote;
      this.setState({ notes: newNotes });
    }
  }

  render() {
    return (
      <div>
        <textarea value={this.state.noteText} onChange={this.handleNoteChange} />
        <button onClick={this.handleAddNote}>Додати нотаток</button>
        {this.state.notes.map((note, index) => (
          <div key={index}>
            <h3>{note.title} - {note.time}</h3>
            <p>{note.text}</p>
            <button onClick={() => this.handleDeleteNote(index)}>Видалити</button>
            <button onClick={() => this.handleEditNote(index)}>Редагувати</button>
          </div>
        ))}
      </div>
    );
  }
}

class Task9 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        { name: 'Микола', surname: 'Шевченко', salary: 3000 },
        { name: 'Василь', surname: 'Чумак', salary: 4000 },
        { name: 'Петро', surname: 'Стеценко', salary: 5000 },
      ],
      sortField: '',
      sortDirection: 'asc',
    };
  }

  handleSortClick(field) {
    const sortDirection = this.state.sortField === field ? 
      this.state.sortDirection === 'asc' ? 'desc' : 'asc' : 
      'asc';
    this.setState({
      sortField: field,
      sortDirection,
    });
  }

  render() {
    const { employees, sortField, sortDirection } = this.state;
    const sortedEmployees = [...employees].sort((a, b) => {
      const fieldA = a[sortField];
      const fieldB = b[sortField];
      const direction = sortDirection === 'asc' ? 1 : -1;
      if (fieldA < fieldB) {
        return -1 * direction;
      }
      if (fieldA > fieldB) {
        return 1 * direction;
      }
      return 0;
    });

    const rows = sortedEmployees.map((employee, index) => (
      <tr key={index}>
        <td>{employee.name}</td>
        <td>{employee.surname}</td>
        <td>{employee.salary}</td>
      </tr>
    ));

    return (
      <table>
        <thead>
          <tr>
            <th onClick={() => this.handleSortClick('name')}>Ім'я</th>
            <th onClick={() => this.handleSortClick('surname')}>Прізвище</th>
            <th onClick={() => this.handleSortClick('salary')}>Зарплата</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class Task10 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "uk",
    };
  }

  handleLanguageChange = (event) => {
    this.setState({ language: event.target.value });
  };

  render() {
    const daysOfWeek = this.state.language === "uk" ? ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"] : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return (
      <div>
        <label>
          Оберіть мову:
          <select value={this.state.language} onChange={this.handleLanguageChange}>
            <option value="uk">Українська</option>
            <option value="en">English</option>
          </select>
        </label>
        <br />
        <label>
          Дні тижня:
          <select>
            {daysOfWeek.map((day, index) => (
              <option key={index} value={day}>
                {day}
              </option>
            ))}
          </select>
        </label>
      </div>
    );
  }
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Task10 />);