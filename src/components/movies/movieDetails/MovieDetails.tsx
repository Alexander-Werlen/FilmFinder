
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { getMovieData } from "@/services/movies"
import { useQuery } from "@tanstack/react-query"
import { FaStar } from "react-icons/fa"
import { useParams } from "react-router"
import RecommendedSection from "./RecommendedMoviesSection"


function getStarColorByRating(rating: number): string {
  const roundedRating = Number(rating.toFixed(1))
  if(roundedRating >= 8.5) return "violet"
  if(roundedRating >= 7.5) return "yellow"
  if(roundedRating >= 6) return "orange"
  return "red"
}

function MovieDetails() {
  const params = useParams()

  const { status, data } = useQuery({queryKey:["getMovieData", params.id], queryFn: async () => await getMovieData(Number(params.id))})

  return (
    <>
    {status=="success" &&
    <div className="mt-16 sm:hidden w-full">
      <div className="flex">
        <h1 className="text-white text-lg font-extrabold">{data.title} </h1>
        <FaStar size={20} color={getStarColorByRating(data.vote_average)} className="ml-6 mt-auto mb-1" />
        <span className="pl-1 text-white mt-auto text-lg font-bold">{data.vote_average.toFixed(1)}</span><span className=" mt-auto text-lg text-gray-300">/10</span>
      </div>
      <p className="text-white">{data.release_date} | {Math.floor(data.runtime/60)}h {data.runtime%60}m</p>
      <div className="flex w-full py-1 min-h-[150px]">
        <div className="w-[150px]">
          <img draggable="false" src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" loading="lazy" className="object-cover"/>
        </div>
        <div className="w-[400px]">
          <img draggable="false" src={`https://image.tmdb.org/t/p/w1280/${data.backdrop_path}`} alt="" loading="lazy" className="object-contain opacity-50"/>
        </div>
      </div>
      <div className="">
        <div className="" >
          <Separator className=""/>
          <h2 className="text-white text-md font-bold">Overview</h2>
          <p className="text-white text-xs max-w-[400px]">{data.overview}</p>
          <Separator className="mt-2"/>
          <h2 className="text-white text-md lg:text-xl font-bold">Genres</h2>
          <div className="flex pt-0">
            {data.genres.map((genre) => 
              <Button variant="ghost" size={"sm"} className="text-white text-xs lg:text-sm xl:text-base mr-2 rounded-full px-1 md:px-2 border-2 backdrop-blur" key={genre.id}>{genre.name}</Button>
            )}
          </div>
        </div>
      </div>
    </div>
    }
    <div className="w-full mt-20 hidden sm:flex overflow-hidden relative">
      <div className="sm:h-[300px] sm:w-[200px] md:h-[300px] md:w-[200px] lg:h-[450px] lg:w-[300px] xl:h-[600px] xl:w-[400px]">
        {status=="success" &&
            <img draggable="false" src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" loading="lazy" className="object-cover"/>
        }
      </div>
      <div className="">
        {status=="success" &&
          <>
          <img draggable="false" src={`https://image.tmdb.org/t/p/w1280/${data.backdrop_path}`} alt="" loading="lazy" className="sm:h-[300px] md:h-[300px] lg:h-[450px] xl:h-[600px]  absolute top-0 -z-10 opacity-30 blur-sm object-contain"/>
          <div className="pl-2" >
            <div className="flex">
              <h1 className="text-white text-xl lg:text-4xl font-extrabold">{data.title} </h1>
              <FaStar size={20} color={getStarColorByRating(data.vote_average)} className="ml-6 mt-auto mb-1" />
              <span className="pl-1 text-white mt-auto text-xl font-bold">{data.vote_average.toFixed(1)}</span><span className=" mt-auto text-xl text-gray-300">/10</span>
            </div>
            <p className="text-white">{data.release_date} | {Math.floor(data.runtime/60)}h {data.runtime%60}m</p>
            <Separator className="mt-2"/>
            <h2 className="text-white text-md lg:text-xl font-bold">Overview</h2>
            <p className="text-white text-xs lg:text-sm xl:text-base max-w-[400px] lg:max-w-[600px] xl:max-w-[800px] ">{data.overview}</p>
            <Separator className="mt-2"/>
            <h2 className="text-white text-md lg:text-xl font-bold">Genres</h2>
            <div className="flex pt-0">
              {data.genres.map((genre) => 
                <Button variant="ghost" size={"sm"} className="text-white text-xs lg:text-sm xl:text-base mr-2 rounded-full px-1 md:px-2 border-2 backdrop-blur" key={genre.id}>{genre.name}</Button>
              )}
            </div>
          </div>
          
          </>
        }
      </div>
    </div>
    <RecommendedSection />
    
    </>
  )
}

export default MovieDetails
