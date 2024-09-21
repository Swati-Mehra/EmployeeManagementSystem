import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateEmployee = () => {
  const { empId } = useParams(); // Extract empId from the route parameters

  const [employee, setEmployee] = useState({
    empName: '',
    empDept: '',
    empSalary: '',
  });

  useEffect(() => {
    axios.get(`http://localhost:8081/api/employes/${empId}`)
      .then(response => setEmployee(response.data))
      .catch(error => console.error('Error fetching employee details:', error));
  }, [empId]);

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8081/api/employes/${empId}`, employee);
      console.log('Employee updated successfully');
      setEmployee({
        empName: '',
        empDept: '',
        empSalary: '',
      });
      showToast('Employee updated successfully', 'success');
      setTimeout(() => {
        window.location.replace('http://localhost:3000/dashboard');
      }, 3000);
    } catch (error) {
      console.error('Error updating employee:', error);
      showToast('Error updating employee. Please try again.', 'error');
      // Handle update error, e.g., show an error message to the user
    }
  };

  const showToast = (message, type) => {
    toast[type](message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
  };

  return (
    <div className="container">
      <h2>Update Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Employee Name</label>
          <input
            type="text"
            name="empName"
            value={employee.empName}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Employee Department</label>
          <input
            type="text"
            name="empDept"
            value={employee.empDept}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Employee Salary</label>
          <input
            type="text"
            name="empSalary"
            value={employee.empSalary}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UpdateEmployee;