import React, { useEffect, useState } from "react";
import "./PeopleDetail.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const PeopleDetail = () => {
  let { id } = useParams();

  const [data, setData] = useState([]);
  const [year, setYear] = useState("");

  useEffect(() => {
    let res = axios.get(
      `https://api.themoviedb.org/3/person/${id}?api_key=7f46651666f1ca68e4cf0cb150551f07`
    );
    res.then((data) => setData(data.data));
  }, [year, id]);

  return (
    <div className="bio_main">
      <div className="detail_container">
        {console.log(data)}

        <div className="moviedetail_img_container">
          <img
            src={
              data.profile_path !== null
                ? `https://www.themoviedb.org/t/p/w300_and_h450_face/${data.profile_path}`
                : "/not.jpg"
            }
            alt=""
          />
        </div>

        <div className="bio_text_container">
          <div className="bio_heading">
            <h1>{data.title || data.name}</h1>
            <div className="biography">
              <h3>Biography</h3>
              <p>{data.biography !== ""?(data.biography):"Data Not available"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleDetail;
