import React, { useState } from 'react';

const User = ({ user, onDelete }) => {
    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.surname}</td>
        <td>{user.age}</td>
        <td>
          <a href="#" onClick={onDelete}>
            Delete
          </a>
        </td>
      </tr>
    );
  };

const UserList = () => {
    const [users, setUsers] = useState([
      { name: 'John', surname: 'Doe', age: 25 },
      { name: 'Jane', surname: 'Doe', age: 22 },
      { name: 'Bob', surname: 'Smith', age: 30 },
    ]);
  
    const deleteUser = (index) => {
      const newUsers = [...users];
      newUsers.splice(index, 1);
      setUsers(newUsers);
    };
  
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <User key={index} user={user} onDelete={() => deleteUser(index)} />
          ))}
        </tbody>
      </table>
    );
  };
  
  export default UserList;