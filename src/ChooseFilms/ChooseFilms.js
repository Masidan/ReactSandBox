import { useState } from "react";
import allMovies from "./data.js"; 
import Movie from "./Movie.js"; 
import Categories from "./categories.js"; 



const ChooseFilms = () => {

    const [category, setCategory] = useState("");


    return (
            <div className=" border border-1 bg-light p-3 m-2 ">
                <h5 className="text-center">Component: ChooseFilms</h5>
                <span className="text-muted">Zobrazeni filmů vybrané kategorie za pouzití Short circuit evaluation ( proměnná1 && proměnná2)</span><br/>
                <a className="" href="https://www.youtube.com/watch?v=xfWE61-n_TM&ab_channel=David%C5%A0etek-Hacknisvoubudoucnost">youtoobe</a><br/>
                <div className="mt-2"></div>

                <div className="d-flex justify-content-center">
                    {
                        Categories.map((category, index) => {
                            return (
                                <button key={index} className="btn btn-secondary m-1" onClick={() => setCategory(category)}>{category}</button>
                            );
                        })
                    }

                </div>

                <div className="d-flex flex-wrap gap-3 justify-content-center">
                    {
                        //-zobrazeni filmů podle kategorie a za pouzití Short circuit evaluation
                        allMovies.map((movie) => movie.category === category && <Movie key={movie.id} movie={movie} />)
                    }
                </div>



            </div>
    );
}
export default ChooseFilms;