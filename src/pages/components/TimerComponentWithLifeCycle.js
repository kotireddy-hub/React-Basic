import React from "react";

class TimerComponentWithLifeCycle extends React.Component {

    constructor(props) {
        super();
        this.state = {
            counter: 0
        }
        this.timeId = null;
    };
    componentDidMount() {
        this.timeId = setInterval(() => {
            this.setState({
                counter: this.state.counter + 1
            })
        }, 1000)
    }

 componentDidUpdate() {
        if (this.state.counter === 10) {
            this.setState({
                counter: 0
            });
            this.timeId = setInterval(() => {
                this.setState({
                    counter: this.state.counter + 1
                })
            }, 1000)
            clearInterval(this.timeId)
        }
    }

    componentWillUnmount() {
        clearInterval(this.timeId)
    }

    render() {
        return <div>
            Counter: {this.state.counter}
        </div>
    }

};

export default TimerComponentWithLifeCycle;