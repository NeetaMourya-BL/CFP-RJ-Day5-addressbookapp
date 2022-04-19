import React, { useState, useEffect, useCallback } from "react"
import axios, { AxiosResponse, AxiosInstance } from 'axios';
import { Link, withRouter } from "react-router-dom";
import deleteIcon from "../../Assets/icons/delete-black-18dp.svg";
import editIcon from "../../Assets/icons/create-black-18dp.svg";
import logo from '../../Assets/images/logo.png'
import './home.css'

const Home = () => {

  // let personList = JSON.parse(localStorage.getItem('PersonList'));
  // console.log(personList);

  const [person, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3001/person");
    setUser(result.data);
  }
  const deleteUserData = async (id) => {
    await axios.delete(`http://localhost:3001/person/${id}`);
    loadUsers();
  }

  return (
    <div className="container" >
      <header className='header-content header'>

        <div className="logo-content">
          <img src={logo} alt="" />
          <div>
            <span className="book-text">ADDRESS</span> <br />
            <span className="book-text add-book">BOOK</span>
          </div>
        </div>
      </header>

      <div className="main-content">
        <div className="sub-header-content sub-main-content">
          <div className="person-detail-text">
            Person Details
            <div className="person-count">{person.length}</div>
          </div>

          <Link className="add-button" to="/addcontact/add">+Add Person</Link>
        </div>
      </div>

      <div className="table-main">
        <table className="table" id="display">
          <thead class="thead-dark">
            <tr>

              <th scope="col">Id</th>
              <th scope="col">Fullname</th>
              <th scope="col">Address</th>
              <th scope="col">City</th>
              <th scope="col">State</th>
              <th scope="col">Zip Code</th>
              <th scope="col">Phone Number</th>

              <th>Action</th>

            </tr>
          </thead>
          <tbody>
            {person.map((person, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{person.name}</td>
                <td>{person.address}</td>
                <td>{person.city}</td>
                <td>{person.state}</td>
                <td>{person.zipcode}</td>
                <td>{person.phoneNumber}</td>
                <td>

                  <img src={deleteIcon} alt="delete" onClick={() => deleteUserData(person.id)} />
                  <Link to={`/addcontact/edit/${person.id}`}>
                    <img src={editIcon} alt="edit" />
                  </Link>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default withRouter(Home);