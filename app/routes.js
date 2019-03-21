const db = require('./database/database');
var express = require('express');
const router = express.Router();

// Gets all contacts
router.get('/', (req, res) => {

    db.fetchContacts()
    .then(contact => res.send({contact}))
    .catch(err => res.send({
        success: 0,
        error: err
    }));
});

router.post('/', (req, res) => {

    if (!req.body.name) res.send({ error: "Missing name!" });
    if (!req.body.phoneNumber) res.send({ error: "Missing phone number!" });

    db.createContact({
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address
    })
    .then(contact => res.send({
        success: 1,
        message: "Contact created",
        id: contact._id
    }))
    .catch(err => res.send({
        success: 0,
        error: err
    }));
});

router.get('/:contactId', (req, res) => {

    db.fetchContacts(req.params.contactId)
    .then(contact => res.send({
        success: 1,
        message: "Contact found",
        data: {
            name: contact.name,
            phoneNumber: contact.phoneNumber,
            address: contact.address
        }
    }))
    .catch(err => res.send({
        success: 0,
        error: err
    }));
});

router.put('/:contactId', (req, res) => {

    if (!req.body.name) res.send({ error: "Missing name!" });
    if (!req.body.phoneNumber) res.send({ error: "Missing phone number!" });

    db.updateContact(req.params.contactId)
    .then(contact => res.send({
        success: 1,
        message: "Contact updated",
        data: {
            name: contact.name,
            phoneNumber: contact.phoneNumber,
            address: contact.address
        }
    }))
    .catch(err => res.send({
        success: 0,
        error: err
    }));
});

router.delete('/:contactId', (req, res) => {

    db.deleteContact(req.params.contactId)
    .then(res.send({
        success: 1,
        message: "Contact deleted"
    }))
    .catch(err => res.send({
        success: 0,
        error: err
    }));
});

module.exports = router;