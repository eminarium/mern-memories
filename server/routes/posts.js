const express = require('express');
//import { getPosts } from '../controllers/posts';

const getPosts = require('../controllers/posts.js').getPosts
const getPost = require('../controllers/posts.js').getPost
const getPostsBySearch = require('../controllers/posts.js').getPostsBySearch
const createPost = require('../controllers/posts.js').createPost
const updatePost = require('../controllers/posts.js').updatePost
const deletePost = require('../controllers/posts.js').deletePost
const likePost   = require('../controllers/posts.js').likePost

const auth = require('../middleware/auth.js');
const router = express.Router();

router.get('/search', getPostsBySearch);
router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch('/:id/likePost', auth, likePost);

module.exports = router;