const multer = require('multer');
const path = require('path');

//set up multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    },
});

//check file  filter
const checkFIleFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Only image files are allowed!'), false);
    }
}

//multer middleware
module.exports = multer({
    storage: storage,
    fileFilter: checkFIleFilter,
    limits: {
        fileSize: 1024 * 1024 * 5,//5MB
    },
});