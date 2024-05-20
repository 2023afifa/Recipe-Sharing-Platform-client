import { getAllRecipes } from "../utils/getAllRecipes";

const Recipes = async () => {
    const { data } = await getAllRecipes();

    const featuredItems = data.slice(0, 3);

    return (
        <div className="my-14">
            <h3 className="text-3xl font-medium">Recipe Blogs</h3>
            <div>
                {
                    featuredItems?.map()
                }
            </div>
        </div>
    );
};

export default Recipes;