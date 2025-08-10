import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../Component/Navbar';
import Loader from '../Component/Loader';
import Footer from '../Component/Footer/Footer';

const Root = () => {
  const navigation = useNavigation();

  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-700">
      
      <Navbar />

    
      <main className="flex-1">
        {navigation.state === 'loading' ? <Loader /> : <Outlet />}
      </main>

      
      <Footer />
    </div>
  );
};

export default Root;
