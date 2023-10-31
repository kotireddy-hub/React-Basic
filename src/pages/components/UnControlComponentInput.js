import React, { useRef } from "react";
import UseStateFun from "./UseStateFun";


/*const UnControlComponentInput = () => {
    const inputRef = useRef(null);

    const handleToSubmit = (e) => {
        e.preventDefault();
        console.log("hello",inputRef.current.value);
    }

    return <form onSubmit={handleToSubmit}>
        <input
            type={"text"}
            ref={inputRef}
            name={"inputRef"}
        />
        <button type="submit">Click</button>
    </form>

};*/

class UnControlComponentInput extends React.Component{
    constructor(){
        super();
        this.inputRef=React.createRef();
        this.handleToSubmit = this.handleToSubmit.bind(this);
    }

    handleToSubmit(e) {
        e.preventDefault();
        console.log("hello",this.inputRef.current.value)
    }

    render(){
        return <form onSubmit={this.handleToSubmit}>
            <input
            type={"text"}
            name={"inputRef"}
            ref={this.inputRef}
            />
            <button type="submit">Click</button>
            <UseStateFun />
        </form>
    }
}

export default UnControlComponentInput;