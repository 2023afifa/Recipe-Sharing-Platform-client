import Link from "next/link";

const Navbar = () => {
    return (
        <div>
            <div className="navbar lg:gap-28">
                <h2 className="text-3xl font-bold">RecipeNest</h2>
                <div className="md:hidden flex flex-grow justify-end">
                    <div className="dropdown navLink">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content right-3 z-[1] p-1 shadow bg-base-100 rounded-box w-28">
                            <li><Link href={"/"}>Home</Link></li>
                            <li><Link href={"/recipes"}>All Recipes</Link></li>
                            <li><Link href={"/"}>Add Your Recipe</Link></li>
                            <li><Link href={"/"}>About</Link></li>
                            <li><Link href={"/"}>Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-end hidden md:flex w-full">
                    <div className="flex-none navLink">
                        <ul className="menu menu-horizontal px-1 lg:text-lg font-medium space-x-10">
                            <li><Link href={"/"}>Home</Link></li>
                            <li><Link href={"/recipes"}>All Recipes</Link></li>
                            <li><Link href={"/"}>Add Your Recipe</Link></li>
                            <li><Link href={"/"}>About</Link></li>
                            <li><Link href={"/"}>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;