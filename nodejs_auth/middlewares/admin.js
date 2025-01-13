const isAdmin = (req,res,next)=>{
    if(req.userInfo.role == 'admin')
    next();
    else{
        return res.status(403).json({
            success:false,
            message:"Access Denied! Admin only access"
        })
    }
}

module.exports = isAdmin;