import React from 'react';
import { useEffect, useState } from 'react';



const Quote = () => {

    const url = "https://api.kanye.rest/";
    
    const getQuote = async () => {
        const response = await fetch(url) // Získáme JSON data jako string
        const data = await response.json(); // prevede string na JSON data
        //console.log(data["quote"])
        //return data["quote"]; // Vrátíme citát
        setQuote(data["quote"]); // Nastavíme citát do stavu
    }
    
    //getQuote(); // Zavoláme funkci pro získání citátu

    // fetch(url)
    //     .then(response => response.json()) // Získáme JSON data
    //     .then(data => console.log(data)) // Vypíšeme data
    //     .catch(error => console.error("Chyba:", error)); // Ošetření chyby

    useEffect(() => {
        getQuote(); // Zavoláme funkci pro získání citátu při načtení komponenty
    }, []); // Prázdné pole znamená, že se useEffect spustí jen jednou při načtení komponenty

    const [quote, setQuote] = useState("Načítám citát..."); 

    return (
        <div className=" border border-1 bg-light p-3 m-2 ">
            <h5 className="text-center">Component: useState, useEffect a API</h5>
            <span className="text-muted"></span><br/>
            <a className="" href="https://www.youtube.com/watch?v=1CN8aK0DrdE&list=PLQ8x_VWW6Akua8I5spV8nHIWlG6_tX6dx&index=65&ab_channel=David%C5%A0etek-Hacknisvoubudoucnost">youtoobe</a><br/>
            <a className="" href={url}>api.kanye.rest</a><br/>
            <div className="mt-2">{quote}</div>
            <button className="btn btn-primary mt-2" onClick={getQuote}>Získat nový citát</button>
        </div>
    );
};
export default Quote;