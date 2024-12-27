import { MediaCardDataType } from "@/types/mediaData"

interface props {
    data: MediaCardDataType
}

function MediaCard({data}: props) {

    return (
        <div className="hover:bg-gradient-to-r from-blue-500 to-purple-500 p-1">
        <img draggable="false" src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`} alt="" className="" width={200}/>
        </div>
    )
}
export default MediaCard