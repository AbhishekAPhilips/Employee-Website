import React from 'react';
import ActionButtons from './ActionButtons.jsx';

const EmployeeRow = ({ employee, onEdit, onDelete }) => {
  return (
    <tr className="employee-row">
      <td>{employee.id}</td>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.department}</td>
      <td>{employee.gender}</td>
      <td>₹{employee.salary.toLocaleString()}</td>
      <td>
        <ActionButtons 
          onEdit={() => onEdit(employee)}
          onDelete={() => onDelete(employee.id)}
        />
      </td>
    </tr>
  );
};

export default EmployeeRow;
