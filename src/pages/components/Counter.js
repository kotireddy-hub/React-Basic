import React from "react";

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }


    }
    // this. setState()
    increment() {
        this.setState({
            counter:this.state.counter + 1
        })
    }
    decrement() {
        this.setState({
            counter:this.state.counter - 1
        })
    }


    render() {
        return <div>
            <button onClick={() => { this.increment() }}>+</button>
            <p>{this.state.counter}</p>
            <button onClick={() => { this.decrement() }}>-</button>
        </div>
    }

}

export default Counter;