import React, {useState, useEffect} from 'react';

const Movie = (props) => {
    const poster = `https://image.tmdb.org/t/p/w1280/${props.poster_path}`;

    let overviewFixed = props.overview;
    if (props.overview.length > 420) {
        overviewFixed = props.overview.slice(0,420) + '...';
    }
    if (window.screen.width < 480) {
        overviewFixed = props.overview.slice(0,100) + '...';
        console.log('fixed');
    }

    const viewMovie = () => {
        const url = "https://www.themoviedb.org/movie/" + props.id;
        window.location.href = url;
    }
    return (
        <div>
            <div className="card my-3 movie-box">
                <div className="poster-movie-part">
                    <img src={poster} alt="poster" className="poster-movie"/>
                </div>
                <div className="movie-text mx-4">
                    <h1 className="text-capitalize">{props.title}</h1>
                    <h5 className="text-capitalize movie-votes">
                            <span className="movie-votes-top">{props.vote_average}</span>
                            <span className="movie-votes-slash">&#8212;</span>
                            <span className="movie-votes-bottom">10</span>
                            <img src="https://findicons.com/files/icons/719/crystal_clear_actions/64/bookmark.png" className="movie-star"/>
                        <span className="movie-num-votes"> ({props.vote_count} votes)</span>
                        </h5>
                    <div className="card-text ">{overviewFixed}</div>
                    <button onClick={viewMovie} className="btn btn-success">View</button>
                </div>
            </div>        
        </div>
    )
}

export default Movie;