import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import {getTrendingMedia} from "../../services/home"
import { useQuery } from "@tanstack/react-query"
import { MediaCardDataType } from "@/types/mediaData"
import MediaCard from "../general/MediaCard.tsx"
import { Skeleton } from "../ui/skeleton.tsx"

function IntroductionSection() {
  const { status, data: trendingShowsData } = useQuery({queryKey:["getTrendingMoviesData"], queryFn: getTrendingMedia})

  return (
    <div className="pt-6 sm:pt-12">
      <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-extrabold py-3">Trending</h1>
      <Carousel
      opts={{
        skipSnaps: true,
        slidesToScroll: 1,
      }} 
      plugins={[
        
      ]}>
        <CarouselContent className="-ml-2">
          {
            (status=="success") &&
            trendingShowsData?.map((media: MediaCardDataType) => (
              <CarouselItem className="basis-1/8 pl-2" key={media.id}>
                <MediaCard data={media} />
              </CarouselItem>
            ))
          }
          {
            (status!="success") &&
            [...Array(10)].map((_, index) => (
              <Skeleton className="h-[300px] w-[200px] rounded-xl" key={index}/>
              
            ))
          }
        </CarouselContent>
        <CarouselPrevious className="opacity-10 hover:opacity-100 absolute left-4 h-16 top-[150px]" variant="ghost"/>
        <CarouselNext className="opacity-60 hover:opacity-100 absolute right-4 h-16 top-[150px]"/>
      </Carousel>
    </div>
  )
}

export default IntroductionSection
