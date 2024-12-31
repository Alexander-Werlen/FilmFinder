
import MediaCard from "@/components/general/MediaCard"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Skeleton } from "@/components/ui/skeleton"
import { getRecommendedMovies } from "@/services/movies"
import { MediaCardDataType } from "@/types/mediaData"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router"


function RecommendedMoviesSection() {
  const params = useParams()

  const { status: statusRecommendations, data: recommendedMoviesData } = useQuery({queryKey:["getRecommendedMoviesData", params.id], queryFn: async () => await getRecommendedMovies(Number(params.id))})
  
  return (
    <>
    <div className="pt-0">
      <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-extrabold py-3">Recommendations</h1>
      <Carousel
      opts={{
        skipSnaps: true,
        slidesToScroll: 1,
      }} 
      plugins={[
        
      ]}>
        <CarouselContent className="-ml-2">
          {
            (statusRecommendations=="success") &&
            recommendedMoviesData?.map((media: MediaCardDataType) => (
              <CarouselItem className="basis-1/8 pl-2" key={media.id}>
                <MediaCard data={media} />
              </CarouselItem>
            ))
          }
          {
            (statusRecommendations!="success") &&
            [...Array(10)].map((_, index) => (
              <Skeleton className="h-[300px] w-[200px] rounded-xl" key={index}/>
              
            ))
          }
        </CarouselContent>
        <CarouselPrevious className="opacity-10 hover:opacity-100 absolute left-4 h-16 top-[150px]" variant="ghost"/>
        <CarouselNext className="opacity-60 hover:opacity-100 absolute right-4 h-16 top-[150px]"/>
      </Carousel>
    </div>
    </>
  )
}

export default RecommendedMoviesSection
