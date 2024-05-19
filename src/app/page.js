import Navbar from '@/components/shared/Navbar';
import Banner from '@/components/ui/Banner';
import React from 'react';

const HomePage = () => {
  return (
    <div className='lg:mx-20'>
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
};

export default HomePage;