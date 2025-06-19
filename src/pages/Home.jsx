import React from 'react';
import EmployeeTable from '../components/EmployeeTable.jsx';
const Home = () => {
  return (
    <div className="home-page">
      <div className="container">
        <h1>Welcome to Employee Management System</h1>
        <p>This is the home page content.</p>
        <EmployeeTable />
      </div>
    </div>
  );
};

export default Home;
