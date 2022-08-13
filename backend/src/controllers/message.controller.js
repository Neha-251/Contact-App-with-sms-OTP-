const express = require('express');
const Message = require('../models/message.model');
const client = require('twilio')('AC9edb970d57828043a7a0d82b89b3b240', 'e61560b12a77a74397e89d9f44b40aa6');

//AC9edb970d57828043a7a0d82b89b3b240 - accoun SID
//e61560b12a77a74397e89d9f44b40aa6 -auth token


const router = express.Router();

router.post('/send', async(req, res) => {
    try{
        console.log('req.body', req.body);
        return res.status(200)
    }
    catch(err) {
        return res.status(500).send({message: err.message})
    }
})

router.post('/create', async (req, res) => {
    console.log('req.body', req.body)

    try {
        const message = await Message.create(req.body);
        console.log('message', message)


        // client.messages
        //     .create({
        //         body: req.body.message,
        //         from: '+919433906191',
        //         to: '+919810153260'
        //     })
        //     .then(message => console.log("messageCreate", message.sid));

        return res.status(200).send({ message: 'Message is Sent' });

    }
    catch (err) {
        return res.status(400).send({ message: err.message })
    }
})

router.get('/get/all', async (req, res) => {
    try {
        let page = req.query.page || 1;
        let pagesize = req.query.pagesize || 5;
        const skip = (page - 1) * pagesize;

        const messages = await Message.find().skip(skip).limit(pagesize);
        const totalpages = Math.ceil(await Message.find().countDocuments()) / pagesize;
        return res.status(200).send({ messages, totalpages })
    }
    catch (err) {
        return res.status(400).send({ message: err.message })
    }
})

router.get('/get/one/:id', async (req, res) => {
    try {
        const message = await Message.findById(req.params.id).lean().exec();

        return res.status(200).send(message);

    }
    catch (err) {
        return res.status(400).send({ message: err.message })
    }
})

module.exports = router;