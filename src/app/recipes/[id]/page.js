import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import { getDate } from '@/components/utils/getDate';
import { getSingleRecipe } from '@/components/utils/getSingleRecipe';
import Image from 'next/image';
import React from 'react';

const RecipeDetailsPage = async ({ params }) => {
    const data = await getSingleRecipe(params.id);

    return (
        <div>
            <Navbar></Navbar>
            <div className='md:flex md:justify-center md:items-center lg:gap-10 mt-5 mb-10'>
                <div className='w-2/5'>
                    <p className='text-slate-500 mb-2'>{getDate(data.postingDate)}</p>
                    <div className='flex items-center gap-4 mb-2'>
                        <h2 className='text-4xl'>{data.name}</h2>
                        <p className='bg-yellow-500 text-slate-100 text-lg font-semibold w-fit px-1 rounded-sm my-3'>{data.cuisine}</p>
                    </div>
                    <p>
                        <span className='bg-green-400 px-2 rounded-sm mr-2'>{data.category}</span>
                        <span className='bg-orange-400 px-2 rounded-sm'>{data.flavor}</span>
                    </p>
                    <h2 className='text-xl mt-5 mb-3'>Ingredients</h2>
                    {
                        data.ingredients?.map((item, index) =>
                            <span key={index} className='bg-slate-200 px-2 py-1 rounded-sm mr-3'>
                                {item}
                            </span>)
                    }
                    <h2 className='text-xl mt-5 mb-3'>Description</h2>
                    <p className='text-justify text-slate-600'>{data.description}</p>
                </div>
                <div className='relative'>
                    <Image className='rounded' src={data.image} alt='Food' width={700} height={100} />
                    <span className='absolute text-xl text-slate-200 bg-slate-800 px-6 py-1 lg:bottom-3 lg:left-3'>{data.name}</span>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RecipeDetailsPage;