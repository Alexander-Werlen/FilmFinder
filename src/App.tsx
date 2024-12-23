import { Route, Routes } from "react-router-dom"
import NavBar from "./components/general/NavBar"
import Home from "./components/home/Home.tsx"

function App() {

  return (
    <div className="container mx-auto">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/otro" element={<p>Otro</p>} />
        <Route path="/search" element={<p>Search</p>} />
      </Routes>
    </div>
  )
}

export default App
