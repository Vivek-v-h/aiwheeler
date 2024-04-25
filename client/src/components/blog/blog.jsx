import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  var { currentUser} = useSelector((state) => state.user);
  var userId = currentUser._id.toString();
  useEffect(() => {
    axios.get('http://localhost:3000/posts/')
      .then(response => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addPost = () => {
    const newPost = { title, content, userId  };
    axios.post('http://localhost:3000/posts/add', newPost)
      .then(res => console.log(res.data));

    setTitle('');
    setContent('');
  }

  const deletePost = (id, userId) => {
    
    var userId = currentUser._id.toString();
    
    axios.delete(`http://localhost:3000/posts/${id}/${userId}`)
      .then(res => {
        console.log(res.data);
        // Assuming you want to update the state after successful deletion
        setPosts(posts.filter(post => post._id !== id));
      })
      .catch(err => {
        console.error('Error deleting post:', err);
        // Handle errors if needed
      });
  }
  

  return (
    <div className="container mx-auto px-4">
    <h1 className="text-3xl font-bold mb-6">Feed</h1>
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Add New Post</h2>
      <div className="flex flex-col md:flex-row md:items-center mb-4">
        <input 
          type="text" 
          className="border border-gray-400 rounded-md px-4 py-2 mb-2 md:mr-2 w-full md:w-auto" 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <textarea 
          className="border border-gray-400 rounded-md px-4 py-2 mb-2 w-full md:w-auto" 
          placeholder="Content" 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
        />
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={addPost}>Add Post</button>
    </div>
    <div>
      <h2 className="text-xl font-semibold mb-2">Posts</h2>
      {posts.map(post => (
        <div key={post._id} className="border border-gray-400 rounded-md p-4 mb-4">
          <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
          <p>{post.content}</p>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 mt-2" onClick={() => deletePost(post._id)}>Delete</button>
        </div>
      ))}
    </div>
    </div>
  );
}

export default App;
