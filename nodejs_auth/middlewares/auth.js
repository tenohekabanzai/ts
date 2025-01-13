const jwt = require('jsonwebtoken');
const authMiddleWare=(req,res,next)=>{

    const authHeader = req.headers['authorization'];
    const Token = authHeader && authHeader.split(' ')[1];

    if(!Token){
        return res.status(403).json({
            success:false,
            message:"Access Denied... No token present"
        })
        return;
    }

    try {
        const jwtsecret = process.env.JWT_SECRET
        const decodedToken = jwt.verify(Token,jwtsecret);
        req.userInfo = decodedToken;
        next();
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Access Denied... Server error"
        });
    }
}

module.exports = authMiddleWare;