import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import { Nav, NavItem, Navbar, NavDropdown, MenuItem } from "react-bootstrap"

class AllPatients extends Component {
    state = {
        list: null
    }
    clickedLink(obj,data){
        sessionStorage.setItem('patientnic',data.nic);
        sessionStorage.setItem('patientname',data.Full_Name);
        sessionStorage.setItem('patientgender',data.gender);
        sessionStorage.setItem('patientstatus',data.civil_status);
        sessionStorage.setItem('patientdob',data.DateOfBirth);
        sessionStorage.setItem('patientphone',data.phone);
        sessionStorage.setItem('patientaddress',data.Address);
        sessionStorage.setItem('patientblood',data.Blood_Group);
        sessionStorage.setItem('patientnic',data.nic);

        //Change the link to go to the patient overvie page
        obj.props.history.push('nurse/patientoverview');
    }
    componentDidMount() {
        var obj = this;
        axios.get('http://localhost:3001/patient/')
            .then(function (response) {
                const listItems = response.data.data.map((number) =>

                    <tr onClick={()=>obj.clickedLink(obj,number)} className="allpatients" key={number.nic}>
                        <th scope="row"><a>{number.Full_Name}</a></th>
                        <td>{number.DateOfBirth}</td>
                        <td>{number.gender}</td>
                        <td>{number.civil_status}</td>
                        <td>{number.nic}</td>
                        <td>{number.phone}</td>
                        <td>{number.Address}</td>
                    </tr>
                );
                obj.setState({ list: listItems });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (
            <div>
                <div>
                    <Navbar inverse collapseOnSelect>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="#brand">React-Bootstrap</a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav>
                                <NavItem eventKey={1} href="#">
                                    Link
                                </NavItem>
                                <NavItem eventKey={2} href="#">
                                    Link
                                </NavItem>
                                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                    <MenuItem eventKey={3.1}>Action</MenuItem>
                                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey={3.3}>Separated link</MenuItem>
                                </NavDropdown>
                            </Nav>
                            <Nav pullRight>
                                <NavItem eventKey={1} href="#">
                                    Link Right
                                </NavItem>
                                <NavItem eventKey={2} href="#">
                                    Link Right
                                </NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <div className="nav-bar">
                        <ul>
                            <li>Patient Overview</li>
                            <li>My OPD Patients</li>
                            <li>My Queue</li>
                            <li>Questionnaire</li>
                        </ul>
                    </div>
                    <div className="editPatient">
                        <center><h3>Patients</h3></center>
                        <hr />

                        <table className="viewallpatientstable">
                            <thead>
                                <tr>
                                    <th scope="col">Patient Name</th>
                                    <th scope="col">Date of Birth</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Civil Status</th>
                                    <th scope="col">NIC</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.list}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        );
    }
}

export default AllPatients;