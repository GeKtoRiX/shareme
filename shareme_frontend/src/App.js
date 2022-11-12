import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Routes, Route, } from 'react-router-dom'; /* useNavigate  */
import Login from './components/Login';
import Home from './container/Home';
function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
      <div className='App'>
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='/*' element={<Home />} />
        </Routes>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
