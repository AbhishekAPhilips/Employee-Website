import React, { useState, useEffect } from 'react';

const EditPopup = ({ employee, onClose, onSubmit, onDelete }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    position: '',
    salary: ''
  });

  const [errors, setErrors] = useState({});

  // Populate form with existing employee data
  useEffect(() => {
    if (employee) {
      setFormData({
        name: employee.name || '',
        email: employee.email || '',
        department: employee.department || '',
        position: employee.position || '',
        salary: employee.salary || ''
      });
    }
  }, [employee]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Simple validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.department) newErrors.department = 'Department is required';
    if (!formData.position.trim()) newErrors.position = 'Position is required';
    if (!formData.salary || formData.salary <= 0) newErrors.salary = 'Valid salary is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    const updatedEmployee = {
      ...employee,
      ...formData,
      salary: parseInt(formData.salary)
    };
    
    onSubmit(updatedEmployee);
    onClose();
  };

  // Handle delete
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${employee.name}?`)) {
      onDelete(employee.id);
      onClose();
    }
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="popup-header">
          <h3>Edit Employee</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <form className="edit-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="department">Department</label>
            <select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              className={errors.department ? 'error' : ''}
            >
              <option value="">Select Department</option>
              <option value="Engineering">Engineering</option>
              <option value="Marketing">Marketing</option>
              <option value="Sales">Sales</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
            </select>
            {errors.department && <span className="error-message">{errors.department}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="position">Position</label>
            <select
              id="position"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              className={errors.position ? 'error' : ''}
            >
              <option value="">Select Position</option>
              <option value="Analyst">Analyst</option>
              <option value="Developer">Developer</option>
              <option value="Specialist">Specialist</option>
              <option value="Lead">Lead</option>
              <option value="Manager">Manager</option>
            </select>
            {errors.position && <span className="error-message">{errors.position}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="salary">Salary</label>
            <input
              type="number"
              id="salary"
              name="salary"
              value={formData.salary}
              onChange={handleInputChange}
              className={errors.salary ? 'error' : ''}
              min="0"
            />
            {errors.salary && <span className="error-message">{errors.salary}</span>}
          </div>

          <div className="popup-actions">
            <button type="submit" className="btn btn-submit">Save Changes</button>
            <button type="button" className="btn btn-delete" onClick={handleDelete}>Delete</button>
            <button type="button" className="btn btn-cancel" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPopup;
