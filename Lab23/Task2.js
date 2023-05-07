import React from 'react';

class UserTable extends React.Component {
  showMessage = () => {
    alert('!');
  }

  render() {
    const { users } = this.props;

    return (
      <table>
        <thead>
          <tr>
            <th>Ім'я</th>
            <th>Прізвище</th>
            <th>Вік</th>
            <th>Показати повідомлення</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.age}</td>
              <td><a href="#" onClick={this.showMessage}>Show Message</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

class App extends React.Component {
  state = {
    users: [
      { id: 1, firstName: 'John', lastName: 'Doe', age: 30 },
      { id: 2, firstName: 'Jane', lastName: 'Doe', age: 25 },
      { id: 3, firstName: 'Bob', lastName: 'Smith', age: 40 },
    ],
  }

  render() {
    return <UserTable users={this.state.users} />;
  }
}

export default App;
