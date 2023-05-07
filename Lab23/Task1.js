import React from 'react';

function User(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.surname}</td>
      <td>{props.age}</td>
    </tr>
  );
}


class UsersTable extends React.Component {
  state = {
    users: [
      { name: 'John', surname: 'Doe', age: 30 },
      { name: 'Jane', surname: 'Doe', age: 25 },
      { name: 'Bob', surname: 'Smith', age: 40 }
    ]
  };

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {this.state.users.map((user, index) => (
            <User key={index} name={user.name} surname={user.surname} age={user.age} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default UsersTable;