import React,{ Component} from 'react';
import {Link} from 'react-router-dom';
import Doctor from './images/doctor.png';
import Nurse from './images/nurse.png'

class Register extends Component{
    render(){
        return(
            <div className="RegisterComp">
                <center>
                    <h1 className="h1x">Select Account Type</h1>
                    <Link to="/register/doctor"><img className="Img" src={Doctor} alt="Create a Doctor Account" /></Link>
                    {' '}
                    <Link to="/register/nurse"><img className="Img" src={Nurse} alt="Create a Nurse Account" /></Link>
                </center>
            </div>
        );
    }
}

export default Register;