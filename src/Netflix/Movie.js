import React from 'react';


const Movie = (props) => {


   return (
           
            <div className="card bg-dark  " style={{ width: "18rem" }}>
                <div className="card-body ">
                    <img src={props.movie.image} className="card-img-top" alt={props.movie.title} />
                    <span className="text-white"> {props.movie.title} </span>
                    <span className="badge bg-secondary ms-2">{props.movie.age}</span>
                    <span className="badge bg-secondary ms-2">{props.movie.tags}</span>
                    <p className="card-text mt-2 text-white">{props.movie.description}</p>
                </div>
                <div className="card-footer bg-dark d-flex gap-1">
                    <button className="btn btn-success w-100">Přehrát</button>
                    <button className="btn btn-sm btn-secondary ms-auto" onClick={() => props.deleteHandler(props.movie.id)}>Vymazat</button>
                </div>
            </div>

    )
}

export default Movie;