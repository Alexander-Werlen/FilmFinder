export type MovieDataType = {
    id: number,
    title: string | null,
    overview: string,
    backdrop_path: string,
    poster_path: string,
    media_type: "movie",
    genres: Array<{ id: number, name: string }>,
    vote_average: number,
    release_date: string,
    runtime: number
}