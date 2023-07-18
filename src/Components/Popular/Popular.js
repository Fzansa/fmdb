import "./Popular.css"
import React, { Component } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

export default class Popular extends Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      filter1: 0,
      filter2: ['https://api.themoviedb.org/3/discover/movie?api_key=7f46651666f1ca68e4cf0cb150551f07&sort_by=popularity.desc&release_primary_date.desc&include_adult=false&include_video=false&with_watch_providers=8|119|337|384&watch_region=IN&with_original_language=hi', 'https://api.themoviedb.org/3/tv/popular?api_key=a65c90fbe309b74c7766f2d219475c78&language=en-IN&with_original_language=hi', 'https://api.themoviedb.org/3/movie/now_playing?api_key=a65c90fbe309b74c7766f2d219475c78&language=en-IN&with_original_language=hi'],
    
    };
  }

  async componentDidMount() {
    const res = await axios.get(this.state.filter2[this.state.filter1]);
    let data = res.data;
    // console.log(data);
    this.setState({
      movies: [...data.results],
    });
  }

  handleFilter = (filter) => {
    // console.log(typeof filter)
    this.setState({ filter1: filter }, this.changeMovies)

  }

  changeMovies = async () => {
    const res = await axios.get(this.state.filter2[this.state.filter1]);
    let data = res.data;
    // console.log(data);
    this.setState({
      movies: [...data.results],
    });
  }


  render() {
    return (
      <div className="popular_container">
        <div className="popular_heading_container">
          <div className="text">What's Popular ?</div>
          <div className="popular_button_container">
            <button className={this.state.filter1 === 0 && 'active'} onClick={() => this.handleFilter(0)}>Streaming</button>
            <button className={this.state.filter1 === 1 && 'active'} onClick={() => this.handleFilter(1)}>On TV</button>
            <button className={this.state.filter1 === 2 && 'active'} onClick={() => this.handleFilter(2)}>In Theaters</button>
          </div>
        </div>

        <div className="card_container">

          {
            this.state.movies.map(item => (
              <div className="movie_card" key={item.id}>
                { console.log(item)}
                <Link to={`/movie/${item.id}/${this.state.filter1 !== 1 ? 'movie':'tv'}`} className="link">
                <div className="img_container">
                  <img
                    src={item.poster_path !== null ? `https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}` : item.backdrop_path !== null ? `https://www.themoviedb.org/t/p/w220_and_h330_face/${item.backdrop_path}` : "not.jpg"}
                    className="movieimg "
                    alt={item.title}
                  />

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
}
