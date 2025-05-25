import { useState } from 'react';
import IncreaseButton from './IncreaseButton';
import DecreaseButton from './DecreaseButton';
import ResetButton from './ResetButton';


const CountingButtons = () => {

    const [value, setValue] = useState(0);
    const decreaseHandler = () => {
        setValue(value - 1);
    }
    const increaseHandler = () => {
        setValue(value + 1);
    }
    const resetHandler = () => {
        setValue(0);
    }
        
    return (
        <div className=" border border-1 bg-light p-3 m-2 ">
            <h5 className="text-center">Component: Decrease & Increase Button</h5>
            <span className="text-muted">Obě tlačítka jsou importována o stickem volána jako a komponenty</span>
            <div className="d-flex align-items-center ">
                <h6>Value = {value}</h6>
                <div className="ms-auto gap-2 d-flex">
                    <DecreaseButton decreaseHandler={decreaseHandler}/>
                    <IncreaseButton increaseHandler={increaseHandler}/>
                    <ResetButton resetHandler={resetHandler}/>
                </div>
            </div>
        </div>
    );
}
export default CountingButtons;
