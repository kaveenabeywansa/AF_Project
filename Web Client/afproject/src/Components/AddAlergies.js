import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import { Nav, NavItem, Navbar, NavDropdown, MenuItem } from "react-bootstrap"

class AddAlergies extends Component {
    saveAlergy(obj) {
        sessionStorage.setItem('patientnic', '1111');

        axios.post('http://localhost:3001/alergy/', {
            nic: sessionStorage.getItem('patientnic'),
            alergy: document.getElementById('alergy').value,
            status: document.getElementById('status').value,
            remark: document.getElementById('remark').value,
        }).then(function (response) {
            alert('Successfully Added !');
            obj.clearFields();
            //console.log(response);
        }).catch(function (error) {
            alert('Error Occured !');
            console.log(error);
        });
    }
    clearFields() {
        document.getElementById('alergy').value = "";
        document.getElementById('status').value = "";
        document.getElementById('remark').value = "";
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

                    <div id="Sample2-header">
                        <span>Add Alergies</span>
                    </div>
                    <div className="editPatient">
                        <div className="editPatient">
                            <div className="alergypanel">
                                <label>Alergy</label>
                                <input type="text" className="form-control" id="alergy" placeholder="Alergy" />
                                <label>Status</label>
                                <select className="form-control" id="status">
                                    <option>Past</option>
                                    <option>Current</option>
                                </select>
                                <label>Remarks</label>
                                <textarea className="form-control" id="remark" rows="3"></textarea>
                                <button type="Save" className="btn btn-primary"
                                    onClick={() => this.saveAlergy(this)}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default AddAlergies;