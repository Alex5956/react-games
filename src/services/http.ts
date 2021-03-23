export const getReleased = async (page: number, pageSize: number) => {
    let response = await fetch(`https://api.rawg.io/api/games?ordering=released&page=${page}&page_size=${pageSize}`);
    let result = await response.json();
    return result.results;
}

export const getRating = async (page: number, pageSize: number) => {
    let response = await fetch(`https://api.rawg.io/api/games?ordering=rating-released&page=${page}&page_size=${pageSize}`);
    let result = await response.json();
    return result.results.sort(compare);
}

export const getOneGame = async (id: number) => {
    let response = await fetch(`https://api.rawg.io/api/games/${id}`);
    return await response.json();
}

function compare( a: any, b: any ) {
    if ( a.rating > b.rating ){
        return -1;
    }
    if ( a.rating < b.rating ){
        return 1;
    }
    return 0;
}
//
// export const getBest = async (page: number, pageSize: number) => {
//     let response = await fetch(`https://api.rawg.io/api/games?ordering=metacritic-released&page=${page}&page_size=${pageSize}`);
//     let result = await response.json();
//     return result.results;
// }
// export const getByPlatorm = async (page: number, pageSize: number) => {
//     let response = await fetch(`https://api.rawg.io/api/games?ordering=rating-released&page=${page}&page_size=${pageSize}`);
//     let result = await response.json();
//     return result.results;
// }
export const searchGame = async (txt: string, page?: number, pageSize?: number) => {
    let params = ''
    if (page){
        params = 'page=' + page
    }
    if (pageSize){
        params = 'page_size=' + pageSize
    }
    if (params){
        params = '&' + params;
    }
    let response = await fetch(`https://api.rawg.io/api/games?search=${txt}&search_precise=true${params}`);
    let result = await response.json();
    return result.results;
}
