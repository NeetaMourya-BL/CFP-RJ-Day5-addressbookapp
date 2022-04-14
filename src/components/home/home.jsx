import React from 'react'
import logo from '../../Assets/images/logo.png'
import { Link } from "react-router-dom";
import './home.css'
function Home() {
  return (
    <div className="container" >
      <header className='header-content header'>

        <div className="logo-content">
          <img src={logo} alt="" />
          <div>
            <span className="emp-text">ADDRESS</span> <br />
            <span className="emp-text emp-payroll">BOOK</span>
          </div>
        </div>
      </header>

      <div class="main-content">
        <div class="sub-header-content sub-main-content">
          <div class="person-detail-text">
            Person Details
          </div>

          <Link className="add-button" to="/payroll-form/add">+Add Person</Link>
        </div>
      </div>

      <div class="table-main">
        <table class="table" id="display">
          <tr>
            <th>Fullname</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zipcode</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </table>
      </div>
    </div>

  )
}

export default Home;