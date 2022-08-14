const express = require('express');
const Message = require('../models/message.model');


const router = express.Router();




router.post('/create', async (req, res) => {
    console.log('req.body', req.body)

    try {
        const message = await Message.create(req.body);

        const accountSid = 'ACc2b1b6f605810d64b8c8c95774a6a889';
        const authToken = 'b573542fabc159d39300ed82839cf8bb';
        const client = require('twilio')(accountSid, authToken);

        client.messages
            .create({
                body: 'Test Message',
                from: '+13515297996',
                to: '+919007708740'
            })
            .then(message => console.log(message.sid))
            .done();

       
        return res.status(200).send('Message is Sent');

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

        const messages = await Message.find().populate("receiver").skip(skip).limit(pagesize);
        const totalpages = Math.ceil(await Message.find().countDocuments()) / pagesize;
        return res.status(200).send({ messages, totalpages })
    }
    catch (err) {
        return res.status(400).send({ message: err.message })
    }
})

router.get('/get/one/:id', async (req, res) => {
    try {
        const message = await Message.findById(req.params.id).populate("receiver").lean().exec();

        return res.status(200).send(message);

    }
    catch (err) {
        return res.status(400).send({ message: err.message })
    }
})

module.exports = router;