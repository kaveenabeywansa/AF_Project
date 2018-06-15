import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
import AccCreate from './Components/Register.js';
import DocAccCreate from './Components/DoctorReg';
import NurseAccCreate from './Components/NurseReg';
import EditPatient from './Components/EditPatient';
import AddAlergies from './Components/AddAlergies';
import AllPatients from './Components/AllPatients';
import Logout from './Components/Logout';

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/login" exact component={Login} />
                <Route path="/logout" exact component={Logout} />
                <Route path="/register" exact component={AccCreate} />
                <Route path="/register/doctor" exact component={DocAccCreate} />
                <Route path="/register/nurse" exact component={NurseAccCreate} />

                <Route path="/nurse/editpatient" exact component={EditPatient} />
                <Route path="/nurse/addalergies" exact component={AddAlergies} />
                <Route path="/nurse/allpatients" exact component={AllPatients} />
            </Switch>
        </BrowserRouter>
    )
}