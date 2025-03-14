const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/auth-middleware');
const adminMiddleware = require('../middlewares/admin-middleware');
const uploadMiddleware = require('../middlewares/upload-middleware');

const {uploadImageController, fetchImagesController} = require('../controllers/image-controller');

//upload image
router.post('/upload', authMiddleware, adminMiddleware, uploadMiddleware.single('image'),uploadImage);

//get all images
router.get('/images', authMiddleware, fetchImagesController);

module.exports = router;