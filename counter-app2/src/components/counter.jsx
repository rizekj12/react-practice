import React, { Component } from 'react';



class Counter extends Component {
    state = {
        count: 0,
        imgurl: 'https://picsum.photos/200'
    }

     

    render() {
        return (
        <>
            
            <span className="badge bg-primary">{this.formatCount()}</span> 
            <button className='btn btn-secondary btn-sm'>increment</button>
        </>
        )
    }

    formatCount(){
        const { count } = this.state
        return  count === 0 ? "Zero" : count
    }

}

export default Counter;