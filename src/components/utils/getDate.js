export const getDate = (postingDate) => {
    const date = new Date(postingDate);
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
}