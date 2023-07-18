import React, { Component } from "react";
import  "./Navbar.css";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="left">
          <div className="logo_container">
            <Link to='/'><img src="/tmdblogo.png" alt="" className="logo_image" /></Link>
          </div>
          <ul className="menu">
            <li>
              <a href="#" className="dropbtn">
                Movies
              </a>
              <div className="dropdown_content">
                <a href="#">Option 1</a>
                <a href="#">Option 2</a>
                <a href="#">Option 3</a>
              </div>
            </li>

            <li>
              <a href="#" className="dropbtn">
                TV Shows
              </a>
              <div className="dropdown_content">
                <a href="#">Option 1</a>
                <a href="#">Option 2</a>
                <a href="#">Option 3</a>
              </div>
            </li>
            <li>
              <a href="#" className="dropbtn">
                People
              </a>
              <div className="dropdown_content">
                <a href="#">Option 1</a>
                <a href="#">Option 2</a>
                <a href="#">Option 3</a>
              </div>
            </li>
          </ul>
          {/* <div className="menu">
           
          </div> */}
        </div>
        {/* <div className="right">
          <div className="search">serach</div>
        </div> */}
      </nav>
    );
  }
}
