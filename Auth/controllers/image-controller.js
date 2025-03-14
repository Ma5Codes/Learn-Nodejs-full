const Image = require('../models/image-model');
const { uploadToCloudinary } = require('../helpers/cloudinaryHelper');
const fs = require('fs');

const uploadImageController = async (req, res) => {
    try {
        //check if file exists
        if(!req){
            return res.status(400).json({success: false, message: 'No file uploaded ,Please upload image'});
        }
       //upload image to cloudinary
       const { url, publicId} = await uploadToCloudinary(req.file.path);
       //store image details in database
       const newlyUploadedImage = new Image({
        url,
        publicId,
        uploadedBy: req.userInfo.userId,
       });
       await newlyUploadedImage.save();
       //delete the file from local storage
       fs.unlinkSync(req.file.path);
       res.status(201).json({success: true, message: 'Image uploaded successfully', ImageData: newlyUploadedImage});
       
    } catch (error) {
        console.error('Error while uploading image', error);
        res.status(500).json({success: false, message: 'Error while uploading image' });
    }
};
const fetchImagesController = async (req, res) => {
    try {
        const images = await Image.find({uploadedBy: req.userInfo.userId});
        res.status(200).json({success: true, message: 'Images fetched successfully', images});
    } catch (error) {
        console.error('Error while fetching images', error);
        res.status(500).json({success: false, message: 'Error while fetching images' });
    }
};

module.exports = {uploadImageController, fetchImagesController};