import React from "react";
import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";
import Favourites from "./pages/Favorites";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContext";
import "./App.css";

function App() {
  return (
    <>
      <MovieProvider>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favourites />} />
          </Routes>
        </main>
      </MovieProvider>
    </>
  );
}
export default App;
