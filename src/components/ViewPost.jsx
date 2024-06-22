import React from 'react';
import { Link } from 'react-router-dom';

const ViewPost = ({ post, onDelete }) => {
    return (
        <div className="container mx-auto p-4">
            <div className="bg-pink-50 rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800">{post.title}</h2>
                    <p className="text-gray-500 mt-2">By {post.author} | {post.published}</p>
                    <p className="text-gray-600 mt-2">{post.body}</p>
                </div>
                <div className="px-6 py-4 bg-gray-800 text-white flex justify-between items-center">
                    <div>
                        <Link to={`/edit/${post.id}`} className="text-blue-400 hover:underline mr-4">Edit</Link>
                        <button
                            className="text-red-400 hover:underline"
                            onClick={() => onDelete(post.id)}
                        >
                            Delete
                        </button>
                    </div>
                    <Link to="/" className="text-blue-400 hover:underline">Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default ViewPost;
