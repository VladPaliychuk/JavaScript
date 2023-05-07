import React, { Component } from 'react';

class User extends Component {
  handleClick = () => {
    const { user, showMessage } = this.props;
    showMessage(`My name is ${user.name}`);
  }

  render() {
    const { user } = this.props;
    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.surname}</td>
        <td>{user.age}</td>
        <td><a href="#" onClick={this.handleClick}>Show name</a></td>
      </tr>
    );
  }
}

class UserTable extends Component {
  state = {
    users: [
      { name: 'John', surname: 'Doe', age: 30 },
      { name: 'Jane', surname: 'Doe', age: 25 },
      { name: 'Bob', surname: 'Smith', age: 40 },
    ],
  }

  showMessage = message => {
    alert(message);
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
            <th>Show name</th>
          </tr>
        </thead>
        <tbody>
          {this.state.users.map((user, index) => (
            <User key={index} user={user} showMessage={this.showMessage} />
          ))}
        </tbody>
      </table>
    );
  }
}
export default UserTable;