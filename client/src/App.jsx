import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";
import axios from "axios";
import BlogPostList from "./components/BlogPostList";
import ViewPost from "./components/ViewPost";
import AddPost from "./components/AddPost";
import EditPost from "./components/EditPost";

const App = () => {
  const apiUrl = "https://jsonplaceholder.typicode.com/posts";

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(apiUrl);
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleAddPost = async (postData) => {
    try {
      const response = await axios.post(apiUrl, postData);
      setPosts([...posts, response.data]);
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  const handleEditPost = async (postId, postData) => {
    try {
      const response = await axios.put(`${apiUrl}/${postId}`, postData);
      const updatedPosts = posts.map((post) =>
        post.id === postId ? response.data : post
      );
      setPosts(updatedPosts);
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const handleDeletePost = async (postId) => {
    try {
      await axios.delete(`${apiUrl}/${postId}`);
      const filteredPosts = posts.filter((post) => post.id !== postId);
      setPosts(filteredPosts);
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <Router>
      <div className="container mx-auto p-4">
        <div className="bg-gray-800 p-4 mb-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-pink-300 text-center mb-2">
           Blog App
          </h1>
          <p className="text-gray-300 text-center">
            Explore and manage your blog posts
          </p>
        </div>

        <nav className="mb-4">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link to="/" className="text-blue-500 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/add" className="text-blue-500 hover:underline">
                Add Post
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<BlogPostList posts={posts} onDelete={handleDeletePost} />}
          />
          <Route
            path="/view/:postId"
            element={<ViewPostWrapper posts={posts} />}
          />
          <Route path="/add" element={<AddPost onSubmit={handleAddPost} />} />
          <Route
            path="/edit/:postId"
            element={
              <EditPostWrapper posts={posts} onUpdate={handleEditPost} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

const ViewPostWrapper = ({ posts }) => {
  const { postId } = useParams();
  const post = posts.find((p) => p.id === parseInt(postId));
  return post ? <ViewPost post={post} /> : <p>Post not found</p>;
};

const EditPostWrapper = ({ posts, onUpdate }) => {
  const { postId } = useParams();
  const post = posts.find((p) => p.id === parseInt(postId));
  return post ? (
    <EditPost post={post} onUpdate={onUpdate} />
  ) : (
    <p>Post not found</p>
  );
};

export default App;
