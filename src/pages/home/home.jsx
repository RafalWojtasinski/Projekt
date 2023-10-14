import React, { useEffect, useState } from "react";
import "./home.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/movieList.jsx";
import TvList from "../../components/tvList/tvList.jsx";
import SearchBox from "../../components/search/SearchBox.jsx";


const Home = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
            .then((res) => res.json())
            .then((data) => setPopularMovies(data.results));
    }, []);

    useEffect(() => {
        if (searchValue) {
            getMovieRequest(searchValue);
        }
    }, [searchValue]);

    const getMovieRequest = async (searchValue) => {
        const url = 'https://api.themoviedb.org/3/search/movie?${searchValue}include_adult=false&page=1&language=en-US&api_key=de6f3e702bcb8be5fa19c3d1fb30487e';

        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.Search) {
            setMovies(responseJson.Search);
        }
    };

    return (
        <div className="poster">
            <SearchBox
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            <Carousel
                key={movies.length}
                showThumbs={false}
                autoPlay={true}
                transitionTime={3}
                infiniteLoop={true}
                showStatus={false}
                autoFocus={true}
                stopOnHover={true}
            >
                {popularMovies.map((movie) => (
                    <Link
                        key={movie.id}
                        style={{ textDecoration: "none", color: "white" }}
                        to={`/movie/${movie.id}`}
                    >
                        <div className="posterImage">
                            <img
                                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                                alt={movie.original_title}
                            />
                        </div>
                        <div className="posterImage_overlay">
                            <div className="posterImage_title">
                                {movie.original_title}
                            </div>
                            <div className="posterImage_date">
                                {movie.release_date}
                            </div>
                            <div className="posterImage_description">{movie.overview}</div>
                        </div>
                    </Link>
                ))}

            </Carousel>
            <MovieList movies={movies} />
            <TvList movies={movies} />


        </div>
    );
};

export default Home;
