import express from  'express';


const router =express.Router();
import Post from "../models/posts.model.js";

// Get all posts
router.route('/').get((req, res) => {
  Post.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add a new post
router.route('/add').post((req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const userId=req.body.userId;
  const newPost = new Post({ title, content,userId });

  newPost.save()
    .then(() => res.json('Post added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Get a post by id
router.route('/:id').get((req, res) => {
    
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Delete a post by id
router.delete('/:id/:userId', (req, res) => {
    const postId = req.params.id;
    const userId = req.params.userId;
    const objectId = mongoose.Types.ObjectId(postId);
  
    Post.findById(objectId, (err, post) => {
      if (err) {
        return res.status(500).json({ message: 'Server error' });
      }
      
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
  
      // Check if the provided userId matches the userId associated with the post
      if (userId !== post.userId.toString()) {
        return res.status(403).json({ message: 'Not authorized to delete this post' });
      }
  
      // If the user ID matches, delete the post
      Post.findByIdAndDelete(objectId)
        .then(() => res.json('Post deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
    });
  });
  

  

export default router
