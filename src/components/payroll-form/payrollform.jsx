import React from 'react'
import logo from '../../Assets/images/logo.png'
import './payrollform.css'

function PayrollForm() {
  return (
    <div className="payroll-main">
      <header className='header-content header'>

        <div className="logo-content">
          <img src={logo} alt="" />
          <div>
            <span className="emp-text">ADDRESS</span> <br />
            <span className="emp-text emp-payroll">BOOK</span>
          </div>
        </div>
      </header>

      <div class="form-content">
        <form class="form" action="#" onsubmit="save(event);return false" onreset="reset()">
          <div class="form-head">
            <span class="form-head-text">PERSON ADDRESS FORM</span>
            <span class="cross-icon">
              <ion-icon class="close-circle" name="close-circle" onclick="cancel();"></ion-icon>
            </span>
          </div>

          <div class="body">
            <label class="label text" for="name">Full Name</label>&nbsp;
            <input class="input" type="text" id="name" name="name" placeholder="Enter your name here" required />
            <error-output class="text-error"></error-output>

            <label class="label-text-phone" for="phone">Phone Number</label>&nbsp;
            <input class="input" type="tel" id="phone" name="phone" placeholder="Enter your phone number here" required />
            <error-output class="phone-error"></error-output>

            <label class="label text" for="address">Address</label>&nbsp;
            <textarea id="address" class="input" name="address" placeholder="Enter your address here" style="height: 100px;" rows="5"></textarea>
            <error-output class="address-error"></error-output>

            <div class="row-content">
              <div class="label-city">
                <label class="city" for="city">City</label>&nbsp;
                <select id="city" name="city">
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
              <div class="label-state">
                <label class="state" for="state">State</label>&nbsp;
                <select id="state" name="state">
                  <option value="">Select State</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="MadhyaPradesh">MadhyaPradesh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                </select>
              </div>
              <div class="label-zip">
                <label class="zip" for="zipcode">Zipcode</label>&nbsp;
                <input type="number" class="input" id="zipcode" name="zipcode" placeholder="Enter zipcode here"></input>
              </div>
            </div>

            <div class="add-reset">
              <a href="./Home.html"></a>
              <button type="submit" class="addButton" id="addButton">Submit</button>
              <button type="reset" class="resetButton" id="resetButton">Reset</button>
            </div>
          </div >
        </form >
      </div >


    </div>
  )
}

export default PayrollForm;