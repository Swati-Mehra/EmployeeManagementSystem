import React, { Component } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./LoginForm.css"; // Create your custom CSS file for styling
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userPass: "",
      loginSuccess: false,
      loginError: null,
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
      userPass: this.state.userPass,
    };

    // Send a POST request to the login endpoint
    axios.post('http://localhost:8081/auth/authenticate', userData)
      .then((response) => {
        console.log('Login successful', response.data);
        this.setState({
          loginSuccess: true,
          loginError: null,
        });
        // You can perform additional actions, such as redirecting the user, on successful login
        this.handleShowToast();
        setTimeout(() => {
          window.location.replace('http://localhost:3000/dashboard');
        }, 3000);
      })
      .catch((error) => {
        console.log('Login failed', error.data);
        this.handleShowError();
        this.setState({
          loginSuccess: false,
          loginError: 'Login failed. Please check your credentials and try again.',
        });
      });
  };

  handleShowToast = () => {
    toast.success('Login Successful', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000, // Auto-close the toast after 3 seconds
    });
  }

  handleShowError = () => {
    toast.error('Login UnSuccessful. Please try again.', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
  }

  render() {
    return (
      <div className="container">
        <h2>Login</h2>
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
            Log In
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
