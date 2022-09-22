
const Counter = (props) => {
    const { counter, onIncrement, onDecrement, onDelete } = props

    function setClass() {
        return counter.value === 0 ? "badge bg-warning m-2" : "badge bg-primary m-2";
    }

    function formatCount() {
        const { value: count } = counter
        return count === 0 ? "Zero" : count
    }

    return (
        <div className="row">
            <div className="col-1">
                <span className={setClass()}>{formatCount()}</span>
            </div>
            <div className="col">
                <button
                    onClick={() => onIncrement(counter)}
                    className='btn btn-secondary btn-sm m-2'>
                    +
                </button>
                <button
                    disabled={counter.value === 0 ? "disabled" : ""}
                    onClick={() => onDecrement(counter)}
                    className='btn btn-secondary btn-sm m-2'>
                    -
                </button>
                <button
                    onClick={() => onDelete(counter.id)}
                    className="btn btn-danger btn-sm m-2">
                    x
                </button>
            </div>

        </div>
    )
}

export default Counter;