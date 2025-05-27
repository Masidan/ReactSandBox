import React from 'react';
import { useState } from 'react';
import Movies from './data.js';
import Movie from './Movie.js';

const Netflix = () => {

    const [filteredMovies, setFilteredMovies] = useState(Movies);
    const deleteHandler = (id) => {
        setFilteredMovies(filteredMovies.filter(movie => movie.id !== id));
    };
    const deleteAllHandler = () => {
        setFilteredMovies([]);
    };
    const loadAllHandler = () => {
        setFilteredMovies(Movies);
    };

   return (
        

        
        
        <div className=" border border-1 bg-light p-3 m-2 ">

        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    <h5>Component: Netflix</h5>
                </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">


                        <div className="d-flex flex-wrap gap-3 justify-content-center">
                            {filteredMovies.map((movie) => (
                                <Movie  key={movie.id} movie={movie} deleteHandler={deleteHandler}/>
                            ))}
                        </div>
                    
                        <div className="d-flex align-items-center gap-2 mt-2">
                            <button className='btn btn-danger' onClick={deleteAllHandler}>Vymazat všechny filmy</button>  
                            <button className='btn btn-success' onClick={loadAllHandler}>Načíst všechny filmy</button>  
                        </div>


                        
                    </div>
                </div>
            </div>
        </div>



        </div>
    )
}

export default Netflix;