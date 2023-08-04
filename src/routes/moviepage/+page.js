export const load = async ({fetch}) => {
    const movieRes = await fetch ('https://api.nytimes.com/svc/movies/v2/reviews/picks.json?order=by-opening-date&api-key=zzep3lI3QeKuFGjs30jE1X6QTXv1w5Yz')
    const movieData = await movieRes.json()
    const movies = movieData.results
    return {
        movies
    }
}