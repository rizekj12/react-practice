import React, { Component } from 'react';

// this is a controlled component meaning it will not have its own state 
// it will instead recieve its state from the parent component

class Counter extends Component {
  
    //    constructor(){
    //     super()
    //     this.handleIncrement.bind(this)
    //    }

    // fat arrow functions replace the need for binding functions and having
    // to use the constructor and super.

    // do not update state directly use set state method 


    // handleDecrement = e => {
    //     if(this.state.value < 0){
    //         this.setState({ value: 0 })
    //     }else{
    //         this.setState({ value: this.state.value - 1 })  
    //     }
        
    // }
    // doHandleIncremement = () => {
    //     this.handleIncrement({id: 1})
    // }
    render() {
        return (
            <div>
                <span className={this.setClass()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm m-2'>increment</button>
                {/* <button onClick={() => this.handleDecrement({ id: 1 })} className='btn btn-secondary btn-sm m-2'>decrement</button> */}
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        )
    }

    setClass() {
        return this.props.counter.value === 0 ? "badge bg-warning m-2" : "badge bg-primary m-2";
    }

    formatCount() {
        const { value: count } = this.props.counter
        return count === 0 ? "Zero" : count
    }

}

export default Counter;