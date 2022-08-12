const express = require('express');
const Contact = require('../models/contact.model');

const router = express.Router();

router.post('/create', async(req, res) => {
    try{
        await Contact.create(req.body);

        return res.status(200).send({message: 'Contact is Saved'});

    }
    catch(err) {
        return res.status(400).send({message: err.message})
    }
})

router.get('/get/all', async(req, res) => {
    try{
        let page = req.query.page || 1;
        let pagesize = req.query.pagesize || 5;
        const skip = (page - 1) * pagesize;


        const contacts = await Contact.find().skip(skip).limit(pagesize);
        const totalpages = Math.ceil(await Contact.find().countDocuments()) / pagesize;
        return res.status(200).send({contacts, totalpages})

    }
    catch(err) {
        return res.status(400).send({message: err.message})
    }
})

router.get('/get/one/:id', async(req, res) => {
    try{
        const contact = await Contact.findById(req.params.id).lean().exec();

        return res.status(200).send(contact);

    }
    catch(err) {
        return res.status(400).send({message: err.message})
    }
})

module.exports = router;