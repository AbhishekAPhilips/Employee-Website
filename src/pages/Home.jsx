import React from 'react';
import EmployeeTable from '../components/EmployeeTable.jsx';
const Home = () => {
  return (
    <div className="home-page">
      <div className="container">
        <h1>Welcome to Employee Management System</h1>
        <p>Welcome to the Philips Employee Management System. Here you can view, manage, and update employee records with ease. Use the navigation links above to explore the system, and scroll down to see the complete list of employees. Our platform is designed to help you streamline HR processes and keep your team information up to date.</p>
        <EmployeeTable />
      </div>
    </div>
  );
};

export default Home;
