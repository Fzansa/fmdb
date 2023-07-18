import React, { Component } from "react";
import "./Trending.css";
import axios from 'axios'
import { Link } from "react-router-dom";

export default class Trending extends Component {


  constructor() {
    super();
    this.state = {
      movies: [],
      filter: 'day',
    };
  }

  async componentDidMount() {
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/all/${this.state.filter}?api_key=a65c90fbe309b74c7766f2d219475c78`
    );
    let data = res.data;
    this.setState({
      movies: [...data.results],
    });
  }

  changeMovies = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/all/${this.state.filter}?api_key=a65c90fbe309b74c7766f2d219475c78`
    );
    let data = res.data;
    this.setState({
      movies: [...data.results],
    });
  }

  handleFilter = (filter) => {
    this.setState({ filter: filter }, this.changeMovies)

  }

 
  render() {

    return (
      <div className="trending_container">
        <div className="heading_container">
          <div className="text">Trending</div>
          <div className="button_container">
            <button className={this.state.filter === 'day' && 'active'} onClick={() => this.handleFilter('day')}>Today</button>
            <button className={this.state.filter === 'week' && 'active'} onClick={() => this.handleFilter('week')}>This Week</button>
          </div>
        </div>

        <div className="card_container">

          {
            this.state.movies.map(item => (
              <div className="movie_card" key={item.id}>
                <Link to={`/movie/${item.id}/${item.media_type}`} className="link">
                <div className="img_container">
                  <img src={item.poster_path !== null ? `https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}` : item.backdrop_path !== null ? `https://www.themoviedb.org/t/p/w220_and_h330_face/${item.backdrop_path}` : "not.jpg"}
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
    );
  }
}
