const express = require('express');
const authMiddleware = require('../middleware/auth-middleware')
const router = express.Router();


router.get('/welcome',authMiddleware, (req,res)=>{
    const {username, userId, role} = req.userInfo;
   res.json({
    message : "Welcome to Home Page.",
    user : {
         _id: userId,
         username,
         role
        }
   }) 
})

module.exports = router;