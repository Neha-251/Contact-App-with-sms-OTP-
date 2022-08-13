const mongoose = require('mongoose');


const MessageSchema = new mongoose.Schema(
    {
        receiver: {type: mongoose.Schema.Types.ObjectId, ref:"contact", required: true},
        message: {type: String, required: true}
    },
    {
        timaStamp: true,
        versionKey: false
    }
)

const Message = mongoose.model('message', MessageSchema);

module.exports = Message;