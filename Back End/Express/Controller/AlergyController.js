var mongoose=require('../DBSchema/DBConfig');
var Schema = mongoose.model('Alergy');

var Controller=function () {
    this.insertAlergy=function (data) {
        return new Promise(function (resolve,reject) {
            var Alergy=new Schema({
                nic:data.nic,
                alergy:data.alergy,
                status:data.status,
                remark:data.remark
            });
            Alergy.save().then(function () {
                resolve({status:200,message:"Alergy Added Successfully !"});
            }).catch(function (err) {
                reject({status:500,message:"Error: "+err});
            })
        });
    }
    this.getAll=function () {
        return new Promise(function (resolve,reject) {
            Schema.find().exec().then(function (data) {
                resolve({status:200,data:data});
            }).catch(function (err) {
                reject({status:404,message:"No data available"});
            })
        })
    }
    this.getAlergy=function(nic){
        return new Promise(function (resolve,reject) {
            Schema.find({nic:nic}).exec().then(function (data) {
                resolve({status:200,data:data});
            }).catch(function (err) {
                reject({status:404,message:"No ID found !"});
            })
        })
    }
    this.updateAlergy=function (nic,body) {
        return new Promise(function (resolve,reject) {
            Schema.update({nic:nic},body).then(function (data) {
                resolve({status:200,data:data});
            }).catch(function (err) {
                reject({status:404,message:"No ID found"});
            })
        })
    }
    this.deleteAlergy=function (nic) {
        return new Promise(function (resolve,reject) {
            Schema.remove({nic:nic}).then(function (data) {
                resolve({status:200,message:"Successfully Deleted !"});
            }).catch(function (err) {
                reject({status:404,message:"No ID found !"});
            })
        })
    }
};
module.exports = new Controller();