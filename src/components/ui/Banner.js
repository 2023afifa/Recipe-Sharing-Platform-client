import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className='relative'>
            <Image className='mx-auto rounded-2xl' src="https://i.ibb.co/pbdq9ZD/pexels-catscoming-674574.jpg" alt='banner' width={1400} height={500} />
            <div className='absolute lg:top-40 max-w-lg lg:ml-10'>
                <h1 className='lg:text-6xl text-slate-200 font-semibold mb-5'>Experience the Magic of Home-Cooked Meals: Delicious Recipes for Every Occasion</h1>
                <button className='bg-slate-200 text-lg font-medium px-5 py-2 rounded'>View Recipes Now</button>
            </div>
        </div>
    );
};

export default Banner;