import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel"
import {getImagesUrlForHomeScroller} from "../../services/home"
import { useQuery } from "@tanstack/react-query"
import Autoplay from "embla-carousel-autoplay"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

function Home() {
  const { data: urls} = useQuery({queryKey:["imagesUrlsForHomeScroller"], queryFn: getImagesUrlForHomeScroller})

  return (
    <div className="mt-20">
      <div className="absolute z-20 mx-auto w-10/12 sm:w-full left-0 right-0 flex">
        <div className="mx-auto mt-8 md:mt-2 lg:mt-0 xl:mt-5 2xl:mt-10">
          <h1 className="text-white text-2xl md:text-3xl lg:text-5xl font-extrabold">Find your next movies and series</h1>
          <Input placeholder="Search by title..." className="bg-white mt-5 rounded-full"/>
          <div className="w-full text-center">
            <Button variant="default" className="text-white text-2xl mt-2 bg-transparent rounded-full hover:bg-violet-700">Search</Button>
          </div>
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
              <CarouselItem className="max-w-90 opacity-30 px-0 mx-0 sm:basis-1/2 md:basis-1/3 lg:basis-1/4" key={url}>
                <img draggable="false" src={`https://image.tmdb.org/t/p/w500/${url}`} alt="" className="blur-sm"/>
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
