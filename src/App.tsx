import { Route, Routes, useLocation } from "react-router-dom"
import NavBar from "./components/general/NavBar"
import Home from "./components/home/Home.tsx"
import MovieDetails from "./components/movies/movieDetails/MovieDetails.tsx"
import { useEffect } from "react";
import SerieDetails from "./components/series/serieDetails/serieDetails.tsx";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <>
    <header>
      <NavBar />
    </header>
    <div className="container mx-auto p-2 pt-0">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/otro" element={<p>Otro</p>} />
        <Route path="/search" element={<p>Search</p>} />
        <Route path="/movie/" element={<p>Movies search</p>} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/tv/" element={<p>series search</p>} />
        <Route path="/tv/:id" element={<SerieDetails />} />
      </Routes>
    </div>
    </>
  )
}

export default App
