import React, { useState, useEffect } from 'react';

const EditPopup = ({ employee, onClose, onSubmit }) => {
  // Form state
  const [employeeId, setEmployeeId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    salary: '',
    gender: 'male'
  });

  // Populate form
  useEffect(() => {
    setEmployeeId(employee.id); 
    setFormData({ name: employee.name || '', email: employee.email || '', department: employee.department || '', salary: employee.salary || '', gender: employee.gender || 'male'});
  }, [employee]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Submit updated data
    onSubmit({
      id: employeeId,   
      ...formData,
      salary: Number(formData.salary)
    });
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="popup-header">
          <h3>Edit Employee</h3>
          <button className="close-btn" onClick={onClose}> X </button>
        </div>

        {/* Form */}
        <form className="edit-form" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="form">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="form">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Department */}
          <div className="form">
            <label htmlFor="department">Department *</label>
            <select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            >
              <option value="">Select Department</option>
              <option value="Engineering">Engineering</option>
              <option value="Marketing">Marketing</option>
              <option value="Sales">Sales</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
            </select>
          </div>

          {/* Salary */}
          <div className="form">
            <label htmlFor="salary">Salary (₹) *</label>
            <input
              type="number"
              id="salary"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              min="0"
              required
            />
          </div>

          {/* Gender */}
          <div className="form">
            <label>Gender</label>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                />
                Male
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                />
                Female
              </label>
            </div>
          </div>

          {/* Actions */}
          <div className="popup-actions">
            <button type="submit" className="btn btn-save">
              Save Changes
            </button>
            <button type="button" className="btn btn-discard" onClick={onClose}>
              Discard
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPopup;
