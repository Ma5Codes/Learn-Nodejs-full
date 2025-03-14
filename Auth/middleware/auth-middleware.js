const jwt = require('jsonwebtoken')

const authMiddleware = (req,res,next)=>{
    const authHeader = req.headers["authorization"];
    console.log('auth Header');
    const token = authHeader && authHeader.split(" ")[1];
    if(!token){
        return res.status(401).json({
            success : false,
            message: " Access Denied, No token Provided.Please login to continue"
        });
    }

  // decode token
  try{
    const decodedTokenInfo = jwt.verify(token,process.env.JWT_SECRET_KEY);
    console.log(decodedTokenInfo);

    req.userInfo = decodedTokenInfo;
    next();

  }catch(error){
    return res.status(500).json({
        success : false,
        message: " Access Denied, No token Provided.Please login to continue"
    });
  }

    next();
};

module.exports = authMiddleware;