import Image from "next/image";
import { getDate } from "../utils/getDate";

const RecipeCard = ({ item }) => {
    return (
        <div className="flex gap-2 bg-slate-100 rounded shadow-sm h-[180px]">
            <Image className="h-[180px] w-[220px]" src={item.image} alt="Food" width={250} height={50} />
            <div className="m-2">
                <p className="text-sm text-slate-500">{getDate(item.postingDate)}</p>
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-slate-600">
                    {
                        item.description.length > 120 ? item.description.slice(0, 120) + "..." : item.description
                    }
                </p>
                <button className="bg-slate-800 text-slate-200 py-1 px-3 rounded-sm mt-2">Continue Reading</button>
            </div>
        </div>
    );
};

export default RecipeCard;