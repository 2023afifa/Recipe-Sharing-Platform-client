import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div className='relative'>
            <Image className='mx-auto rounded-2xl' src="https://i.ibb.co/pbdq9ZD/pexels-catscoming-674574.jpg" alt='banner' width={1400} height={500} />
            <div className='absolute top-10 md:top-20 lg:top-40 max-w-xs md:max-w-md lg:max-w-lg ml-3 lg:ml-10'>
                <h1 className='text-2xl md:text-4xl lg:text-6xl text-slate-200 font-semibold mb-5'>Experience the Magic of Home-Cooked Meals: Delicious Recipes for Every Occasion</h1>
                <Link href="/recipes">
                    <button className='bg-slate-200 text-lg font-medium px-2 py-1 md:px-5 md:py-2 rounded'>View Recipes Now</button>
                </Link>
            </div>
        </div>
    );
};

export default Banner;