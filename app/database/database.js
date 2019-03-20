const mongoose = require('mongoose');
const ContactModel = require('./models/contact').contactModel;
mongoose.connect('mongodb://localhost/phonebook', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('We are connected!');
});

const createContact = async (details) => {
    const contact = new ContactModel(details);

    try {
        return await contact.save();
    }
    catch (error) {
        throw error;
    }
};

const fetchContacts = async (id) => {
    try {
        if (id) return await ContactModel.findById(id);
        
        return await ContactModel.find();
    }
    catch(error) {
        throw error;
    }
};

const updateContact = async (id) => {
    try {
        return await ContactModel.findByIdAndUpdate(id);
    }
    catch(error) {
        throw error;
    }
};

const deleteContact = async (id) => {
    try {
        return await ContactModel.findByIdAndDelete(id);
    }
    catch(error) {
        throw error;
    }
};

module.exports.createContact = createContact;
module.exports.fetchContacts = fetchContacts;
module.exports.updateContact = updateContact;
module.exports.deleteContact = deleteContact;