import React, {useEffect, useState} from "react"
import "./tvList.scss"
import { useParams } from "react-router-dom"
import Cards from "../card/card"

const TvList = () => {
    
    const [TvList, setTvList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/trending/tv/${type ? type : "week"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setTvList(data.results))
    }

    return (
        <div className="tv_list">
            <h2 className="list_title">{(type ? type : "popularne seriale w tym tygodniu").toUpperCase()}</h2>
            <div className="list_cards">
                {
                    TvList.map(movie => (
                        <Cards key={movie.id} movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default TvList