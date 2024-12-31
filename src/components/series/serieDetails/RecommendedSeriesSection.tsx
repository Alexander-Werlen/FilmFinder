
import MediaCard from "@/components/general/MediaCard"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Skeleton } from "@/components/ui/skeleton"
import { getRecommendedSeries } from "@/services/series"
import { MediaCardDataType } from "@/types/mediaData"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router"


function RecommendedSeriesSection() {
  const params = useParams()

  const { status: statusRecommendations, data: recommendedSeriesData } = useQuery({queryKey:["getRecommendedSeriesData", params.id], queryFn: async () => await getRecommendedSeries(Number(params.id))})
  
  return (
    <>
    <div className="pt-0">
      <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-extrabold py-3">Similar series</h1>
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
            recommendedSeriesData?.map((media: MediaCardDataType) => (
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

export default RecommendedSeriesSection
