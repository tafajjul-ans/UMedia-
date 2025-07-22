const cloudinary = require('../utils/cloudinary');

exports.createPost = async (req, res) => {
  try {
    const { image, caption, userId } = req.body;
    
    // Upload image to Cloudinary
    const uploadResponse = await cloudinary.uploader.upload(image, {
      upload_preset: 'ml_default',
    });

    const newPost = await Post.create({
      image: uploadResponse.secure_url,
      caption,
      user: userId,
    });

    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
