import React from "react"
import "./card.scss"
import { Link } from "react-router-dom"

const Cards = ({movie}) => {
    return <>
        {
                <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
                    <div className="cards">
                        <img className="cards_img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} />
                        <div className="cards_overlay">
                            <div className="cards_title">{movie?movie.original_title:""}</div>
                            <div className="cards_date">
                                {movie ? movie.release_date:""}

                            </div>
                            <div className="cards_description">{movie ? movie.overview.slice(0,118)+"..." : ""}</div>
                        </div>
                    </div>
                </Link>
        }
    </>
}

export default Cards