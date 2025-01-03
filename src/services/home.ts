import { MediaCardDataType } from "@/types/mediaData"
import { apiTMDB } from "./api"

interface containsImages{
    backdrop_path: string
    poster_path: string
}

export function getImagesUrlForHomeScroller(){
    return apiTMDB.get("trending/all/week").then(res => res.data.results).then(res => {
        return res.map((content: containsImages) => content.backdrop_path).slice(0, 5)
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
    vote_average: number,
    vote_count: number
}

export function getTrendingMedia(): Promise<MediaCardDataType[]> {
    return apiTMDB.get("trending/all/week").then(res => res.data.results).then(list => list.filter((media:MediaDataApiType) => media.vote_count > 10))
    .then(res => {
        return res.map((data: MediaDataApiType) => {
            return {
                id: data.id,
                title: data.name || data.title,
                overview: data.overview,
                backdrop_path: data.backdrop_path,
                poster_path: data.poster_path,
                media_type: data.media_type,
                vote_average: data.vote_average
            }
        })
    })
}

export function getPopularMovies(): Promise<MediaCardDataType[]> {
    return apiTMDB.get("discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc").then(res => res.data.results)
    .then(list => list.filter((media:MediaDataApiType) => media.vote_count > 10))
    .then(res => {
        return res?.map((data: MediaDataApiType) => {
            return {
                id: data.id,
                title: data.title,
                overview: data.overview,
                backdrop_path: data.backdrop_path,
                poster_path: data.poster_path,
                media_type: "movie",
                vote_average: data.vote_average
            }
        })
    })
}

export function getPopularSeries(): Promise<MediaCardDataType[]> {
    return apiTMDB.get("/tv/popular?language=en-US&page=1").then(res => res.data.results)
    .then(list => list.filter((media:MediaDataApiType) => media.vote_count > 10))
    .then(res => {
        return res?.map((data: MediaDataApiType) => {
            return {
                id: data.id,
                title: data.name,
                overview: data.overview,
                backdrop_path: data.backdrop_path,
                poster_path: data.poster_path,
                media_type: "tv",
                vote_average: data.vote_average
            }
        })
    })
}

export function getTopRatedSeries(): Promise<MediaCardDataType[]> {
    return apiTMDB.get("/tv/top_rated?language=en-US&page=1").then(res => res.data.results)
    .then(res => {
        return res?.map((data: MediaDataApiType) => {
            return {
                id: data.id,
                title: data.name,
                overview: data.overview,
                backdrop_path: data.backdrop_path,
                poster_path: data.poster_path,
                media_type: "tv",
                vote_average: data.vote_average
            }
        })
    })
}

export function getTopRatedMovies(): Promise<MediaCardDataType[]> {
    return apiTMDB.get("/movie/top_rated?language=en-US&page=1").then(res => res.data.results)
    .then(res => {
        return res?.map((data: MediaDataApiType) => {
            return {
                id: data.id,
                title: data.title,
                overview: data.overview,
                backdrop_path: data.backdrop_path,
                poster_path: data.poster_path,
                media_type: "movie",
                vote_average: data.vote_average
            }
        })
    })
}
