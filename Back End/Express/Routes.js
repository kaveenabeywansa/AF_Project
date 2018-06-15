const express=require('express');
var Routes=express.Router();
// var MenuRoute=require('./Controller/Menu.Route');
var AlergyRoute=require('./Controller/Alergy.Route');

// Routes.use('/menu/',MenuRoute);
Routes.use('/alergy/',AlergyRoute);
module.exports = Routes;