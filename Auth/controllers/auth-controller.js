const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
//register controller
const registerUser = async(req,res)=>{
    try{
        //EXTRACT USER INFORMATION FROM OUR BODY 
        const {username, email, password, role} = req.body;
        //First check if the username already exists in our database 
        const checkExistingUser = await User.findOne({$or: [{username}, {email}]});
        if(checkExistingUser){
            return res.status(400).json({
                success: false,
                message: "User already Exists with either the same username or the same email"
            })
        }
        //next hash the user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword =await bcrypt.hash(password, salt);

        //next create a new user and save in database
        const newlyCreatedUser = new User({
            username,
            email,
            password: hashedPassword,
            role: role || 'user'
        })
        //save
        await newlyCreatedUser.save();
        if(newlyCreatedUser){
            res.status(201).json({
                success:true,
                message: 'User Created Successfully'
            })
        }else{
            res.status(400).json({
                success:failed,
                message: 'Unable to register User ,Please try again!!'
            })
        }

    }catch(e){
        console.log(e);
        res.status(500).json({
            success : false ,
            message : "Some error occured Please try again!!"
        })
    }
}

//login controller 
const loginUser = async(req,res)=>{
    try{
        const {username, password} =req.body;
        
        //check if the user exists in database or not
        const user = await User.findOne({username});

        if (!user){
           return res.status(400).json({
                success : false ,
                message : "Invalid UserName or password!!"
            })
        }
        //check if password is correct or not
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch){
            return res.status(400).json({
                success : false ,
                message : "Invalid password!!"
            })
        }

        //create User token
        const accessToken = jwt.sign({
            userId : user._id,
            username : user.username,
            role : user.role
        },process.env.JWT_SECRET_KEY,{ expiresIn : '15m'})

        res.status(200).json({
            success: true,
            message: "Logged In Successful",
            accessToken
        })

         

    }catch(e){
        console.log(e);
        res.status(500).json({
            success : false ,
            message : "Some error occured Please try again!!"
        })
    }
}

module.exports = { registerUser, loginUser}