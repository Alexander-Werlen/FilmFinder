import { MovieDataType } from "@/types/movieData"
import { apiTMDB } from "./api"
import { getGenresByIds } from "./genresServices"
import { MediaCardDataType } from "@/types/mediaData"

interface MovieDataApiType {
    id: number,
    title: string,
    overview: string,
    backdrop_path: string,
    poster_path: string,
    genres: Array<{ id: number, name: string }>,
    vote_average: number,
    release_date: string,
    runtime: number
}

export function getMovieData(id: number): Promise<MovieDataType> {
    return apiTMDB.get(`movie/${id}?language=en-US`).then(res => res.data).then((data:MovieDataApiType) => {
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

interface RecommendedMovieDataApiType {
    id: number,
    title: string,
    overview: string,
    backdrop_path: string,
    poster_path: string,
    genres: Array<number>,
    vote_average: number,
    release_date: string,
    runtime: number
}

export function getRecommendedMovies(id: number): Promise<MediaCardDataType[]> {
    return apiTMDB.get(`movie/${id}/recommendations?language=en-US&page=1`).then(res => res.data.results).then(res => {
        return res.map((data: RecommendedMovieDataApiType) => {
            const genresStrings = getGenresByIds(data.genres)
            return {
                id: data.id,
                title: data.title,
                overview: data.overview,
                backdrop_path: data.backdrop_path,
                poster_path: data.poster_path,
                media_type: "movie",
                genres: genresStrings,
                vote_average: data.vote_average
            }
        })
    })
}
