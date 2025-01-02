import { getSearchByTitle } from "@/services/searchByTitle";
import { MediaCardDataType } from "@/types/mediaData";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import MediaCard from "../general/MediaCard";
import IntroductionSection from "../home/IntroductionSection";

function Search() {
  const [searchParams] = useSearchParams();
  const queryString = searchParams.get("title");

  const { status, data } = useQuery({queryKey:["searchByTitle", queryString], queryFn: () => getSearchByTitle(queryString)})


  return (
    <div>
      <IntroductionSection />
      
      {queryString != null && status == "success" && data.length == 0 &&
      <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white mt-10 text-center sm:text-left">No results for "{queryString}"</h1>
      }
      {queryString != null && status == "success" && data.length > 0 &&
      <>
      <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white mt-10 text-center sm:text-left">Results for "{queryString}"</h1>
      <div className="flex flex-wrap w-full">
        {status=="success" &&
          data.map((media: MediaCardDataType) => (
            <div className="mx-auto sm:mx-0" key={media.id}>
              <MediaCard data={media} key={media.id}/>
            </div>
          ))
        }
      </div>
      </>
        }
    </div>
  )
}

export default Search