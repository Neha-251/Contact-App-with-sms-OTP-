const express = require('express');
const Contact = require('../models/contact.model');

const router = express.Router();
console.log("yes came here")

// router.post("/", async(req, res) => {
//     try{
//         const todos = await Todo.create(req.body);
//         return res.status(201).send(todos);
//     }
//     catch(err) {
//         return res.status(500).send({message: err})
//     }
// });

router.post('/', async(req, res) => {
    console.log('req', req.body)

    try{
        const contact = await Contact.create(req.body);
        return res.status(200).send(contact);
        // return res.status(200).send({message: 'Contact is Saved'});
    }
    catch(err) {
        // return res.status(440).send(err)
        return res.status(440).send({message: err.message})
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