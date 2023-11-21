import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <div>
        <Header isLoggedIn={isLoggedIn} />
        <Outlet />
      </div>
    </>
  );
}

export default App;
