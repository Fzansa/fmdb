import React, { Component } from 'react'
import './FreeWatch.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class FreeWatch extends Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      filter: 'te',
    };
  }

  async componentDidMount() {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=7f46651666f1ca68e4cf0cb150551f07&language=en-IN&with_original_language=${this.state.filter}`
    );
    let data = res.data;
    // console.log("bol",data);

    this.setState({
      movies: [...data.results],
    });
  }

  changeMovies = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=7f46651666f1ca68e4cf0cb150551f07&language=en-IN&with_original_language=${this.state.filter}`
    );
    let data = res.data;
    // console.log(data);
    this.setState({
      movies: [...data.results],
    });
  }

  handleFilter = (filter) => {
    this.setState({ filter: filter }, this.changeMovies)

  }
  render() {
    return (
      <div className="popular_container">

        <div className="langmovie_heading_container">
          <div className="text">Language-Based Movie </div>
          <div className="langmovie_button_container">
            <button className={this.state.filter === 'hi' && 'active'} onClick={() => this.handleFilter('hi')}>Hindi</button>
            <button className={this.state.filter === 'ta' && 'active'} onClick={() => this.handleFilter('ta')}>Tamil</button>
            <button className={this.state.filter === 'te' && 'active'} onClick={() => this.handleFilter('te')}>Telugu</button>
            <button className={this.state.filter === 'mr' && 'active'} onClick={() => this.handleFilter('mr')}>Marathi</button>
            <button className={this.state.filter === 'pa' && 'active'} onClick={() => this.handleFilter('pa')}>Panjabi</button>
          </div>
        </div>

        <div className="card_container">


          {
            this.state.movies.map(item => (
              <div className="movie_card" key={item.id}>
                
                <Link to={`/movie/${item.id}/movie`} className="link">
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
    )
  }
}
