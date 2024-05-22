export const getAllRecipes = async () => {
    const res = await fetch("https://recipesharingserver.vercel.app/recipes", {
        next: {
            revalidate: 30,
        }
    })
    const data = await res.json();
    return data;
}