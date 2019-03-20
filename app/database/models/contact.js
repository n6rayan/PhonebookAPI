const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const contactSchema = new Schema({
    name: String,
    phoneNumber: String,
    address: {
        type: String,
        required: false,
        default: null
    }
});

const contactModel = mongoose.model('Contact', contactSchema);

module.exports.contactModel = contactModel;