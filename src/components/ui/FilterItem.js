import React from 'react';

const FilterItem = ({ filters, setFilters }) => {

    const handleCheckboxChange = (e, category) => {
        const { checked, value } = e.target;
        setFilters((prevFilters) => {
            const updatedCategory = checked ? [...prevFilters[category], value] : prevFilters[category].filter((item) => item !== value);
            return { ...prevFilters, [category]: updatedCategory };
        });
    };

    return (
        <div className=''>
            <span className='text-xl bg-lime-400 md:px-3 rounded-sm'>Choose Yours</span>
            <div className='my-5'>
                <span className='text-lg bg-slate-800 text-slate-200 px-2 rounded-sm'>Category</span>
                <div className='my-2 flex gap-2'>
                    <input value="Veg" onChange={(e) => handleCheckboxChange(e, 'category')} type="checkbox" className="checkbox" />
                    <p>Veg</p>
                </div>
                <div className='my-2 flex gap-2'>
                    <input value="Non-Veg" onChange={(e) => handleCheckboxChange(e, 'category')} type="checkbox" className="checkbox" />
                    <p>Non-Veg</p>
                </div>
            </div>
            <div className='my-5'>
                <span className='text-lg bg-slate-800 text-slate-200 px-2 rounded-sm'>Flavor</span>
                <div className='my-2 flex gap-2'>
                    <input value="Spicy" onChange={(e) => handleCheckboxChange(e, 'flavor')} type="checkbox" className="checkbox" />
                    <p>Spicy</p>
                </div>
                <div className='my-2 flex gap-2'>
                    <input value="Sweet" onChange={(e) => handleCheckboxChange(e, 'flavor')} type="checkbox" className="checkbox" />
                    <p>Sweet</p>
                </div>
                <div className='my-2 flex gap-2'>
                    <input value="Savory" onChange={(e) => handleCheckboxChange(e, 'flavor')} type="checkbox" className="checkbox" />
                    <p>Savory</p>
                </div>
            </div>
            <div className='my-5'>
                <span className='text-lg bg-slate-800 text-slate-200 px-2 rounded-sm'>Cuisine</span>
                <div className='my-2 flex gap-2'>
                    <input value="Italian" onChange={(e) => handleCheckboxChange(e, 'cuisine')} type="checkbox" className="checkbox" />
                    <p>Italian</p>
                </div>
                <div className='my-2 flex gap-2'>
                    <input value="American" onChange={(e) => handleCheckboxChange(e, 'cuisine')} type="checkbox" className="checkbox" />
                    <p>American</p>
                </div>
                <div className='my-2 flex gap-2'>
                    <input value="Mexican" onChange={(e) => handleCheckboxChange(e, 'cuisine')} type="checkbox" className="checkbox" />
                    <p>Mexican</p>
                </div>
                <div className='my-2 flex gap-2'>
                    <input value="Indian" onChange={(e) => handleCheckboxChange(e, 'cuisine')} type="checkbox" className="checkbox" />
                    <p>Indian</p>
                </div>
                <div className='my-2 flex gap-2'>
                    <input value="Chinese" onChange={(e) => handleCheckboxChange(e, 'cuisine')} type="checkbox" className="checkbox" />
                    <p>Chinese</p>
                </div>
                <div className='my-2 flex gap-2'>
                    <input value="Thai" onChange={(e) => handleCheckboxChange(e, 'cuisine')} type="checkbox" className="checkbox" />
                    <p>Thai</p>
                </div>
                <div className='my-2 flex gap-2'>
                    <input value="Middle Eastern" onChange={(e) => handleCheckboxChange(e, 'cuisine')} type="checkbox" className="checkbox" />
                    <p>Middle Eastern</p>
                </div>
                <div className='my-2 flex gap-2'>
                    <input value="Greek" onChange={(e) => handleCheckboxChange(e, 'cuisine')} type="checkbox" className="checkbox" />
                    <p>Greek</p>
                </div>
                <div className='my-2 flex gap-2'>
                    <input value="British" onChange={(e) => handleCheckboxChange(e, 'cuisine')} type="checkbox" className="checkbox" />
                    <p>British</p>
                </div>
                <div className='my-2 flex gap-2'>
                    <input value="International" onChange={(e) => handleCheckboxChange(e, 'cuisine')} type="checkbox" className="checkbox" />
                    <p>International</p>
                </div>
            </div>
        </div>
    );
};

export default FilterItem;