const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema(
    {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        phone: {type: String, required: true},
        job_title: {type: String, required: false},
        address: {type: String, required: false},
    }
)

const Contact = mongoose.model('contact', ContactSchema);

module.exports = Contact;