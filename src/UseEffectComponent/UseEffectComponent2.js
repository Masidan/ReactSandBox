import React from 'react';
import { useEffect, useState } from 'react';




const UseEffectComponent2 = () => {

    const sizeControl = () => {
        setWindowSize(window.innerWidth);
    }

    const [windowSize, setWindowSize] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener('resize', sizeControl);
    },[])

    return (
        <div className=" border border-1 bg-light p-3 m-2 ">
            <h5 className="text-center">Component: UseEffect2</h5>
            <span className="text-muted">
                UseEffect zde nastavuje addEventListener na resize, ale jen jednou. Pokud bych addEventListener do kodu vložil do csriptu bez useEffectu, byl by v DOM vícekrát a zatežovalo by to browser. 
                Proto se vloži do useEffectu s prázdným polem v duhém parametru a tím se addEventListener do DOMu vloží jen jednou jen jdednou.
                Toto je jedna z možností. Ta druhá je použití CleanUp funkce, která se spustí při odpojení komponenty a odstraní addEventListener z DOMu.
                </span>
            <h2>Šířka okna: {windowSize}px</h2>
        </div>
    );
};

export default UseEffectComponent2;
