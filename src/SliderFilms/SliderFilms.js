import { useState } from "react";
import allMovies from "./data.js"; 
import Movie from "./Movie.js"; 
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";


const SliderFilms = () => {

    const [id, setId] = useState("");


    return (
            <div className=" border border-1 bg-light p-3 m-2 ">
                <h5 className="text-center">Component: SliderFilms</h5>
                <span className="text-muted"></span><br/>
                <a className="" href="https://www.youtube.com/watch?v=ow8TCAv8i8U&ab_channel=David%C5%A0etek-Hacknisvoubudoucnost">youtoobe</a><br/>
                <div className="mt-2"></div>


                <div className="d-flex flex-wrap gap-3 justify-content-center">
                    {
                        //-zobrazeni filmů podle kategorie a za pouzití Short circuit evaluation

                    }
                    <FaArrowAltCircleLeft className=" btn-primary mt-2" style={""}/>
                    <FaArrowAltCircleRight className=" btn-primary mt-2" style={""}/>
                </div>

            </div>
    );
}
export default SliderFilms;