import React, { Component } from "react";
import "./Footer.css";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer_container ">
        <div className="footer_logo_container">
          <img src="/footer_logo.png" alt="" />
        </div>
        <div className="basic_link">
          <h4 className="footer_heading">THE BASICS</h4>
          <div className="link_container d-flex flex-column">
            <a href="https://www.themoviedb.org/about" target="__blank">
              About TMDB
            </a>
            <a
              href="https://www.themoviedb.org/about/staying-in-touch"
              target="__blank"
            >
              Contact Us
            </a>
            <a href="https://www.themoviedb.org/talk" target="__blank">
              Support Forums
            </a>
            <a
              href="https://www.themoviedb.org/login?to=read_me&redirect_uri=/docs"
              target="__blank"
            >
              API
            </a>
            <a href="https://status.themoviedb.org/" target="__blank">
              System Status
            </a>
          </div>
        </div>

        <div className="getInvolve_link">
          <h4 className="footer_heading">GET INVOLVED</h4>
          <div className="link_container d-flex flex-column">
            <a href="https://www.themoviedb.org/bible" target="__blank">
              Contribution Bible
            </a>
            <a href="https://www.themoviedb.org/movie/new" target="__blank">
              Add New Movie
            </a>
            <a href="https://www.themoviedb.org/tv/new" target="__blank">
              Add New TV Show
            </a>
          </div>
        </div>

        <div className="community_link">
          <h4 className="footer_heading">COMMUNITY</h4>
          <div className="link_container d-flex flex-column">
            <a
              href="https://www.themoviedb.org/documentation/community/guidelines"
              target="__blank"
            >
              Guidelines
            </a>
            <a href="https://www.themoviedb.org/discuss" target="__blank">
              Discussions
            </a>
            <a href="https://www.themoviedb.org/leaderboard" target="__blank">
              Leaderboard
            </a>
            <a href="https://twitter.com/themoviedb" target="__blank">
              Twitter
            </a>
          </div>
        </div>

        <div className="term_link">
          <h4 className="footer_heading">LEGAL</h4>
          <div className="link_container d-flex flex-column">
            <a
              href="https://www.themoviedb.org/documentation/website/terms-of-use"
              target="__blank"
            >
              Terms of Use
            </a>
            <a
              href="https://www.themoviedb.org/documentation/api/terms-of-use"
              target="__blank"
            >
              API Terms of Use
            </a>
            <a
              href="https://www.themoviedb.org/privacy-policy"
              target="__blank"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    );
  }
}
