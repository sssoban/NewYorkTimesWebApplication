export const load = async ({fetch}) => {
    const newsRes = await fetch ('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=zzep3lI3QeKuFGjs30jE1X6QTXv1w5Yz')
    const newsData = await newsRes.json()
    const news = newsData.results
    return {
        news
    }
}