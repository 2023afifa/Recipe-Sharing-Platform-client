import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import Banner from '@/components/ui/Banner';
import Recipes from '@/components/ui/Recipes';
import React from 'react';

const HomePage = () => {
  return (
    <div className='lg:mx-20'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Recipes></Recipes>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;