const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema(
    {
        url:{
            type: String,
            required: true,
        },

        publicId: {
            type: String,
            reqired: true,
        },
        uploadedBy:{
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true,
        },
    },{timestamps : true});

module.exports = mongoose.model("Image", ImageSchema)