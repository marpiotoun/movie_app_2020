import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";

function Movie({ key, year, title, summary, poster, genres }) {
    return (
        <div className="movies__movie">
            <img className="movie__poster" src={poster} alt={title} title={title}></img>
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <span className="genres">{genres.join(", ")}</span>
            <p className="movie__summary">{summary}</p>
        </div>

    )
}

Movie.propTypes = {
    key: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired
};

export default Movie;