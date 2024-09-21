import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h2>Welcome to Our Employee Portal</h2>
      <div>
          <img src="images/app-removebg-preview.png" alt="" width={450} height={290} />
        </div>
      <div className="buttons-container">
        <br/>
        <Link to="/employee-registration" className="btn btn-primary" style={{width: 80, height: 38,marginLeft:105}}>
          Register
        </Link>
        <Link to="/login" className="btn btn-success">
          Log In
        </Link>
        <Link to="/signup" className="btn btn-info">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Home;
