const DecreaseButton = (props) => {
        
    return (
        <button className="btn btn-danger" onClick={() => props.decreaseHandler()}>-1</button>
    );
}
export default DecreaseButton;
