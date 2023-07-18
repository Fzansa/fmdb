import React, { Component } from 'react'
import "./Trailer.css"
import axios from 'axios';

export default class Trailer extends Component {

    constructor() {
        super();
        this.state = {
            movies: [],
            filter1: 0,
            filter2: ['https://api.themoviedb.org/3/discover/movie?api_key=7f46651666f1ca68e4cf0cb150551f07&sort_by=popularity.dsc&release_primary_date.desc&include_adult=false&include_video=false&with_watch_providers=8|119|337|384&watch_region=IN&with_original_language=hi', 'https://api.themoviedb.org/3/tv/popular?api_key=a65c90fbe309b74c7766f2d219475c78&language=en-IN&with_original_language=hi', 'https://api.themoviedb.org/3/movie/now_playing?api_key=a65c90fbe309b74c7766f2d219475c78&language=en-IN&with_original_language=hi'],
            filter3: 'movie',
            movieTrailer: []
        };
    }



    async componentDidMount() {
        const res = await axios.get(this.state.filter2[this.state.filter1]);
        let data = res.data.results.map(item => item.id);
        let trailer = [];
        data.map(async movieId => {
            const res = await axios.get(
                `https://api.themoviedb.org/3/${this.state.filter3}/${movieId}/videos?api_key=7f46651666f1ca68e4cf0cb150551f07`
            );
            if (res.data.results.length !== 0) {
                trailer.push(...res.data.results)
            }



        })
        setTimeout(() => {
            this.setState({
                movies: [...data],
                movieTrailer: trailer
            });
        }, 1000);
    }

    handleFilter = (filter, fil) => {
        this.setState({ filter1: filter, filter3: fil }, this.changeMovies)

    }

    changeMovies = async () => {
        const res = await axios.get(this.state.filter2[this.state.filter1]);
        let data = res.data.results.map(item => item.id);
        let trailer = [];
        data.map(async movieId => {
            const res = await axios.get(
                `https://api.themoviedb.org/3/${this.state.filter3}/${movieId}/videos?api_key=7f46651666f1ca68e4cf0cb150551f07`
            );
            if (res.data.results.length !== 0) {
                trailer.push(...res.data.results)
            }



        })
        setTimeout(() => {
            this.setState({
                movies: [...data],
                movieTrailer: trailer
            });
        }, 1000);
       
    }


    render() {
        return (
            <div className="trailerall_container">
                <div className="trailer_heading_container">
                    <div className="trailer_text">Latest Trailers</div>
                    <div className="trailer_button_container">
                        <button className={this.state.filter1 === 0 && 'active'} onClick={() => this.handleFilter(0, 'movie')}>Streaming</button>
                        <button className={this.state.filter1 === 1 && 'active'} onClick={() => this.handleFilter(1, 'tv')}>On TV</button>
                        <button className={this.state.filter1 === 2 && 'active'} onClick={() => this.handleFilter(2, 'movie')}>In Theaters</button>
                    </div>
                </div>




                <div className="trailer_card_container">


                    {
                        this.state.movieTrailer.map(trailer => (
                            <div className="trailer_movie_card" key={trailer.id} onClick={()=>alert(trailer.name)}>
                                <div className="trailer_img_container">
                                    <iframe
                                       
                                        src={`https://www.youtube.com/embed/${trailer.key}`}
                                        allowFullScreen
                                        className='trailer_img'

                                    ></iframe>
                                </div>

                                <h5 className="trailer_movietitle">{trailer.name}</h5>
                            </div>
                        ))
                    }




                </div>
            </div>
        )
    }
}
