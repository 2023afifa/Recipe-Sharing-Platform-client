import Image from "next/image";
import { getDate } from "../utils/getDate";
import Link from "next/link";

const RecipeCard = ({ item }) => {
    return (
        <div className="flex gap-2 bg-slate-100 rounded shadow-sm h-[180px]">
            <Image className="h-[180px] w-[120px] md:w-[220px]" src={item.image} alt="Food" width={250} height={50} />
            <div className="m-2">
                <p className="text-sm text-slate-500">{getDate(item.postingDate)}</p>
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-slate-600 text-sm md:text-base">
                    {
                        item.description.length > 120 ? item.description.slice(0, 120) + "..." : item.description
                    }
                </p>
                <Link href={`/recipes/${item._id}`}>
                    <button className="bg-slate-800 text-slate-200 py-1 px-3 rounded-sm mt-2">Continue Reading</button>
                </Link>
            </div>
        </div>
    );
};

export default RecipeCard;