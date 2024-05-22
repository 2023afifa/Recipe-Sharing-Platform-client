import Link from 'next/link';
import { getAllRecipes } from '../utils/getAllRecipes';
import FeaturedRecipe from './FeaturedRecipe';

const FeaturedRecipes = async () => {
    const data = await getAllRecipes();
    console.log(data);

    const featuredItems = data.slice(0, 4);

    return (
        <div className="my-14">
            <h3 className="text-3xl font-medium mb-5">Recipe Blogs</h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5'>
                {
                    featuredItems?.map((item) => <FeaturedRecipe key={item.id} item={item}></FeaturedRecipe>)
                }
            </div>
            <div className='text-center'>
                <Link href="/recipes">
                    <button className='bg-slate-800 text-slate-200 px-5 py-2 rounded'>See All Recipes</button>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedRecipes;