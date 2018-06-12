import React, { Component } from 'react';
import axios from 'axios';

class DoctorRegister extends Component {
    validate(obj){
        if ((document.getElementById("regno").value==="") || (document.getElementById("fname").value==="") ||
        (document.getElementById("lname").value==="") || (document.getElementById("nic").value==="") ||
        (document.getElementById("address").value==="") || (document.getElementById("phone").value==="") |
        (document.getElementById("email").value==="") || (document.getElementById("username").value==="") ||
        (document.getElementById("password").value==="") || (document.getElementById("confpassword").value==="")){
            alert('Your cannot have empty field ! Please fill all fields to register !');
        }else{
            if(document.getElementById("password").value===document.getElementById("confpassword").value){
                this.postToDatabase(obj);
            }else{
                alert('Password do not match... Re-check and Re-try !');
            }
        }
    }
    postToDatabase(obj){
        axios.post('http://localhost:8080/doctor', {
            docRegNo: document.getElementById("regno").value,
            fName: document.getElementById("fname").value,
            lname: document.getElementById("lname").value,
            nic: document.getElementById("nic").value,
            address: document.getElementById("address").value,
            phone: document.getElementById("phone").value,
            email: document.getElementById("email").value,
            username: document.getElementById("username").value,
        })
            .then(function (response) {
                axios.post('http://localhost:8080/login', {
                    username: document.getElementById("username").value,
                    password: document.getElementById("password").value,
                    userType: "doctor"
                })
                    .then(function (response) {
                        obj.clearFields();
                        alert('Successfully Registered !');
                        obj.props.history.push('/login');
                    })
                    .catch(function (error) {
                        console.log(error);
                        alert('An error occured !');
                    });
            })
            .catch(function (error) {
                console.log(error);
                alert('An error occured !');
            });
    }
    clearFields(obj) {
        document.getElementById("regno").value="";
        document.getElementById("fname").value="";
        document.getElementById("lname").value="";
        document.getElementById("nic").value="";
        document.getElementById("address").value="";
        document.getElementById("phone").value="";
        document.getElementById("email").value="";
        document.getElementById("username").value="";
        document.getElementById("password").value="";
        document.getElementById("confpassword").value="";
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
                        <button className="btn btn-primary" onClick={() => this.validate(this)}>Create Account</button>
                    </center>
                </div>
            </div>
        );
    }
}

export default DoctorRegister;