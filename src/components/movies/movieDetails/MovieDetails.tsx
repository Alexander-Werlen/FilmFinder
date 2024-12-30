
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { getMovieData } from "@/services/movies"
import { useQuery } from "@tanstack/react-query"
import { FaStar } from "react-icons/fa"
import { useParams } from "react-router"

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
    <div className="mt-16 sm:hidden">
      Mobile
    </div>
    <div className="w-full mt-20 hidden sm:flex">
      <div className="">
        {status=="success" &&
            <img draggable="false" src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" loading="lazy" className="h-[150px] sm:h-[250px] lg:h-[400px] xl:h-[500px]"/>
          }
          {
            status!="success" &&
            <Skeleton className="w-[400px] h-[500px]"/>
          }
      </div>
      <div className="">
        {status=="success" &&
          <>
          <img draggable="false" src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} alt="" loading="lazy" className="h-[150px] sm:h-[250px] lg:h-[400px] xl:h-[500px] absolute top-20 -z-10 opacity-30 blur-sm"/>
          <div className="pl-2" >
            <div className="flex">
              <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-extrabold">{data.title} </h1>
              <FaStar size={25} color={getStarColorByRating(data.vote_average)} className="ml-6 mt-auto mb-1" />
              <span className="pl-1 text-white mt-auto text-xl">{data.vote_average.toFixed(1)}</span>
            </div>
            <p className="text-white">{data.release_date} | {Math.floor(data.runtime/60)}h {data.runtime%60}m</p>
            <Separator className="mt-2"/>
            <h2 className="text-white text-lg md:text-xl lg:text-2xl font-bold">Overview</h2>
            <p className="text-white text-xs lg:text-sm xl:text-base max-w-[400px] lg:max-w-[600px] xl:max-w-[800px] ">{data.overview}</p>
            <Separator className="mt-2"/>
            <h2 className="text-white text-lg md:text-xl lg:text-2xl font-bold">Genres</h2>
            <div className="flex pt-1">
              {data.genres.map((genre) => 
                <Button variant="ghost" className="text-white text-xs lg:text-sm xl:text-base mr-2 rounded-full px-1 md:px-2 border-2 backdrop-blur">{genre.name}</Button>
              )}
            </div>
          </div>
          </>
        }
        {
          status!="success" &&
          <Skeleton className="absolute"/>
        }
      </div>
    </div>
    </>
  )
}

export default MovieDetails
