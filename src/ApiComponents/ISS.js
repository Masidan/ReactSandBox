import React from 'react';
import { useEffect, useState } from 'react';



const ISS = () => {

    const url = "http://api.open-notify.org/iss-now.json";
    
    const getCoordinates = async () => {
        const response = await fetch(url) // Získáme JSON data jako string
        const data = await response.json(); // prevede string na JSON data
        //console.log(data["iss_position"])
        //return data["quote"]; // Vrátíme citát
        setCoordinates(data["iss_position"]); // Nastavíme citát do stavu
    }
    
    //getQuote(); // Zavoláme funkci pro získání citátu

    // fetch(url)
    //     .then(response => response.json()) // Získáme JSON data
    //     .then(data => console.log(data)) // Vypíšeme data
    //     .catch(error => console.error("Chyba:", error)); // Ošetření chyby

    useEffect(() => {
        getCoordinates(); // Zavoláme funkci pro získání souradnic
    },[]); // Prázdné pole znamená, že se useEffect spustí jen jednou při načtení komponenty

    const [coordinates, setCoordinates] = useState("Načítám data..."); 

    return (
        <div className=" border border-1 bg-light p-3 m-2 ">
            <h5 className="text-center">Component: API z IIS</h5>
            <span className="text-muted">Zobrazuje souradnice ISS v reálmném čase</span><br/>
            <a className="" href="https://www.youtube.com/watch?v=uoKkuAJk1-k&list=PLQ8x_VWW6Akua8I5spV8nHIWlG6_tX6dx&index=69&ab_channel=David%C5%A0etek-Hacknisvoubudoucnost">youtoobe</a><br/>
            <a className="" href={url}>API ISS</a><br/>
            <div className="mt-2">{coordinates.latitude}, {coordinates.longitude}</div>
            
        </div>
    );
};
export default ISS;