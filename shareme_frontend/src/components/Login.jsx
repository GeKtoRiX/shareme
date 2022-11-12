import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { FcGoogle } from 'react-icons/fc';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';

const Login = () => {
  const user = false;

  /* 
            <div className='shadow-2xl'>
            <button
              type='button'
              className='bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none'
            >
              <FcGoogle className='mr-4' />
              Sign in with Google
            </button>
          </div>
  */

  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      {/* Loop video. */}
      <div className='w-full h-full relative'>
        <video
          className='w-full h-full object-cover'
          src={shareVideo}
          type='video/mp4'
          loop
          controls={false}
          muted
          autoPlay
        />
        {/* Overlay video with black color transparency.  */}
        <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
          <div className='shadow-2xl'>
            <div className='p-4'>
              <img src={logo} width='140px' alt='logo' />
            </div>
            {user ? (
              <div>Logged in</div>
            ) : (
              <GoogleLogin
                onSuccess={(response) => console.log(response)}
                onError={() => console.log('Error')}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
