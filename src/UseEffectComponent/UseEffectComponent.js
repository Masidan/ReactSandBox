import React from 'react';
import { useEffect, useState } from 'react';




const UseEffectComponent = () => {

    //useEffect se spousti az na konec komponenty, jako posledni pri nacteni stranky nebo refresh komponenty
    const [value, setValue] = useState(0);
    
    //-pokud potrebuji nacist button a pracovat s nim driv nez se vykresli komponenta, pouziji useEffect (nacteni buttonu a prace s nim musi probihat v useEffect)
    //-useEffect se spousti az po vykresleni komponenty, takze pokud potrebuji neco zmenit na DOMu, pouziji useEffect
    // const button = document.querySelector('#button');
    // button.textContent = `Klikni ${value}`;
    
    useEffect(() => {
        const button = document.querySelector('#useffect-button');
        
        if(value==0) button.textContent = `Klikni`;
        if(value>0) button.textContent = `Klik číslo ${value}`;
    //}) //-zde se spousti useEffect po kazde zmene value, pokud chci aby se spoustel jen jednou, pridam prazdne pole jako druhy argument useEffectu})
    //},[]) //-zde se spousti useEffect jen jednou, po vykresleni komponenty, pokud chci aby se spoustel pri kazde zmene value, pridam value do pole jako druhy argument useEffectu
    },[value]) //-pokud ale do pole dame value, useEffect se spusti poze pri zmene value, coz je v tomto pripade potreba, abychom mohli menit text na buttonu

    return (
        <div className=" border border-1 bg-light p-3 m-2 ">
            <h5 className="text-center">Component: UseEffect</h5>
            <span className="text-muted">Ukázka jak řešit případy, kdy potřebujeme načíst a pracovat s html elementem, který bude vykreslan až po vykreslení komponenty</span>
            <button id="useffect-button" className="d-flex" onClick={() => setValue(value+1)}></button>
        </div>
    );
};

export default UseEffectComponent;
