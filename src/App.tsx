import { Route, Routes } from "react-router-dom"
import NavBar from "./components/general/NavBar"
import Home from "./components/home/Home.tsx"
import MovieDetails from "./components/movies/movieDetails/MovieDetails.tsx"

function App() {

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
        <Route path="/serie/" element={<p>series search</p>} />
        <Route path="/serie/:id" element={<p>serie especifica</p>} />
      </Routes>
    </div>
    </>
  )
}

export default App
