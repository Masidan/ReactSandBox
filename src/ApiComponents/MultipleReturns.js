import React from 'react';
import { useEffect, useState } from 'react';


const url = "http://api.open-notify.org/iss-now.json";

const MultipleReturns = () => { 


    const [loading, setLoading] = useState(true); // Stav načítání
    const [coordinates, setCoordinates] = useState("Načítám data..."); 

    useEffect(() => {
        fetch(url)
            .then(response => response.json()) // Získáme JSON data a ulozi do proměnné data
            .then(data => data["iss_position"]) // z data ziska souradnice ISS z objekctu iss_position
            .then(coordinates => setCoordinates(coordinates)) // vypíše souradnice do konzole
            .catch(error => console.error("Chyba:", error)) // Ošetření chyby
            .finally(() => setLoading(false));

    },[]); 
    


    if (loading) {
        return (
            <div className=" border border-1 bg-light p-3 m-2 ">
                <h5 className="text-center">Component: MultipleReturns</h5>
                <span className="text-muted">Return 1</span><br/>
                <a className="" href="https://www.youtube.com/watch?v=w8dY31UU7-s&list=PLQ8x_VWW6Akua8I5spV8nHIWlG6_tX6dx&index=73&ab_channel=David%C5%A0etek-Hacknisvoubudoucnost">youtoobe</a><br/>
                <div className="mt-2">nacitani stranky.....</div>
            </div>
        );
    } else {
        return (
            <div className=" border border-1 bg-light p-3 m-2 ">
                <h5 className="text-center">Component: MultipleReturns</h5>
                <span className="text-muted">Return 2</span><br/>
                <a className="" href="https://www.youtube.com/watch?v=w8dY31UU7-s&list=PLQ8x_VWW6Akua8I5spV8nHIWlG6_tX6dx&index=73&ab_channel=David%C5%A0etek-Hacknisvoubudoucnost">youtoobe</a><br/>
                <div className="mt-2">{coordinates.latitude}, {coordinates.longitude}</div>
            </div>
                        
        );


    }





};
export default MultipleReturns;
