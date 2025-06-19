import React, { useState } from 'react';
import EmployeeRow from './EmployeeRow.jsx';
import EditPopup from './EditPopup.jsx';  
import { employeesData } from '../data/employees.jsx'; 

const EmployeeTable = () => {

  const [employees, setEmployees] = useState(employeesData); 
  const [currentPage, setCurrentPage] = useState(1);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);


  const recordsPerPage = 10;
  const totalPages = Math.ceil(employees.length / recordsPerPage);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentEmployees = employees.slice(indexOfFirstRecord, indexOfLastRecord);


  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
    setShowEditPopup(true);
  };

  const handleEditSubmit = (updatedEmployee) => {
    setEmployees(prev => prev.map(emp => emp.id === updatedEmployee.id ? updatedEmployee : emp));
    handleClosePopup();
  };


  const handleDelete = (employeeId) => {
    setEmployees(prev => prev.filter(emp => emp.id !== employeeId));
  };


  const handleClosePopup = () => {
    setShowEditPopup(false);
    setSelectedEmployee(null);
  };

 
  const handlePrevious = () => setCurrentPage(prev => prev - 1);
  const handleNext = () => setCurrentPage(prev => prev + 1);

  return (
    <div className="employee-table-container">
    
      <div className="table-header">
        <h2>Employee Management</h2>
        <p>Total Employees: {employees.length}</p>  
      </div>

      
      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Gender</th>
            <th>Salary (₹)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((employee) => (
            <EmployeeRow
              key={employee.id}
              employee={employee}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>

      
      <div className="pagination">
        <button 
          className="pagination-btn" 
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        
        <span className="pagination-info">
          Page {currentPage} of {totalPages}
        </span>

        <button 
          className="pagination-btn" 
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

     
      {showEditPopup && selectedEmployee && (
        <EditPopup
          employee={selectedEmployee}
          onClose={handleClosePopup}
          onSubmit={handleEditSubmit}
        />
      )}
    </div>
  );
};

export default EmployeeTable;
