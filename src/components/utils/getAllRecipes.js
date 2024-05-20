export const getAllRecipes = async () => {
    const res = await fetch("http://localhost:5000/recipes", {
        next: {
            revalidate: 30,
        }
    })
    const data = await res.json();
    return data;
}