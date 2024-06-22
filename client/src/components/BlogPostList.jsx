import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BlogPostList = ({ posts, onDelete }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 10;

    // Calculate pagination logic
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl ml-5 font-bold mb-4">Blog List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 justify-center">
                {currentPosts.map(post => (
                    <div key={post.id} className="bg-pink-50 rounded-lg overflow-hidden shadow-md">
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h2>
                            <p className="text-gray-600">By {post.author}</p>
                            <p className="text-gray-600">{post.published}</p>
                            <p className="text-gray-700 mt-4 line-clamp-3">{post.body}</p>
                        </div>
                        <div className="px-6 py-4 bg-gray-800 text-white flex justify-between items-center">
                            <div>
                                <Link to={`/view/${post.id}`} className="text-blue-400 hover:underline mr-4">View</Link>
                                <Link to={`/edit/${post.id}`} className="text-blue-400 hover:underline">Edit</Link>
                            </div>
                            <button
                                className="text-red-400 hover:underline"
                                onClick={() => onDelete(post.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {/* Pagination controls */}
            <div className="flex justify-center mt-4">
                {Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => paginate(index + 1)}
                        className={`mx-1 px-4 py-2 rounded-lg focus:outline-none ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BlogPostList;
