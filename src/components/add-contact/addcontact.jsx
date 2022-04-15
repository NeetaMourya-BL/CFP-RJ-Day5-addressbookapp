import React, { useState } from "react";
import logo from '../../Assets/images/logo.png'
import './addcontact.css';

const AddContact = (person) => {

  const onSubmit = async event => {

  };
  const changeValue = (event) => {

  }
  return (
    <div className="payroll-main">
      <header className='header-content header'>

        <div className="logo-content">
          <img src={logo} alt="" />
          <div>
              <span className="book-text">ADDRESS</span><br></br>
              <span class="book-text add-book">BOOK</span>
          </div>

        </div>

      </header >

      <div className="form-content">
        <form className="form" action="#" onSubmit={onSubmit}>
          <div className="form-head">
            <span className="form-head-text">PERSON ADDRESS FORM</span>
            <button type="button" className="closebutton" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">X</span>
            </button>
          </div>
          <div className="body">
            <label className="label text" htmlFor="name">Full Name</label>
            <input className="input" type="text" id="name" name="name" value={person.name} onChange={changeValue} />
            {/* <error className="error">{person.error.name}</error> */}

            <label className="label text" htmlFor="phoneNumber">Phone Number</label>
            <input className="input" type="text" id="phoneNumber" name="phoneNumber" value={person.phoneNumber} onChange={changeValue} />
            {/* <error className="error">{person.error.phoneNumber}</error> */}

            <label className="label text" htmlFor="address">Address</label>
            <textarea onChange={changeValue} id="address" value={person.address} className="input" name="address" style={{ height: '120%' }}></textarea>
            {/* <error className="error">{person.error.address}</error> */}


            <div className="row-content">
              <div className="label-city">
                <label className="city" htmlFor="cityState">City</label>
                <select value={person.city} onChange={changeValue} id="city" name="city">
                  <option value="">Select City</option>
                  <option value="Pune">Pune</option>
                  <option value="Betul">Betul</option>
                  <option value="Bhopal">Bhopal</option>
                  <option value="Indore">Indore</option>
                  <option value="Bilaspur">Bilaspur</option>
                  <option value="Jabalpur">Jabalpur</option>
                  <option value="Raipur">Raipur</option>
                  <option value="Durg">Durg</option>
                </select>
              </div>
              <div className="label-state">
                <label className="state" htmlfor="state">State</label><br></br>&nbsp;
                <select value={person.state} onChange={changeValue} id="state" name="state">
                  <option value="">Select State</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="MadhyaPradesh">MadhyaPradesh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                </select>
              </div>
              <div class="label-zip">
                <label className="zip" for="zipcode">Zipcode</label>
                <input className="input" type="number" id="zipcode" name="zipcode" value={person.zipcode} onChange={changeValue} />
              </div>
              {/* <error className="error">{employee.error.cityState}</error> */}

            </div>
            <div className="add-reset">
              <button type="add" class="addButton" id="addButton">Add</button>
              <button type="reset" class="resetButton" id="resetButton">Reset</button>
            </div>
          </div>
        </form>
      </div >
    </div >

  );
};

export default AddContact;