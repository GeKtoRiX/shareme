import React from 'react';
// Redirection to other routes.
import { useNavigate } from 'react-router-dom';
// Authorization via Google account
import { GoogleLogin, googleLogout } from '@react-oauth/google';
// Decoder for google user's information.
import jwt_decode from 'jwt-decode';
// Client for connection with Sanity DB.
import { client } from '../client';
// Media files.
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';

const Login = () => {
  const navigate = useNavigate();
  const user = false;
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
              <div>{googleLogout()}</div>
            ) : (
              // Google Authentication.
              <GoogleLogin
                // Successful authorization.
                onSuccess={(response) => {
                  // Storing user data in browser localStorage.
                  localStorage.setItem('user', JSON.stringify(response));
                  // Destructuring google authorization data(userName,img,id).
                  const { name, picture, sub } = jwt_decode(
                    response.credential
                  );

                  // Information for creating a new 'google user' in Sanity DB.
                  const doc = {
                    _id: sub,
                    // Element(document) name in Sanity
                    _type: 'user',
                    // Field with google username.
                    userName: name,
                    // Field with google users img.
                    image: picture,
                  };

                  client
                    // Create a new 'google user' in Sanity DB if it doesnt exist.
                    .createIfNotExists(doc)
                    // Redirection to Home route.
                    .then(() => navigate('/', { replace: true }));
                }}
                // Authorization error
                onError={() => console.log('Error')}
                // Keep using previous google authentication.
                useOneTap
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
