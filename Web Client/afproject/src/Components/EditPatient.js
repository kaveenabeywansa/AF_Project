import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import axios from 'axios';
import './Login.css';
import { Nav, NavItem, Navbar, NavDropdown, MenuItem } from "react-bootstrap"

class EditPatient extends Component {
    constructor(props) {
        super(props);
        this.fillFields(this);
    }
    fillFields(obj) {
        sessionStorage.setItem('patientnic', '1111');
        axios.get('http://localhost:3001/patient/' + sessionStorage.getItem('patientnic'))
            .then(function (response) {
                if (response.data.data.length === 1) {
                    var res = response.data.data[0];

                    document.getElementById('name').innerHTML = res.Full_Name;
                    document.getElementById('nic').innerHTML += sessionStorage.getItem('patientnic');
                    document.getElementById('genderinfo').innerHTML += res.gender;
                    document.getElementById('status').innerHTML += res.civil_status;
                    document.getElementById('dob').innerHTML += res.DateOfBirth;

                    document.getElementById('fullname').value = res.Full_Name;
                    document.getElementById('othername').value = res.other_name;
                    document.getElementById('civilstatus').value = res.civil_status;
                    document.getElementById('gender').value = res.gender;
                    obj.state.date = res.DateOfBirth;
                    document.getElementById('nic').value = res.nic;
                    document.getElementById('citizenship').value = res.citizenship;
                    document.getElementById('bloodgroup').value = res.Blood_Group;
                    document.getElementById('language').value = res.preferred_language;
                    document.getElementById('address').value = res.Address;
                    document.getElementById('phone').value = res.phone;
                    document.getElementById('contactperson').value = res.contact_person_name;
                    document.getElementById('contactpersonphone').value = res.contact_person_tel;
                } else {
                    alert('An Error Occured !');
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    state = {
        date: new Date()
    };
    updatePatient(obj) {
        axios.put('http://localhost:3001/patient/' + sessionStorage.getItem('patientnic'), {
            Full_Name: document.getElementById('fullname').value,
            other_name: document.getElementById('othername').value,
            civil_status: document.getElementById('civilstatus').value,
            gender: document.getElementById('gender').value,
            DateOfBirth: obj.state.date,
            nic: document.getElementById('nic').value,
            citizenship: document.getElementById('citizenship').value,
            Blood_Group: document.getElementById('bloodgroup').value,
            preferred_language: document.getElementById('language').value,
            Address: document.getElementById('address').value,
            phone: document.getElementById('phone').value,
            contact_person_name: document.getElementById('contactperson').value,
            contact_person_tel: document.getElementById('contactpersonphone').value
        })
            .then(function (response) {
                alert('Successfully Edited !');
                sessionStorage.setItem('patientnic', document.getElementById('nic'));
                //obj.props.history.push('/nurse/patientoverview');
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    datePicked(e, obj) {
        obj.setState({
            date: e
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
                    <div className="patientSummery">
                        <div className="card-header">Patient Information</div>
                        <div className="card-body">
                            <h4 className="card-title">Patient Profile</h4>
                            <h3 id="name" className="card-title" >Display Name Here...</h3>
                            <h5 id="nic" className="card-title">NIC: </h5>
                            <h5 id="genderinfo" className="card-title">Gender: </h5>
                            <h5 id="status" className="card-title">Status: </h5>
                            <h5 id="dob" className="card-title">Date of Birth: </h5>
                        </div>
                    </div>
                    <div id="Sample2-header">
                        <span>Edit Patient</span>
                    </div>
                    <div className="editPatient">
                        <div className="editPatient2">
                            <h2>Patient Personal Details</h2>
                            <div className="editPatientBlock">

                                <div className="form-group">
                                    <label htmlFor="Title">Title</label>
                                    <select className="form-control" id="Title">
                                        <option>Mr.</option>
                                        <option>Mrs.</option>
                                        <option>Miss.</option>
                                        <option>Rev.</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label id="Full_Name">Full Name</label>
                                    <input type="text" className="form-control" id="fullname" placeholder="Full Name"></input>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="other_name">Other Name</label>
                                    <input type="text" className="form-control" id="othername" placeholder="Other Name"></input>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="civil_status">Civil Status</label>
                                    <select className="form-control" id="civilstatus">
                                        <option>Single</option>
                                        <option>Married</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="gender">Gender</label>
                                    <select className="form-control" id="gender">
                                        <option>Female</option>
                                        <option>Male</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="DateOfBirth">DateOfBirth</label>
                                    <Calendar id="date" onChange={(e) => this.datePicked(e, this)} value={this.state.date} />
                                </div>
                            </div>
                            <h2>Patient Personal Details</h2>
                            <div className="editPatientBlock">

                                <div className="form-group">
                                    <label htmlFor="nic">NIC</label>
                                    <input type="text" className="form-control" id="nic" placeholder="NIC"></input>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="citizenship">Citizenship</label>
                                    <input type="text" className="form-control" id="citizenship" placeholder="Citizenship"></input>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="Blood_Group">Blood Group</label>
                                    <select className="form-control" id="bloodgroup">
                                        <option>A+</option>
                                        <option>A-</option>
                                        <option>AB</option>
                                        <option>B+</option>
                                        <option>B-</option>
                                        <option>O+</option>
                                        <option>O-</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="preferred_language">Preferred Language</label>
                                    <select className="form-control" id="language">
                                        <option>Sinhala</option>
                                        <option>English</option>
                                        <option>Tamil</option>
                                        <option>other</option>
                                    </select>
                                </div>
                            </div>

                            <h2>Patient Contact Details</h2>
                            <div className="editPatientBlock">

                                <div className="form-group">
                                    <label htmlFor="Address">Address</label>
                                    <input type="text" className="form-control" id="address" placeholder="Address"></input>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="text" className="form-control" id="phone" placeholder="Phone"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contact_person_name">Contact Person Name</label>
                                    <input type="text" className="form-control" id="contactperson" placeholder="Contact Person"></input>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="contact_person_tel">Contact Person Phone</label>
                                    <input type="text" className="form-control" id="contactpersonphone" placeholder="Contact Person Phone"></input>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <button type="Save" className="btn btn-primary" onClick={() => this.updatePatient(this)}>Update Details</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default EditPatient;