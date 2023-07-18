import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Banner from './Components/Banner/Banner';
import Trending from './Components/Trending/Trending';
import Trailer from './Components/Trailer/Trailer';
import Popular from './Components/Popular/Popular';
import FreeWatch from './Components/FreeWatch/FreeWatch'
import Footer from './Components/Footer/Footer';
import MovieDetail from './Components/movieDetail/MovieDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cast from './Components/Cast/Cast';
import Search from './Components/search/Search';
import PeopleDetail from './Components/PeopleDetail/PeopleDetail';
import Movie from './Components/MovieList/Movie';

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path='/' element={
            <>
              <Navbar />
              <Banner />
              <Trending />
              <Trailer />
              <Popular />
              <FreeWatch />
              <Footer />
            </>
          } />
          <Route path='/movie/:id/:type' element={
            <>
              <Navbar />
              <MovieDetail />
              <Cast />
              <Footer />
            </>
          } />

          <Route path='/people/:id' element={
            <>
              <Navbar />
              <PeopleDetail />
              <Movie/>
              <Footer />
            </>
          } />

          <Route path='/search/:query' element={
            <>
              <Navbar />
              <Search />
              <Footer />
            </>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
