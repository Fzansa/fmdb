import React, { useEffect, useState } from "react";
import "./Search.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Search = () => {
  let { query } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    let res = axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=7f46651666f1ca68e4cf0cb150551f07&query=${query}`
    );
    res.then(async (data) => await setData(data.data));
    // setTimeout(() => {
    //   changeDate();
    // }, 1000);
  }, [query]);

  return (
    <div className="search_container">
      {console.log(data)}
      <div className="search_heading">
        <p className="">Query:{query}</p>
        <p>Total result:{data.total_results}</p>
      </div>
      <div className="cardsearch_container">
        {data.total_results === undefined && (
          <div class="spinner-border text-dark" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        )}
        {data.total_results === 0 && (
          <h5>
            Nothing Found for query :<em>{query}</em>{" "}
          </h5>
        )}
        {data.results &&
          data.results.map((item) =>
            item.media_type !== "person" ? (
              <div className="search_card_container" key={item.id}>
                <Link
                  to={`/movie/${item.id}/${item.media_type}`}
                  className="link"
                >
                  <div className="search_img">
                    <img
                      src={
                        item.poster_path !== undefined
                          ? `https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`
                          : item.profile_path !== undefined
                          ? `https://image.tmdb.org/t/p/w90_and_h90_face/${item.profile_path}`
                          : "not.jpg"
                      }
                      alt="..."
                    />
                  </div>
                  <div className="search_heading_container">
                    <h1>{item.title || item.name}</h1>
                    <p>{item.release_date || item.first_air_date}</p>
                    <p>{item.overview && item.overview.substring(0, 150)}...</p>
                  </div>
                </Link>
              </div>
            ) : (
              <div className="search_card_container" key={item.id}>
                <Link
                  to={`/people/${item.id}`}
                  className="link"
                >
                <div className="search_img">
                  <img
                    src={
                      item.profile_path !== undefined
                        ? `https://image.tmdb.org/t/p/w90_and_h90_face/${item.profile_path}`
                        : "not.jpg"
                    }
                    alt="..."
                  />
                </div>
                <div className="search_heading_container">
                  <h1>{item.title || item.name}</h1>
                  <p>{item.known_for_department}</p>
                </div>
                </Link>
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default Search;
