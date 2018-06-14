import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import './Login.css';

class EditPatient extends Component {
    state = {
        date: new Date(),
        photo: null
    };
    updatePatient(obj) {
        console.log(obj.state.date);
        console.log(obj.state.photo);

        //get calendar
        //get filechoser
    }
    datePicked(e, obj) {
        obj.setState({
            date: e
        });
    }
    handleChange(selectorFiles,obj) {
        obj.setState({
            photo:selectorFiles
        });
    }
    render() {
        return (
            <div>
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
                            <h6 className="card-title">Patient Profile</h6>
                            <hr />
                            <h4 id="name" className="card-title">Display Name Here...</h4>
                            <h6 id="hin" className="card-title">HIN: </h6>
                            <h6 id="gender" className="card-title">Gender: </h6>
                            <h6 id="status" className="card-title">Status: </h6>
                            <h6 id="dob" className="card-title">Date of Birth: </h6>
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
                                    <Calendar onChange={(e) => this.datePicked(e, this)} value={this.state.date} />
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

                            <h2>Patient Contact Details</h2>
                            <div className="editPatientBlock">

                                <div className="form-group">
                                    <label htmlFor="select_photo">Select Patient Photo</label>
                                    <div className="input-group mb-3">
                                        <div className="custom-file">
                                            <input type="file" onChange={(e) => this.handleChange(e.target.files,this)} className="custom-file-input" id="choosefile"></input>
                                            <label className="custom-file-label" htmlFor="Choose_file">Choose file</label>
                                        </div>
                                        <div className="input-group-append">
                                            <span className="input-group-text" id="">Upload</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="Remarks">Remarks</label>
                                    <textarea className="form-control" id="Remarks" rows="3"></textarea>
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
            </div>
        );
    }
}

export default EditPatient;