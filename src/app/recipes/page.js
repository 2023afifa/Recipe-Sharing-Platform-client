"use client";

import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import FilterItem from '@/components/ui/FilterItem';
import RecipeCard from '@/components/ui/RecipeCard';
import { getAllRecipes } from '@/components/utils/getAllRecipes';
import { useEffect, useState } from 'react';

const RecipesPage = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({ category: [], flavor: [], cuisine: [] });

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


    useEffect(() => {
        let filtered = data;
        if (filters.category.length > 0) {
            filtered = filtered.filter(item => filters.category.includes(item.category));
        }
        if (filters.flavor.length > 0) {
            filtered = filtered.filter(item => filters.flavor.includes(item.flavor));
        }
        if (filters.cuisine.length > 0) {
            filtered = filtered.filter(item => filters.cuisine.includes(item.cuisine));
        }
        setFilteredData(filtered);
    }, [filters, data]);


    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-screen mt-5'>
                <div className='flex justify-center items-center gap-5 mb-10'>
                    <h2 className='text-lg md:text-2xl'>Search Recipes Here</h2>
                    <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} type="text" placeholder="Type here" className="input input-bordered border-slate-700 w-full max-w-md" />
                </div>

                <div className='flex justify-between mb-10'>
                    <div className='w-1/6'>
                        <FilterItem filters={filters} setFilters={setFilters}></FilterItem>
                    </div>
                    {
                        filteredData.length === 0 ?
                            <>
                                <h2 className='w-full text-center text-xl lg:pt-20'>No Items Found</h2>
                            </>
                            :
                            <div className='w-4/5 grid lg:grid-cols-2 gap-5'>
                                {
                                    filteredData?.map((item) => <RecipeCard key={item.id} item={item}></RecipeCard>)
                                }
                            </div>
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RecipesPage;