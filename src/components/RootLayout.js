import { Outlet, useLocation } from 'react-router-dom';
import React from 'react';
import NavBar from './NavBarPanel';
import { Provider } from 'react-redux';
import store from '../store/store';
import { useState } from 'react';

const RootLayout = () => {
  const location = useLocation();

  
  const hideNavbarRoutes = ["/Login", "/Register"];

  const [results, setResults] = useState([]);

  return (
    <>
      <Provider store={store}>
       
        {!hideNavbarRoutes.includes(location.pathname) && <NavBar setResults={setResults}/>}

        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
};

export default RootLayout;
