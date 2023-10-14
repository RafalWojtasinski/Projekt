import './App.scss'
import React, {useContext, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header/Header.jsx';
import Home from "./pages/home/home.jsx";
import MovieDetail from "./pages/movieDetail/movieDetail.jsx";
import {ThemeContext} from "./components/darkmode/theme.jsx";
import FavoritesPage from "./pages/Favourite/Favourite.jsx";

function App() {

    const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  return (
    <>
      <div className="App"
           style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
        <Router>
            <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<MovieDetail />}></Route>
                <Route path="favourite/:id" element={<FavoritesPage />}></Route>
                <Route path="/*" element={<h1>error page</h1>}></Route>
            </Routes>
        </Router>
      </div>
    </>
  );
}

export default App
