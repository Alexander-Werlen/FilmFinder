import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel"
import {getImagesUrlForHomeScroller} from "../../services/home"
import { useQuery } from "@tanstack/react-query"
import Autoplay from "embla-carousel-autoplay"

function Home() {
  const { data: urls} = useQuery({queryKey:["imagesUrlsForHomeScroller"], queryFn: getImagesUrlForHomeScroller})

  return (
    <div className="mt-20">
      <div className="absolute z-20 w-full left-0 right-0 flex">
        <div className="mx-auto">
          <h1 className="text-white text-2xl md:text-3xl lg:text-5xl font-extrabold">Find your next movies and series</h1>
        </div>
      </div>
      <Carousel
      opts={{loop: true, watchDrag:false, align: "start"}} 
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}>
        <CarouselContent>
          {
            urls?.map((url: string) => (
              <CarouselItem className="max-w-90 opacity-50 px-0 mx-0 basis-1/2 md:basis-1/3 lg:basis-1/4" key={url}>
                <img draggable="false" src={`https://image.tmdb.org/t/p/w500/${url}`} alt="" />
              </CarouselItem>
            ))
          }
        </CarouselContent>
      </Carousel>
      <span>ABAJO</span>
    </div>
  )
}

export default Home
