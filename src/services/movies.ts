import { MovieDataType } from "@/types/movieData"
import { apiTMDB } from "./api"

interface MovieDataApiType {
    id: number,
    title: string | null,
    overview: string,
    backdrop_path: string,
    poster_path: string,
    genres: Array<{ id: number, name: string }>,
    vote_average: number,
    release_date: string,
    runtime: number
}

export function getMovieData(id: number): Promise<MovieDataType> {
    return apiTMDB.get(`movie/${id}`).then(res => res.data).then((data:MovieDataApiType) => {
        return {
            id: data.id,
            title: data.title,
            overview: data.overview,
            backdrop_path: data.backdrop_path,
            poster_path: data.poster_path,
            media_type: "movie",
            genres: data.genres,
            vote_average: data.vote_average,
            release_date: data.release_date,
            runtime: data.runtime
        }
    })
}
