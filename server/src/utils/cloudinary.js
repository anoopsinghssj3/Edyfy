import { v2 as cloudinary } from "cloudinary";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const cloudinaryUpload = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      //local file path provided to upload files
      resource_type: "auto",
    });
    console.log("File uploaded on cloudinary", response.url); //for developers
    return response; //for client
  } catch (error) {
    fs.UnlinkSync(localFilePath); //remove locally stored temporary file as upload operation failed
    return null;
  }
};

export { cloudinaryUpload };
