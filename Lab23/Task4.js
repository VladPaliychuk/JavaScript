import React, { Component } from 'react';

class UserTable extends Component {
  handleClick = () => {
    const { id, showMessage } = this.props;
    showMessage(id);
  };

  render() {
    const { name, surname, age } = this.props;
    return (
      <tr>
        <td>{name}</td>
        <td>{surname}</td>
        <td>{age}</td>
        <td>
          <a href="#" onClick={this.handleClick}>
            Show User ID
          </a>
        </td>
      </tr>
    );
  }
}

class UserList extends Component {
  showMessage = (id) => {
    alert(`User ID: ${id}`);
  };

  render() {
    const users = [
      { id: 1, name: 'John', surname: 'Doe', age: 25 },
      { id: 2, name: 'Jane', surname: 'Doe', age: 30 },
      { id: 3, name: 'Bob', surname: 'Smith', age: 40 },
    ];

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
            <th>User ID</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserTable
              key={user.id}
              id={user.id}
              name={user.name}
              surname={user.surname}
              age={user.age}
              showMessage={this.showMessage}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default UserList;
