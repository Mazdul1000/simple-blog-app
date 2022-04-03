import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blog = (props) => {
    console.log(props)
    const {_id,title,imageURL,blog,admin} = props.blog;

    const navigate = useNavigate();

    const handleReadMore =() => {
        navigate(`/blog/${_id}`);
    }
    return (
        <div className='p-5 shadow-lg shadow-purple-200 w-full'>
            <img className='h-[250px] w-[300px] mx-auto' src={imageURL} alt="" />
            <h1 className="text-2xl my-5 font-semibold hover:text-purple-700">{title}</h1>
            <p className='text-md'> {blog.length>100?<p>{blog.slice(0,100)} <button className='hover:text-purple-700 text-[18px] font-semibold' onClick={handleReadMore}>Read more</button></p>:""}</p>
            <p><small className='font-semibold text-gray-600'>{admin}</small></p>
        </div>
    );
};

export default Blog;