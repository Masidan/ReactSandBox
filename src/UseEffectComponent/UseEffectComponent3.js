import React from 'react';
import { useEffect, useState } from 'react';




const UseEffectComponent3 = () => {

    const sizeControl = () => {
        setWindowSize(window.innerWidth);
    }

    const [windowSize, setWindowSize] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener('resize', sizeControl);
        //- CleanUp funkce, která se spustí při odpojení komponenty a odstraní addEventListener z DOMu.
        return () => {
            window.removeEventListener('resize', sizeControl);
        };
    })

    return (
        <div className=" border border-1 bg-light p-3 m-2 ">
            <h5 className="text-center">Component: UseEffect3 a cleanUP Function</h5>
            <span className="text-muted">
                Druhá možnost jak zajistit aby addEventListener byl na page jenjednou je použití CleanUp funkce, která se spustí při odpojení komponenty a odstraní addEventListener z DOMu.
                CleanUp funkce, se spustí při odpojení komponenty.
                CleanUp funkce, se ale spustí až po druhé. Při první spustěním useEffectu se CleanUp funkce nespustí (poprvé by totiž ještě neměla co čistit).
                Pokud je v useEffect více kodu, tak se spustí nejprve cleanUP Function a poté se spustí zbytek useEffectu. Přižemž na pořadí napsaného kodu nezáleží
                </span>
            <h2>Šířka okna: {windowSize}px</h2>
        </div>
    );
};

export default UseEffectComponent3;
