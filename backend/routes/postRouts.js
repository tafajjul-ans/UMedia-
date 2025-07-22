const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.post('/create', postController.createPost);
router.get('/feed', postController.getFeed);
router.get('/user/:id', postController.getUserPosts);

module.exports = router;
