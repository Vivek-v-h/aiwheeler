import React from 'react'
import Navbar from "../components/nav/NavComp.jsx";
import Blog from '../components/blog/blog.jsx';
import {useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Home() {
  const {currentUser}=useSelector((state)=>state.user);
  return (
    <div>
      
      <Navbar />
      <div className='pl-0 ml-0'>
        <div className='flex mb-4 ml-9'>
          <div className='p-4'>
            {currentUser ? (
              <Link to="/MyCar">
                <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">Your Car</button>
              </Link>
            ) : (
              <Link to="Login" >
                <p className="text-gray-500">Sign In for using exclusive features</p>
              </Link>
              
            )}
          </div>
          <div className='p-4'>
            {currentUser ? (
                <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">MarketPlace</button>
              
            ) : (
              <Link to="Login" >
                <p className="text-gray-500">Sign In for using exclusive features</p>
              </Link>
            )}
          </div>
        </div>

      
      
      <Blog />
      </div>
    </div>
  )
}

export default Home