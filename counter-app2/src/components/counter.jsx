import React, { Component } from 'react';



class Counter extends Component {
    state = {
        count: 0,
        tags: ["tag1", "tag2", "tag3"]
    }

    //    constructor(){
    //     super()
    //     this.handleIncrement.bind(this)
    //    }

    // fat arrow functions replace the need for binding functions and having
    // to use the constructor and super.

    // do not update state directly use set state method 

    handleIncrement = e => {
        console.log(e)
        this.setState({ count: this.state.count + 1 })
    }

    // doHandleIncremement = () => {
    //     this.handleIncrement({id: 1})
    // }

    render() {
        return (
            <div>
                <span className={this.setClass()}>{this.formatCount()}</span>
                <button onClick={() => this.handleIncrement({ id: 1 })} className='btn btn-secondary btn-sm'>increment</button>
                {this.state.tags.length === 0 && 'please create new tag'}
                {this.renderTags()}
            </div>
        )
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags</p>

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }

    setClass() {
        return this.state.count === 0 ? "badge bg-warning m-2" : "badge bg-primary m-2";
    }

    formatCount() {
        const { count } = this.state
        return count === 0 ? "Zero" : count
    }

}

export default Counter;