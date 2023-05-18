import React, { useState } from 'react';

const employeesData = [
  { firstName: 'Василь', lastName: 'Васильович', daysWorked: 20, rate: 10 },
  { firstName: 'Іван', lastName: 'Іванович', daysWorked: 25, rate: 12 },
  { firstName: 'Роман', lastName: 'Романович', daysWorked: 15, rate: 8 }
];

const EmployeeTable = () => {
  const [employees, setEmployees] = useState(employeesData);

  const handleDaysWorkedChange = (event, index) => {
    const { value } = event.target;
    const newEmployees = [...employees];
    newEmployees[index].daysWorked = value;
    setEmployees(newEmployees);
  };

  const handleRateChange = (event, index) => {
    const { value } = event.target;
    const newEmployees = [...employees];
    newEmployees[index].rate = value;
    setEmployees(newEmployees);
  };

  const getTotalPay = () => {
    return employees.reduce((total, employee) => {
      return total + employee.daysWorked * employee.rate;
    }, 0);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Ім'я</th>
            <th>Прізвище</th>
            <th>Відпрацьованих днів</th>
            <th>Ставка</th>
            <th>Виплачено</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>
                <input
                  type="number"
                  value={employee.daysWorked}
                  onChange={(event) => handleDaysWorkedChange(event, index)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={employee.rate}
                  onChange={(event) => handleRateChange(event, index)}
                />
              </td>
              <td>{employee.daysWorked * employee.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Загально виплачено: {getTotalPay()}</p>
    </div>
  );
};

export default EmployeeTable;