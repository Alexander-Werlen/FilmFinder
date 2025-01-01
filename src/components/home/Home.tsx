import IntroductionSection from "./IntroductionSection"
import PopularMoviesSection from "./PopularMoviesSection"
import PopularSeriesSection from "./PopularSeriesSection"
import TopRatedMoviesSection from "./TopRatedMoviesSection"
import TopRatedSeriesSection from "./TopRatedSeries"
import TrendingSection from "./TrendingSection"



function Home() {
  return (
    <>
    <IntroductionSection />
    <TopRatedMoviesSection />
    <TopRatedSeriesSection />
    <TrendingSection />
    <PopularMoviesSection />
    <PopularSeriesSection />
    </>
  )
}

export default Home
