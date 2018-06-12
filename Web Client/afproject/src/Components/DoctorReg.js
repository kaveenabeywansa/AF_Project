import React, { Component } from 'react';

class DoctorRegister extends Component {
    registerDoc(obj) {
        alert('Register Clicked !');
    }
    clearFields(obj){
        alert('Clear Fields Clicked !');
    }
    render() {
        return (
            <div className="container">
                <div className="DocRegForm">
                    <center><h1 className="h1y">Doctor Registration</h1></center>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="formLabel1">Doctor Registration Number</label>
                                <input type="text" className="form-control" id="regno" placeholder="Registration Number" />
                                <label className="formLabel1">First Name</label>
                                <input type="text" className="form-control" id="fname" placeholder="First Name" />
                                <label className="formLabel1">Last Name</label>
                                <input type="text" className="form-control" id="lname" placeholder="Last Name" />
                                <label className="formLabel1">NIC</label>
                                <input type="text" className="form-control" id="nic" placeholder="NIC" />
                                <label className="formLabel1">Address</label>
                                <input type="text" className="form-control" id="address" placeholder="Address" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                            <label className="formLabel1">Phone Number</label>
                                <input type="text" className="form-control" id="phone" placeholder="Phone Number" />
                                <label className="formLabel1">E-mail Address</label>
                                <input type="email" className="form-control" id="email" placeholder="E-Mail" />
                                <label className="formLabel1">Login Username</label>
                                <input type="text" className="form-control" id="username" placeholder="Username" />
                                <label className="formLabel1">LoginPassword</label>
                                <input type="password" className="form-control" id="password" placeholder="Password" />
                                <label className="formLabel1">Confirm Password</label>
                                <input type="password" className="form-control" id="confpassword" placeholder="Confirm Password" />
                            </div>
                        </div>
                    </div>
                    <center>
                        <button className="btn btn-warning" onClick={() => this.clearFields(this)}>Clear Fields</button>
                        {' '}
                        <button className="btn btn-primary" onClick={() => this.registerDoc(this)}>Create Account</button>
                    </center>
                </div>
            </div>
        );
    }
}

export default DoctorRegister;