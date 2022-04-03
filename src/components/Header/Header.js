import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='h-[70px] bg-slate-900  '>
              <div className='w-[90%] mx-auto flex h-full justify-between items-center'>

                  <div className='text-purple-700'>
                  <h1 style={{fontFamily:'Fredoka One'}} className='text-4xl'>TechTalks</h1>
                </div>
                <div className='text-white'>
                    <Link className='mr-5 text-xl font-semibold hover:text-purple-700' to='/home'>Home</Link>
                    <Link className='mr-5 text-xl font-semibold hover:text-purple-700' to='/blogs'>Blogs</Link>
                    <Link className='mr-5 text-xl font-semibold hover:text-purple-700' to='/about'>About</Link>
                </div>
              </div>
                
            </nav>
        </div>
    );
};

export default Header;