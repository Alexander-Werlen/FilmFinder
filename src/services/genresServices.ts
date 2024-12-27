import { apiTMDB } from "./api"


const genresById: Record<number, string> = {}
const idsByGenre: Record<string, number> = {}


interface GenreData{id: number, name: string}

function initializeData(){
    return apiTMDB.get("genre/movie/list").then(res=> {
        res.data.genres.forEach((genre: GenreData) => {
            genresById[genre.id] = genre.name
            idsByGenre[genre.name] = genre.id
        })
    }).then(() => {
        return apiTMDB.get("genre/tv/list")
    }).then(res=> {
        res.data.genres.forEach((genre: GenreData) => {
            genresById[genre.id] = genre.name
            idsByGenre[genre.name] = genre.id
        })
    }).catch(() => console.log("No se pudieron cargar generos"))
}


export function getGenresByIds(ids: number[]) {
    initializeData().then(() => {
        return ids?.map(id => genresById[id])
    })
}