import React from "react";

class Greeting extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: this.props.logined || false
        }
        this.handleToClick = this.handleToClick.bind(this);
    }

    handleToClick = () => {
        console.log(this.state.isLoggedIn, "handleToClick before Update")
        /* this.setState({
             isLoggedIn:!this.state.isLoggedIn
         })*/
        this.setState((prv) => ({
            isLoggedIn: !prv.isLoggedIn
        }))
    }

    render() {
        const { isLoggedIn } = this.state;
        // return isLoggedIn ? <div>Welcome Back!</div> : <div>Please Login!</div>
        //  return isLoggedIn && <div>Welcome Back!</div>
        return <div>
            {
                isLoggedIn ? <div>ON</div> : <div>OFF</div>
            }
            <button onClick={() => this.handleToClick()}>Login</button>
            <input type="text"/>
        </div>
        /* const isLoggined = this.props.logined;
         if (isLoggined) {
             return <div>welcome back!</div>
         } else {
             return <div>Please Login!</div>
         }*/

    }

};

export default Greeting;