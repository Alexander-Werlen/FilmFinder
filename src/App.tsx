import { Route, Routes, useLocation } from "react-router-dom"
import NavBar from "./components/general/NavBar"
import Home from "./components/home/Home.tsx"
import MovieDetails from "./components/movies/movieDetails/MovieDetails.tsx"
import { useEffect } from "react";
import SerieDetails from "./components/series/serieDetails/SerieDetails.tsx";
import Search from "./components/search/Search.tsx";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <>
    <NavBar />
    <div className="container mx-auto p-2 pt-0 sm:px-0">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/tv/:id" element={<SerieDetails />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
    </>
  )
}

export default App
