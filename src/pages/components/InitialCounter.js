import React, { Component } from "react";

class InitialCounter extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    increment(){
        //if(this.state.count < 10){
        this.setState({
            count:this.state.count + 1
        })
   // }
    }
    decrement(){
     //   if(this.state.count > 0){
        this.setState({
            count:this.state.count - 1
        })
    //}
    }

    render() {
        return <div>
            <p>{this.state.count}</p>
            <button onClick={() => this.increment()}>Add</button>
            <button onClick={() => this.decrement()}>Sub</button>
        </div>
    }

};

export default InitialCounter;