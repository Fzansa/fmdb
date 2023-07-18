import React, { useEffect, useState } from "react";
import "./Cast.css";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const Cast = () => {
  let { id, type } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    let res = axios.get(
      `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=7f46651666f1ca68e4cf0cb150551f07`
    );
    res.then((data) => setCast(data.data));
  }, [id]);
  return (
    <div className="cast_container">
      <h3>Top Billed Cast</h3>
      <div className="cast_card_container">
        {cast.length !== 0 &&
          cast.cast.map((item) => (
            <div className="cast_card" key={item.id}>
              
              <Link to={`/people/${item.id}`} className="link">
              <div className="img_container">
                <img
                  src={
                    item.profile_path !== null
                      ? `https://www.themoviedb.org/t/p/w138_and_h175_face/${item.profile_path}`
                      : "/not.jpg"
                  }
                  alt={"image not found"}
                  className="movieimg"
                />
              </div>
              <div className="name_container">
                <h2>{item.original_name || item.original_title}</h2>
                <p>{item.character}</p>
              </div>
             </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Cast;
