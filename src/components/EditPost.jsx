import React, { useState, useEffect } from 'react';

const EditPost = ({ post, onUpdate }) => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        body: '',
        published: ''
    });

    useEffect(() => {
        setFormData(post);
    }, [post]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(post.id, formData);
    };

    return (
        <div className="container mx-auto p-4">
            <form onSubmit={handleSubmit} className="bg-pink-50 rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                            Title
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="title"
                            type="text"
                            placeholder="Enter title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">
                            Author
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="author"
                            type="text"
                            placeholder="Enter author"
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="body">
                            Content
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                            id="body"
                            placeholder="Enter content"
                            name="body"
                            value={formData.body}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="published">
                            Publication Date
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="published"
                            type="text"
                            placeholder="Enter publication date"
                            name="published"
                            value={formData.published}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="px-6 py-4  text-white flex justify-between items-center">
                    <button
                        type="submit"
                        className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Update Post
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditPost;
