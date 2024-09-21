// EmployeeDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./EmployeeDashboard.css"; // Create your custom CSS file for styling

const EmployeeDashboard = () => {
    const [employees, setEmployees] = useState([]);
  
    useEffect(() => {
      // Fetch employees on component mount
      getEmployees();
    }, []);
  
    const getEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/employes');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };
  
    const handleUpdate = (empId) => {
      // Implement update functionality, e.g., redirect to an update page
      console.log(`Update employee with ID ${empId}`);
        setTimeout(() => {
          window.location.replace(`http://localhost:3000/update/${empId}`);
        }, 3000);
    };
  
    const handleDelete = async (empId) => {
      try {
        await axios.delete(`http://localhost:8081/api/employes/${empId}`);
        getEmployees(); // Refresh the employee list after deleting an employee
        showToast('Employee deleted successfully', 'success');
      } catch (error) {
        console.error('Error deleting employee:', error);
        showToast('Error deleting employee. Please try again.', 'error');
      }
    };
  
    const showToast = (message, type) => {
      toast[type](message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    };
  
    return (
      <div className='container'>
        <h2>Employee Dashboard</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Employee Name</th>
              <th>Employee Department</th>
              <th>Employee Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.empId}>
                <td>{employee.empId ? employee.empId : 'ID not available'}</td>
                <td>{employee.empName}</td>
                <td>{employee.empDept}</td>
                <td>{employee.empSalary}</td>
                <td>
                  <button
                    className="btn btn-warning mr-2"
                    onClick={() => handleUpdate(employee.empId)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(employee.empId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ToastContainer />
      </div>
    );
  };
  
  export default EmployeeDashboard;
  