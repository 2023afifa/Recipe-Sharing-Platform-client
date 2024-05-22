import Image from "next/image";
import { getDate } from "../utils/getDate";

const FeaturedRecipe = ({ item }) => {
    return (
        <div className="rounded-md border-2 border-slate-200 mx-auto">
            <div className="relative">
                <Image className="h-[230px]" src={item.image} alt="Food" width={400} height={50} />
                <div className="absolute bg-slate-200 text-lg rounded-sm px-5 py-1 left-40 md:left-32 lg:left-28 -bottom-5">Recipes</div>
            </div>
            <h2 className="text-xl font-medium mt-8 mb-3 text-center">{item.name}</h2>
        </div>
    );
};

export default FeaturedRecipe;