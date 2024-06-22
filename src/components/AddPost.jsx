import React, { useState } from 'react';

const AddPost = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        body: '',
        published: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({
            title: '',
            author: '',
            body: '',
            published: ''
        });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-pink-50 shadow-md rounded-lg px-8 py-6">
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
            <div className="flex justify-end">
                <button
                    type="submit"
                    className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Save Post
                </button>
            </div>
        </form>
    );
};

export default AddPost;
