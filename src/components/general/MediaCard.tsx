import { useNavigate } from "react-router-dom";

import { FaStar } from "react-icons/fa";

import { MediaCardDataType } from "@/types/mediaData"

function getStarColorByRating(rating: number): string {
    const roundedRating = Number(rating.toFixed(1))
    if(roundedRating >= 8.5) return "violet"
    if(roundedRating >= 7.5) return "yellow"
    if(roundedRating >= 6) return "orange"
    return "red"
}

interface props {
    data: MediaCardDataType
}

function MediaCard({data}: props) {
    const navigate = useNavigate();

    return (
        <div className="hover:bg-gradient-to-r from-blue-500 to-purple-500 p-1 w-[200px] relative text-left hover:cursor-pointer" onClick={() => navigate(`/${data.media_type}/${data.id}`)}>
            <img draggable="false" src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`} alt="" className="" width={200} height={300} loading="lazy"/>
            <div className="flex pt-1">
                <FaStar size={20} color={getStarColorByRating(data.vote_average)} className="" />
                <span className="pl-1 text-white my-auto">{data.vote_average.toFixed(1)}</span>
            </div>
            <span className="text-white text-sm font-bold pl-1">{data.title}</span>
        </div>

    )
}
export default MediaCard