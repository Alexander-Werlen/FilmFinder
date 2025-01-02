import { MediaCardDataType } from "@/types/mediaData"
import { apiTMDB } from "./api"
import { getGenresByIds } from "./genresServices"

interface MediaDataApiType {
    id: number,
    title: string | null,
    name: string | null,
    overview: string,
    backdrop_path: string,
    poster_path: string,
    media_type: string,
    genres: Array<number>,
    vote_average: number,
    vote_count: number
}

export function getSearchByTitle(rawQuery: string | null): Promise<MediaCardDataType[]> {
    if(rawQuery === null) return Promise.resolve([])
    const query = rawQuery.replace(/ /g, '%20')

    return apiTMDB.get(`/search/multi?query=${query}&include_adult=false&language=en-US&page=1`).then(res => res.data.results)
    .then(res => res.filter((media:MediaDataApiType) => media.vote_count > 100))
    .then(res => {
        return res.map((data: MediaDataApiType) => {
            const genresStrings = getGenresByIds(data.genres)
            return {
                id: data.id,
                title: data.name || data.title,
                overview: data.overview,
                backdrop_path: data.backdrop_path,
                poster_path: data.poster_path,
                media_type: data.media_type,
                vote_average: data.vote_average,
                genres: genresStrings
            }
        })
    })
}