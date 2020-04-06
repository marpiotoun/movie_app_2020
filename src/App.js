import React from 'react';
import axios from "axios";
import Movies from "./movies"
import "./App.css";
// import Proptypes from 'prop-types';


class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({ movies })
    this.setState({ isLoading: false })
  }
  componentDidMount() {
    this.getMovies()
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">{isLoading ?
        // While Loading
        <div className='loader'>
          <span className='loader__text'>Loading...</span>
        </div>
        :
        // While Display Movies
        <div className="movies">
          {movies.map(
            movie => {
              return <Movies
                key={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres} />
            })}
        </div>
      }
      </section>
    );
  }
}
export default App;

// 영화 리스트 URL : https://yts.mx/api/v2/list_movies.json