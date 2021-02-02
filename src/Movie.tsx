import React from 'react';
import './'

const Movie = ( props : { year:number, title:string, poster:string, summary:string, genres:[string] }) => {

    return (
        <div className="movie">
            <img src={props.poster} alt={props.title}/>
            <div className="movie__data">
                <h3 className="movie__title">{props.title}</h3>
                <h5 className="movie__year">{props.year}</h5>
                <h3>{props.summary.slice(0, 180)}...</h3>
                <ul className="movie__genres">
                {props.genres.map( (genres:string, index:number) => {
                    return <li className="genres__genre" key={index}>{genres}</li>
                })}
                </ul>
            </div>
        </div>
    );
};

export default Movie;