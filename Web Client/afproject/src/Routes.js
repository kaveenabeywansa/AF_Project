import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import AccCreate from './Register.js';
import DocAccCreate from './DoctorReg';
import NurseAccCreate from './NurseReg';

export default () =>{
    return(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={AccCreate} />
            <Route path="/register/doctor" exact component={DocAccCreate} />
            <Route path="/register/nurse" exact component={NurseAccCreate} />
        </Switch>
        </BrowserRouter>
    )
}