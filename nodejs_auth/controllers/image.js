const Image = require('../models/Image');
const uploadToCloudinary = require('../helpers/cloudinary');
const cloudinary = require('cloudinary').v2;

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

const fetchImages = async(req,res)=>{
    try {

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
        let skip = (page-1)*limit;
        
        if(skip<0)
        skip=0;

        const sortBy = req.query.sortBy || ' createdAt';
        const sortOrder = req.query.sortOrder === 'asc' ? 1 : -1;
        const totalImages = await Image.countDocuments();
        const totalPages = Math.ceil(totalImages/limit);

        const sortObj = {};
        sortObj[sortBy] = sortOrder;
        const resp = await Image.find().sort(sortObj).skip(skip).limit(limit);

        // const resp = await Image.find();

        return res.status(200).json({
            status:true,
            currentPage: page,
            totalPages: totalPages,
            totalImages: totalImages,
            data:resp
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message:"Server Error!! while fetching images"
        })
    }
}

const deleteImage = async(req,res)=>{
    try {
        
        cloudinary.config({ 
            cloud_name: process.env.CLOUDINARY_NAME, 
            api_key: process.env.CLOUDINARY_API_KEY, 
            api_secret: process.env.CLOUDINARY_API_SECRET 
        });

        const getcurrImgID = req.params.id;
        const userID = req.userInfo.userId;
        const image = await Image.findById(getcurrImgID);

        if(!image){
            return res.status(404).json({
                success:false,
                message:"Image does not exist"
            })
        }
        
        if(image.uploadedBy.toString() != userID){
            return res.status(403).json({
                success:false,
                message:"Not permitted to delete image"
            })
        }
        else{
            
            // delete from cloudinary
            await cloudinary.uploader.destroy(image.publicId);
            // delete from mongodb
            const deletedImg = await Image.findByIdAndDelete(image._id);

            return res.status(200).json({
                success:true,
                message:"deleted image successfully"
            })
        }

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Server error while deleting image"
        })
    }
}

module.exports = {uploadimage,deleteImage,fetchImages};