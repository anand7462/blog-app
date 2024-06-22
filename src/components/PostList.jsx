import React, { useState, useEffect } from 'react';

const fetchPosts = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        const posts = await response.json();
        return posts;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
};

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts().then(posts => setPosts(posts));
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map(post => (
                <div key={post.id} className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-gray-800">{post.title}</h2>
                    <p className="text-gray-500 mt-2">User ID: {post.userId}</p>
                    <p className="text-gray-600 mt-2">{post.body}</p>
                </div>
            ))}
        </div>
    );
};

export default PostList;
