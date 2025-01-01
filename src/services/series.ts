import { SerieDataType } from "@/types/serieData"
import { apiTMDB } from "./api"
import { getGenresByIds } from "./genresServices"
import { MediaCardDataType } from "@/types/mediaData"

interface SerieDataApiType {
    id: number,
    name: string,
    overview: string,
    backdrop_path: string,
    poster_path: string,
    genres: Array<{ id: number, name: string }>,
    vote_average: number,
    first_air_date: string,
}

export function getSerieData(id: number): Promise<SerieDataType> {
    return apiTMDB.get(`tv/${id}?language=en-US`).then(res => res.data).then((data:SerieDataApiType) => {
        return {
            id: data.id,
            title: data.name,
            overview: data.overview,
            backdrop_path: data.backdrop_path,
            poster_path: data.poster_path,
            media_type: "tv",
            genres: data.genres,
            vote_average: data.vote_average,
            first_air_date: data.first_air_date,
        }
    })
}

interface RecommendedSerieDataApiType {
    id: number,
    name: string,
    overview: string,
    backdrop_path: string,
    poster_path: string,
    genres: Array<number>,
    vote_average: number,
    runtime: number
}

export function getRecommendedSeries(id: number): Promise<MediaCardDataType[]> {
    return apiTMDB.get(`tv/${id}/recommendations?language=en-US&page=1`).then(res => res.data.results).then(res => {
        return res.map((data: RecommendedSerieDataApiType) => {
            const genresStrings = getGenresByIds(data.genres)
            return {
                id: data.id,
                title: data.name,
                overview: data.overview,
                backdrop_path: data.backdrop_path,
                poster_path: data.poster_path,
                media_type: "tv",
                genres: genresStrings,
                vote_average: data.vote_average
            }
        })
    })
}