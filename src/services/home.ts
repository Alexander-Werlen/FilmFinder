import { apiTMDB } from "./api"

interface containsImages{
    backdrop_path: string
    poster_path: string
}

export function getImagesUrlForHomeScroller(){
    return apiTMDB.get("trending/all/week").then(res => res.data.results).then(res => {
        return res.map((content: containsImages) => content.backdrop_path)
    })
}