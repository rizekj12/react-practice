
// import './App.css';
import React, { Component } from 'react';
import Counters from "./counters"
import NavBar from "./navBar"

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ]
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0
      return c
    })

    this.setState({ counters })
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].value++
    this.setState({ counters })
  }

  handleDecrement  = counter => {
    if(counter.value === 0){
      return 
    }
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].value--
    this.setState({ counters })
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId)
    this.setState({ counters })
  }
  render() {
    return (

      <>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <main>
          <Counters 
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
           />
        </main>
      </>
    );
  }
}

export default App;



