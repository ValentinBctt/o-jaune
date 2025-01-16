import { Cloudinary } from 'cloudinary-core';

const cloudinary = new Cloudinary({ cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME, secure: true });

export default cloudinary;
