var mongoose=require('../DBSchema/DBConfig');
var MenuSchema = mongoose.model('Menu');

var Controller=function () {
    this.insertMenu=function (data) {
        return new Promise(function (resolve,reject) {
            var Menu=new MenuSchema({
                id: data.id,
                name: data.name,
                price: data.price,
                loyalPoints: data.loyalPoints,
                qty: 1
            });
            Menu.save().then(function () {
                resolve({status:200,message:"Menu item inserted successfully !"});
            }).catch(function (err) {
                reject({status:500,message:"Error: "+err});
            })
        });
    }
    this.getAll=function () {
        return new Promise(function (resolve,reject) {
            MenuSchema.find().exec().then(function (data) {
                resolve({status:200,menudata:data});
            }).catch(function (err) {
                reject({status:404,message:"No data available"});
            })
        })
    }
    this.getDummyData=function () {
        return new Promise(function (resolve,reject) {
            try {
                resolve({status:200,menudata:DummyFile});
            }catch(err) {
                reject({status:404,message:"No data found !"});
            }
        })
    }
    this.getMenu=function(id){
        return new Promise(function (resolve,reject) {
            MenuSchema.find({id:id}).exec().then(function (data) {
                resolve({status:200,menuSearch:data});
            }).catch(function (err) {
                reject({status:404,message:"No ID found !"});
            })
        })
    }
    this.updateMenu=function (id) {
        return new Promise(function (resolve,reject) {
            MenuSchema.update({id:id}).then(function (data) {
                resolve({status:200,menuUpdated:data});
            }).catch(function (err) {
                reject({status:404,message:"No ID found"});
            })
        })
    }
    this.deleteMenu=function (id) {
        return new Promise(function (resolve,reject) {
            MenuSchema.remove({id:id}).then(function (data) {
                resolve({status:200,message:"Successfully Deleted !"});
            }).catch(function (err) {
                reject({status:404,message:"No ID found !"});
            })
        })
    }
};
module.exports = new Controller();