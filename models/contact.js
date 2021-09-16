const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema ({
    firstname: {type: String, required: true},
    lastname: {type:String, required: true},
    email: {type: String, required: true},
    tel: {type: Number, required: true, minlength:8},
    address: {type: String, required: true},
    designreq: {type: String},
})

const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;