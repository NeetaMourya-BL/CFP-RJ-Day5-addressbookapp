import React, { useState, useEffect } from "react";
import logo from '../../Assets/images/logo.png'
import './addcontact.css';
import axios from 'axios'
import { useHistory, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const EditContact = () => {
    let history = useHistory();

    const { id } = useParams();
    const [person, setUser] = useState({
        name: '',
        address: '',
        phoneNumber: '',
        labelCity: '',
        city: '',
        state: '',
        zipcode: '',
        isUpdate: false,
        error: {
            name: '',
            address: '',
            phoneNumber: '',
            labelCity: ''
        }
    });
    const firstnamevalidation = (event) => {
        const data = event.target.value;
        const Regexp = new RegExp("^[A-Za-z]\\w{3,29}$");
        const test = Regexp.test(data);
        if (!test) {

            setUser((person) => ({
                ...person,
                errorfirstname: '***Enter Valid Name it shoule be contain first letter capital with max length 29 character'
            }))
        }
        else {
            console.log('else')
            setUser((person) => ({
                ...person,
                errorfirstname: ''
            }))
        }
    }

    const phonenumbervalidation = (event) => {
        const data = event.target.value;
        const Regexp = new RegExp("^((\\+|00)(\\d{1,3})[\\s-]?)?(\\d{10})$");
        const test = Regexp.test(data);
        if (!test) {

            setUser((person) => ({
                ...person,
                errorphonenumber: '***Enter Valid Phone Number it shouble be country code with 10 digit mobile number'
            }))
        }
        else {
            console.log('else')
            setUser((person) => ({
                ...person,
                errorphonenumber: ''
            }))
        }
    }

    const zipcodevalidation = (event) => {
        const data = event.target.value;
        const Regexp = new RegExp("^[0-9]{6}$");
        const test = Regexp.test(data);
        if (!test) {

            setUser((person) => ({
                ...person,
                errorzipcode: '***Enter Valid Zip Code'
            }))
        }
        else {
            console.log('else')
            setUser((user) => ({
                ...user,
                errorzipcode: ''
            }))
        }
    }

    // const onInputChange = async event => {
    //     setUser({ ...employee, [event.target.name]: event.target.value });
    // };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3001/person/${id}`, person);
        history.push("/");
    };
    const changeValue = (event) => {
        setUser({ ...person, [event.target.name]: event.target.value })
    }
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3001/person/${id}`);
        setUser(result.data);
    };

    useEffect(() => {
        loadUser();
    }, []);

    return (
        <div className="payroll-main">
            <header className='header-content header'>

                <div className="logo-content">
                    <img src={logo} alt="" />
                    <div>
                        <span className="book-text">ADDRESS</span><br></br>
                        <span className="book-text add-book">BOOK</span>
                    </div>

                </div>

            </header >

            <div className="form-content">
                <form className="form" action="#" onSubmit={onSubmit}>
                    <div className="form-head">
                        <span className="form-head-text">PERSON ADDRESS FORM</span>
                        <button type="button" className="closebutton" data-dismiss="modal" aria-label="Close">
                            <Link className="closebutton" to="/addcontact/add/">
                                <span aria-hidden="true" className="closeicon">X</span>
                            </Link>
                        </button>
                    </div>

                    <div className="body">
                        <label className="label text" htmlFor="name">Full Name</label>
                        <input className="input" type="text" id="name" name="name" value={person.name} onChange={changeValue} onBlur={firstnamevalidation} />
                        <error className="error">{person.errorfirstname}</error>

                        <label className="label text" htmlFor="phoneNumber">Phone Number</label>
                        <input className="input" type="text" id="phoneNumber" name="phoneNumber" value={person.phoneNumber} onChange={changeValue} onBlur={phonenumbervalidation} />
                        <error className="error">{person.errorphonenumber}</error>

                        <label className="label text" htmlFor="address">Address</label>
                        <textarea onChange={changeValue} id="address" value={person.address} className="input" name="address" style={{ height: '120%' }}></textarea>
                        {/* <error className="error">{person.erroraddress}</error> */}


                        <div className="row-content">
                            <div className="label-city" htmlFor="labelCity">
                                <label className="city" htmlFor="city">City</label><br></br>&nbsp;
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
                                <label className="state" htmlFor="state">State</label><br></br>&nbsp;
                                <select value={person.state} onChange={changeValue} id="state" name="state">
                                    <option value="">Select State</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="MadhyaPradesh">MadhyaPradesh</option>
                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                </select>
                            </div>
                            <div className="label-zip">
                                <label className="zip" htmlFor="zipcode">Zipcode</label><br></br>&nbsp;
                                <input className="input" type="number" id="zipcode" name="zipcode" value={person.zipcode} onChange={changeValue} onBlur={zipcodevalidation} />
                            </div>
                            <error className="error">{person.zipcodevalidation}</error>

                        </div>
                        <div className="add-reset">
                            <button type="submit" className="button submitButton" id="submitButton">{person.isUpdate ? 'Update' : 'Submit'} </button>
                        </div>
                    </div>
                </form>
            </div >
        </div >
    );
};

export default EditContact;