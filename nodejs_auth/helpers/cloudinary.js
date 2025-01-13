const cloudinary = require('cloudinary').v2;

const uploadToCloudinary = async(filePath)=>{
    try {

        cloudinary.config({ 
            cloud_name: process.env.CLOUDINARY_NAME, 
            api_key: process.env.CLOUDINARY_API_KEY, 
            api_secret: process.env.CLOUDINARY_API_SECRET 
        });
        const result = await cloudinary.uploader.upload(filePath);
        return {
            url : result.secure_url,
            publicId: result.public_id,
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = uploadToCloudinary;