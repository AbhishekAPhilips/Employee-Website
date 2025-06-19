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
    setEmployees(prev => 
      prev.map(emp => 
        emp.id === updatedEmployee.id ? updatedEmployee : emp
      )
    );
    setShowEditPopup(false);
    setSelectedEmployee(null);
  };


  const handleDelete = (employeeId) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      setEmployees(prev => prev.filter(emp => emp.id !== employeeId));

      if (selectedEmployee && selectedEmployee.id === employeeId) {
        setShowEditPopup(false);
        setSelectedEmployee(null);
      }
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleClosePopup = () => {
    setShowEditPopup(false);
    setSelectedEmployee(null);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

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
            <th>Position</th>
            <th>Salary</th>
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
        
        <div className="pagination-info">
          <span>
            Page {currentPage} of {totalPages} 
            (Showing {indexOfFirstRecord + 1}-{Math.min(indexOfLastRecord, employees.length)} of {employees.length} employees)
          </span>
        </div>

        <div className="page-numbers">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
            <button
              key={pageNumber}
              className={`page-number ${currentPage === pageNumber ? 'active' : ''}`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
        </div>

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
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default EmployeeTable;
