import React from "react";

class ComponentLifeCycle extends React.Component {

    constructor(props) {
        super();
        console.log("Hello 1")
    }
    componentDidMount(){
        console.log("Hello");
    }

    render() {
        return <div>Hello</div>
    }
};

export default ComponentLifeCycle;

