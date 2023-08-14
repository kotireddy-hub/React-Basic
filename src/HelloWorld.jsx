import React, { Component } from "react";

const welcomeMessage = "Hello World";


class HelloWorld extends Component{
    render(){
        return <div>{welcomeMessage}
            <ul>
                {
                    this.props.data.map((item)=>(
                    <li>{item}</li>
                    ))
                }
            </ul>
        </div>
    }
}

export default HelloWorld;
