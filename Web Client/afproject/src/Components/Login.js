import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import UserSession from '../../SessionDet';
//import axios from 'axios';
import './Login.css';

class Login extends Component {
    clearFields() {
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }
    signIn2(obj){
      alert('Log in clicked !');
    }
    signIn(obj) {
        // var link = 'http://localhost:3001/customer/' + document.getElementById("phone").value;
        // axios.get(link,{ headers: {"Authorization" : "admin123"}}).then(function (response) {
        //     try {
        //         if (response.data.data[0].password === document.getElementById("password").value) {
        //             UserSession.initiateSession(response.data.data[0].name,response.data.data[0].nic,response.data.data[0].address,
        //                 response.data.data[0].phone);
        //             UserSession.addPoints(response.data.data[0].loyaltyPoint);
        //             obj.props.history.push('/order');
        //         } else {
        //             alert("Incorrect Password !");
        //         }
        //     } catch (error) {
        //         alert("Incorrect phone number or password !");
        //     }
        // }).catch(function (error) {
        //     alert(error);
        // });
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
                            <button type="button" className="btn btn-primary" onClick={() => this.signIn2(this)}>Sign In</button>
                        </div>
                    </fieldset>
                    <div className="createtxt"> If you dont have an account,<Link to="/register">Create One.</Link></div>
                </form>

            </div>
        );
    }
}
export default Login;