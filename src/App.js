import React from 'react';
import axios from "axios";
// import Proptypes from 'prop-types';


class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = () => {

  }
  async componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 4000);
    const movies = axios.get('https://yts.mx/api/v2/list_movies.json')
  }
  render() {
    const { isLoading } = this.state;
    return (
      <div>{isLoading ? "Loading..." : "Ready"}</div>
    );
  }
}
export default App;

// https://yts.mx/api/v2/list_movies.json