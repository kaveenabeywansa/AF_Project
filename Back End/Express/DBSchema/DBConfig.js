var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Alergy = new Schema({
    nic:String,
    alergy:String,
    status:String,
    remark:String
});

const Attachments = new Schema({
    nic:String,
    file:String
});

mongoose.model('Alergy', Alergy);
mongoose.model('Attachments', Attachments);
mongoose.connect('mongodb://127.0.0.1:27017/afproject', function (err) {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log('Connected to MongoDB');
});
module.exports = mongoose;