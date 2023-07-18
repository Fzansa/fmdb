import React, { useEffect, useState } from "react";
import "./MovieDetail.css";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const MovieDetail = () => {
  let { id, type } = useParams();

  const [data, setData] = useState([]);
  const [year, setYear] = useState("");
  const [tog, setTog] = useState(false);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    let res = axios.get(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=7f46651666f1ca68e4cf0cb150551f07`
    );
    res.then((data) => setData(data.data));
    setTimeout(() => {
      changeDate();
    }, 1000);
  }, [year, id, type]);

  useEffect(() => {
    let res = axios.get(
      `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=7f46651666f1ca68e4cf0cb150551f07`
    );
    res.then((data) => setTrailer(data.data));
  }, []);

 


  function changeDate() {
    var dateStr = data.release_date || data.first_air_date;
    var date = new Date(dateStr);
    setYear(date.getFullYear());
  }

  return (
    <div className="main">
     
      {tog && (
        <div className="trailer_container">
          <div className="play_heading_container">
            <h3>Play Trailer</h3>
            <i
              className="fa-sharp fa-solid fa-xmark cross"
              onClick={() => setTog(false)}
            ></i>
          </div>
          <div className="ifram_container">
            <iframe
              src={`https://www.youtube.com/embed/${
                trailer && trailer.results[0].key
              }`}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}


      <img
        src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${data.backdrop_path}`}
        alt=""
        className="bgImage"
      />
      <div className="detail_container">
        <div className="moviedetail_img_container">
          <img
            src={
              data.poster_path !== null
                ? `https://www.themoviedb.org/t/p/w300_and_h450_face/${data.poster_path}`
                : data.backdrop_path !== null
                ? `https://www.themoviedb.org/t/p/w300_and_h450_face/${data.backdrop_path}`
                : "not.jpg"
            }
            alt=""
          />
        </div>
        <div className="text_container">
          <div className="heading">
            <h1>
              {data.title || data.name}
              <span>({year})</span>
            </h1>
            <div className="subHeading_container">
              <p>{data.release_date}</p>
              <div className="moviedetail_link_container">
                {data.length !== 0 &&
                  data.genres.map((gen, i) => (
                    <Link to={`/genre/${gen.id}`} key={gen.id}>
                      {gen.name} {i < data.genres.length - 1 ? "," : ""}
                    </Link>
                  ))}
              </div>
            </div>
          </div>

          <div className="middle_heading">
            <div className="userScore_container">
              <span
                className="userScore"
                style={
                  Math.round(data.vote_average * 10) > 70
                    ? { boxShadow: "inset 0 0 0 3px green" }
                    : Math.round(data.vote_average * 10) > 50
                    ? { boxShadow: "inset 0 0 0 3px yellow" }
                    : { boxShadow: "inset 0 0 0 3px red" }
                }
              >
                {Math.round(data.vote_average * 10)}
                <sup>%</sup>
              </span>{" "}
              <p>User Score</p>
            </div>

            <div className="playTrailer_container" >
            {trailer && trailer.results.length !== 0 ? <p onClick={() => setTog(true)}>
                <i className="fa-solid fa-play"></i> Play Trailer
              </p> : <h3>No Trailer</h3>}
            </div>
          </div>

          <div className="tagline">
            <p>
              <em>{data.tagline}</em>
            </p>
          </div>

          <div className="overview">
            <h4>Overview</h4>
            <p>{data.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
