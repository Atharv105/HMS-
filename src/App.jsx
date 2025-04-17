import React from 'react';
import LoginPage from './LoginPage';
import Home from './Home.jsx'
import Navbar from './Navbar.jsx'
import Foot from './Foot.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <LoginPage/> */}
      <Home/>
      <Foot/>
      
    </div>
  );
};

export default App;
