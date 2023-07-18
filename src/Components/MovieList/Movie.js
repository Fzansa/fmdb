import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Movie = () => {
    let { id } = useParams();

    const [data, setData] = useState([]);

    useEffect(() => {
        let res = axios.get(
            `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=7f46651666f1ca68e4cf0cb150551f07`
        );
        res.then((data) => setData(data.data.cast));

    }, [id]);

    return (
        <div className="trending_container">
            <div className="heading_container">
                <div className="text">{data.length !== 0 ? "Known For":<h1>Dont have more Data!</h1>}</div>

            </div>

            <div className="card_container">

                {
                    data.map(item => (
                        <div className="movie_card" key={item.id}>
                            <Link to={`/movie/${item.id}/movie`} className="link">
                                <div className="img_container">
                                    <img src={item.poster_path !== null ? `https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}` : item.backdrop_path !== null ? `https://www.themoviedb.org/t/p/w220_and_h330_face/${item.backdrop_path}` : "/not.jpg"}
                                        className="movieimg " alt="..." />

                                    <span className="badge" style={(Math.round(item.vote_average * 10) > 70) ? { boxShadow: "inset 0 0 0 3px green" } : (Math.round(item.vote_average * 10) > 50) ? { boxShadow: "inset 0 0 0 3px yellow" } : { boxShadow: "inset 0 0 0 3px red" }}>
                                        {Math.round(item.vote_average * 10)}<sup>%</sup>
                                    </span>
                                </div>

                                <h5 className="movietitle">{item.original_title || item.original_name}</h5>
                                <p className="movietext">{item.release_date || item.first_air_date}</p>

                            </Link>

                        </div>
                    ))
                }


            </div>
        </div>
    )
}

export default Movie