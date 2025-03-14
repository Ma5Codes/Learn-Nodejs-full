

const uploadToCloudinary = async(filepath)=>{
    try{
        const result = await cloudinary.uploader.upload(filepath);
        return{
            url: result.secure_url,
            publicId: result.publicId,
        }

    }catch(error){
        console.error('Error while uploading to Cloudinary', error)
        throw new error('Error while uploading to Cloudinary')
    }
}
module.exports = {uploadToCloudinary}