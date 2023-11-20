import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';

function App() {
  // Moved this to it's own file in the component's folder
  // const currentPage = useLocation().pathname;
  // console.log(currentPage);

  return (
    <>
      <div>
        <Header />
        {/* <Navbar page={currentPage} /> */}
        <Outlet />
      </div>
    </>
  );
}

export default App;
