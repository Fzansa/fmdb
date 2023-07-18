import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Banner.css"

const Banner = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  return (
    <div className='Banner'>
      <div className="banner_text_container">
        <h1>Welcome.</h1>
        <h4>Millions of movies, TV shows and people to discover. Explore now.</h4>
      </div>
      <div className="searchInput_container">
        <input type="search" name="" id="" placeholder='Search for a movie , tv shows , person ......' value={query} onChange={(e) => { setQuery(e.target.value) }} />
        {query !== '' ? <button onClick={() => navigate(`/search/${query}`)} >Search</button>:<button  >Search</button>}
      </div>
    </div>
  )
}

export default Banner