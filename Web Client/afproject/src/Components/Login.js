import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import UserSession from '../../SessionDet';
import axios from 'axios';
import './Login.css';

class Login extends Component {
    clearFields() {
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }
    signIn(obj) {
        axios.post('http://localhost:8080/login/user', {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value
          })
          .then(function (response) {
            if(response.data==="doctor"){
                obj.doctorLogin(obj);
            }else if(response.data==="nurse"){
                obj.nurseLogin(obj);
            }else{
                alert('Incorrect Username or Password !')
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    doctorLogin(obj){
        //do the processing for the doctor's login
        alert('Doctor Login Success !');
        obj.clearFields();
    }
    nurseLogin(obj){
        //do the processing for the nurse's login
        alert('Nurse Login Success !');
        obj.clearFields();
    }
    render() {
        return (
            <div className="LogInContainer" >
                <h1 className="h1x">OPD Login</h1>
                <form>
                    <fieldset>
                        <div className="loginComps">
                            <legend className="legendx">Log in</legend>
                            <div className="form-group">
                                <input type="text" className="form-control" id="username" aria-describedby="emailHelp" placeholder="User Name" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="password" placeholder="Password" />
                            </div>
                        </div>
                        <div>
                            <button type="button" className="btn btn-warning" onClick={() => this.clearFields()}>Reset Fields</button>
                            {'    '}
                            <button type="button" className="btn btn-primary" onClick={() => this.signIn(this)}>Sign In</button>
                        </div>
                    </fieldset>
                    <div className="createtxt"> If you dont have an account,<Link to="/register">Create One.</Link></div>
                </form>

            </div>
        );
    }
}
export default Login;