import { MediaCardDataType } from "@/types/mediaData"
import { apiTMDB } from "./api"
import { getGenresByIds } from "./genresServices"

interface containsImages{
    backdrop_path: string
    poster_path: string
}

export function getImagesUrlForHomeScroller(){
    return apiTMDB.get("trending/all/week").then(res => res.data.results).then(res => {
        return res.map((content: containsImages) => content.backdrop_path)
    })
}

interface MediaDataApiType {
    id: number,
    title: string | null,
    name: string | null,
    overview: string,
    backdrop_path: string,
    poster_path: string,
    media_type: string,
    genres: Array<number>,
    vote_average: number
}

export function getTrendingMovies(): Promise<MediaCardDataType[]> {
    return apiTMDB.get("trending/movie/week").then(res => res.data.results).then(res => {
        return res?.map((data: MediaDataApiType) => {
            const genresStrings = getGenresByIds(data.genres)
            return {
                id: data.id,
                title: data.name || data.title,
                overview: data.overview,
                backdrop_path: data.backdrop_path,
                poster_path: data.poster_path,
                media_type: data.media_type,
                genres: genresStrings,
                vote_average: data.vote_average
            }
        })
    })
}
