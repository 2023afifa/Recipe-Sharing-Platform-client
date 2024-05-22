import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import Banner from '@/components/ui/Banner';
import FeaturedRecipes from '@/components/ui/FeaturedRecipes';
import Follow from '@/components/ui/Follow';
import Recipes from '@/components/ui/Recipes';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <FeaturedRecipes></FeaturedRecipes>
      <div className='-mx-2 md:-mx-5 lg:-mx-20'>
        <Follow></Follow>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;