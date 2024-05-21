export const getSingleRecipe = async (id) => {
    const res = await fetch(`http://localhost:5000/recipes/${id}`, {
        cache: "no-store",
    })
    const data = await res.json();
    return data;
}