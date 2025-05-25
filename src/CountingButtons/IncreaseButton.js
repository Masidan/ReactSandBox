const IncreaseButton = (props) => {

    return (
        <button className="btn btn-danger" onClick={props.increaseHandler}>+1</button>
    );
}
export default IncreaseButton;
