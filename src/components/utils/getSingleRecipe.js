export const getSingleRecipe = async (id) => {
    const res = await fetch(`https://recipesharingserver.vercel.app/recipes/${id}`, {
        cache: "no-store",
    })
    const data = await res.json();
    return data;
}