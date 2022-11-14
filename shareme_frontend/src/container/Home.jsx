import React, { useState, useEffect, useRef } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';

import { Sidebar, UserProfile } from '../components';
import Pins from './Pins';
import { client } from '../client';
import { userQuery } from '../utils/data';
import logo from '../assets/logo.png';

const Home = () => {
  // Getting google user's name form localStorage.
  const userInfo =
    localStorage.getItem('user') !== 'undefined'
      ? JSON.parse(localStorage.getItem('user'))
      : localStorage.clear();
  // Google user's name.
  const [user, setUser] = useState(null);
  // Getting google user's name form Sanity DB.
  useEffect(() => {
    const query = userQuery(userInfo?.sub);
    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, []);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <div className='flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out'>
      <div className='hidden md:flex h-screen flex-initial'>
        {/* Sidebar for mobile screens */}
        <Sidebar user={user && user} />
      </div>
      <div className='flex md:hidden flex-row'>
        <HiMenu
          fontSize={40}
          className='cursor-pointer'
          onClick={() => setToggleSidebar(true)}
        />
        <Link to={'/'}>
          <img src={logo} alt={'logo'} className='w-28'></img>
        </Link>
        <Link to={`user-profile/${user?._id}`}>
          <img src={logo} alt={'logo'} className='w-28'></img>
        </Link>
        <Link to={`user-profile/${user?._id}`}>
          <img src={user?.image} alt={'logo'} className='w-14'></img>
        </Link>
      </div>
      {/* Right slider */}
      {toggleSidebar && (
        <div className='fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in'>
          <div className='absolute w-full flex justify-end items-center p-2'>
            {/* Close Sidebar button */}
            <AiFillCloseCircle
              fontSize={30}
              className='cursor-pointer'
              onClick={() => setToggleSidebar(false)}
            />
          </div>
          {/* Sidebar for big screens */}
          <Sidebar user={user && user} closeToggle={setToggleSidebar} />
        </div>
      )}
    </div>
  );
};
export default Home;
