import { useState } from "react";


    //-Short circuit evaluation-------
    //const result1 = value && value2
    //- první je true = se vrací druhá hodnota
    //- první je false = vrací se první hodnota
    //- console.log(result1)

    //const result2 = value || "tomas"
    //- první je true = vrací první hodnota
    //- první je false = tak vrací druhou hodnotu
    //- console.log(result2)

const ShowHide = () => {
    const [show, setShow] = useState(true);
    return (
            <div className=" border border-1 bg-light p-3 m-2 ">
                <h5 className="text-center">Component: Show Hide s využitím Short circuit evaluation</h5>
                <span className="text-muted"></span><br/>
                <a className="" href="https://www.youtube.com/watch?v=AVbm5WkijzY&ab_channel=David%C5%A0etek-Hacknisvoubudoucnost">youtoobe</a><br/>
                
                <button className="btn btn-primary mt-2" onClick={() => setShow(!show)}>Show/Hide</button>




                {show && <h5>zobrazovany text</h5>}
            </div>
    );
};

export default ShowHide;