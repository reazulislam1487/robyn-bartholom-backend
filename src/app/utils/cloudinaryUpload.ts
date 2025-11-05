// import fs from "fs";
// import { cloudinary } from "../configs/cloudinary.config";

// export const uploadToCloudinary = async (
//   localPath: string,
//   folder: string = "products"
// ): Promise<string> => {
//   try {
//     const result = await cloudinary.uploader.upload(localPath, {
//       folder,
//       resource_type: "auto", // auto = handles both images & videos
//     });

//     fs.unlinkSync(localPath); // Delete temp file
//     return result.secure_url;
//   } catch (error) {
//     if (fs.existsSync(localPath)) fs.unlinkSync(localPath);
//     console.error("Cloudinary upload failed:", error);
//     throw error;
//   }
// };

import { cloudinary } from "../configs/cloudinary.config";
import streamifier from "streamifier";

export const uploadToCloudinaryBuffer = async (
  file: Express.Multer.File,
  folder: string = "products"
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: file.mimetype.startsWith("video/") ? "video" : "image",
      },
      (error, result) => {
        if (error) return reject(error);
        if (result && result.secure_url) resolve(result.secure_url);
        else reject(new Error("Upload failed"));
      }
    );

    streamifier.createReadStream(file.buffer).pipe(uploadStream);
  });
};
