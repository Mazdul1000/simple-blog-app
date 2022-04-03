import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    
    const [blogs,setBlogs] =useState([]);

    useEffect(() => {
        fetch('https://retro-tech-talks.herokuapp.com/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className='w-full'>
            <h1 className="text-6xl text-center font-semibold mt-5 text-gray-800">Recent Blogs</h1>
            <div className='grid grid-cols-3 gap-10 mt-10 p-10'>
                {blogs.map(blog => <Blog key={blog._id} blog={blog}></Blog>)}
            </div>
            
        </div>
    );
};

export default Blogs;