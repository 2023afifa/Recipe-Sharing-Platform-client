"use client";

import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import RecipeCard from '@/components/ui/RecipeCard';
import { getAllRecipes } from '@/components/utils/getAllRecipes';
import { useEffect, useState } from 'react';

const RecipesPage = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const result = await getAllRecipes();
            setData(result);
            setFilteredData(result)
        };
        fetchData();
    }, []);


    useEffect(() => {
        const searchItem = data.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredData(searchItem);
    }, [searchTerm, data]);


    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-screen mt-5'>
                <div className='flex justify-center items-center gap-5 mb-10'>
                    <h2 className='text-2xl'>Search Recipes Here</h2>
                    <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} type="text" placeholder="Type here" className="input input-bordered border-slate-700 w-full max-w-md" />
                </div>

                <div className='flex justify-between mb-10'>
                    <div className='w-1/6'>
                        <h2>Filter</h2>
                    </div>
                    <div className='w-4/5 grid lg:grid-cols-2 gap-5'>
                        {
                            filteredData?.map((item) => <RecipeCard key={item.id} item={item}></RecipeCard>)
                        }
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RecipesPage;