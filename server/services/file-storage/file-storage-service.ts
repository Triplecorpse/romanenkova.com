const cloudinary = require('cloudinary');

cloudinary.uploader.upload("my_picture.jpg", (result: any) => { console.log(result) });


