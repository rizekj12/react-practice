import React, { Component } from 'react';



class Counter extends Component {
    state = {
        value: this.props.counter.value,
        tags: ["tag1", "tag2", "tag3"]
    }

    //    constructor(){
    //     super()
    //     this.handleIncrement.bind(this)
    //    }

    // fat arrow functions replace the need for binding functions and having
    // to use the constructor and super.

    // do not update state directly use set state method 

    handleIncrement = e => this.setState({ value: this.state.value + 1 })

    handleDecrement = e => {
        if(this.state.value < 0){
            this.setState({ value: 0 })
        }else{
            this.setState({ value: this.state.value - 1 })  
        }
        
    }

   
    

    // doHandleIncremement = () => {
    //     this.handleIncrement({id: 1})
    // }

    render() {
        return (
            <div>
                <span className={this.setClass()}>{this.formatCount()}</span>
                <button onClick={() => this.handleIncrement({ id: 1 })} className='btn btn-secondary btn-sm m-2'>increment</button>
                <button onClick={() => this.handleDecrement({ id: 1 })} className='btn btn-secondary btn-sm m-2'>decrement</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                {this.state.tags.length === 0 && 'please create new tag'}
                {/* {this.renderTags()} */}
            </div>
        )
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags</p>

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }

    setClass() {
        return this.state.value === 0 ? "badge bg-warning m-2" : "badge bg-primary m-2";
    }

    formatCount() {
        const { value: count } = this.state
        return count === 0 ? "Zero" : count
    }

}

export default Counter;