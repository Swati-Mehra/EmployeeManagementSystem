import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import EmployeeRegistrationForm from "./EmployeeRegistrationForm";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import EmployeeDashboard from './EmployeeDashboard';
import UpdateEmployee from './UpdateEmployee';

function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/employee-registration" element={<EmployeeRegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/dashboard" element={<EmployeeDashboard />} />
          <Route path="/update/:empId" element={<UpdateEmployee />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
