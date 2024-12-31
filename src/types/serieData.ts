export interface SerieDataType {
    id: number,
    title: string,
    overview: string,
    backdrop_path: string,
    poster_path: string,
    media_type: "tv",
    genres: Array<{ id: number, name: string }>,
    vote_average: number,
    first_air_date: string,
}
