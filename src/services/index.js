const baseURL = "https://639bf0a864fcf9c11ca6d926.mockapi.io/movie";

export const get = async (url) => {
    try {
        const response = await fetch(`${baseURL}`);
        return await response.json();
    } catch(error) {
        console.log("error", error);
    }
};