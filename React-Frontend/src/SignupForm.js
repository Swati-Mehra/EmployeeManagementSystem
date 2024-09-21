import React, { Component } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./SignupForm.css"; // Create your custom CSS file for styling
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userRole:"",
      userEmail: "",
      userPass: "",

      registrationSuccess: false,
      registrationError: null,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      userName: this.state.userName,
      userRole:this.state.userRole,
      userEmail: this.state.userEmail,
      userPass: this.state.userPass,
  };
  axios.post('http://localhost:8081/api/users', userData)
      .then((response) => {
        console.log('Signup successful', response.data);
        this.setState({
          registrationSuccess: true,
          registrationError: null,
          userName: "",  // Clear the form fields
          userRole: "",
          userEmail: "",
          userPass: "",
        });
        this.handleShowToast();
        setTimeout(() => {
          window.location.replace('http://localhost:3000/login');
        }, 3000);
      })
      .catch((error) => {
        this.handleShowError();
        console.error('Signup failed', error.data);
        this.setState({
          registrationSuccess: false,
          registrationError: 'Registration failed. Please try again.',
        });
      });

    }

    handleShowToast = () => {
      toast.success('Signup Successful', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000, // Auto-close the toast after 3 seconds
      });
    }

    handleShowError = () => {
      toast.error('Signup UnSuccessful. Please try again.', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    }

  

  render() {
    return (
      <div className="container">
        <h2>Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="userName"
              placeholder="Username"
              value={this.state.userName}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="userRole"
              placeholder="Userrole"
              value={this.state.userRole}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name="userEmail"
              placeholder="Email"
              value={this.state.userEmail}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="userPass"
              placeholder="Password"
              value={this.state.userPass}
              onChange={this.handleChange}
              required
            />
          </div>
          <ToastContainer/>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default SignupForm;
