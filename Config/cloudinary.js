const { CloudinaryStorage } = require('multer-storage-cloudinary');

const cloudinary = require('cloudinary').v2;


cloudinary.config({
     cloud_name: 'dqajerl82',
  api_key: '932913874974494',
  api_secret: 'hYT179n0qZ8MlZnejJCz4_9xU1U'
})

const storage = new CloudinaryStorage({
    cloudinary,
    params:{
        folder: 'Shopty',
        format: async ()=> 'png',
        public_id: (req,file)=> Date.now()+ ''+ file.originalname,
    }

})
module.exports = {cloudinary, storage};