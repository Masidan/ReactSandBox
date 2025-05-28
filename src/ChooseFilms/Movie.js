import React from 'react';


const Movie = (props) => {


   return (
           
            <div className="card bg-dark  " style={{ width: "18rem" }}>
                <div className="card-body ">
                    <img src={props.movie.image} className="card-img-top" alt={props.movie.title} />
                    <span className="text-white"> {props.movie.title} </span>
                    <span className="badge bg-secondary ms-2">{props.movie.age}</span>
                    <span className="badge bg-secondary ms-2">{props.movie.tags}</span>
                    <span className="badge bg-secondary ms-2">{props.movie.category}</span>
                    <p className="card-text mt-2 text-white">{props.movie.description}</p>
                </div>
            </div>

    )
}

export default Movie;