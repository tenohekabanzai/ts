const Image = require('../models/Image');
const uploadToCloudinary = require('../helpers/cloudinary');
const uploadimage = async(req,res)=>{
    try {

        if(!req.file){
            return res.status(400).json({
                success: false,
                messsage:"File missing"
            })
        }

        const {url,publicId} = await uploadToCloudinary(req.file.path);

        const newlyUploadedImage = await Image.create({
            url,
            publicId,
            uploadedBy: req.userInfo.userId
        })

        return res.status(201).json({
            success:true,
            message:"Image uploaded to cloud",
            image: newlyUploadedImage
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message:"Server Error!! while uploading"
        })
    }
}

module.exports = uploadimage;