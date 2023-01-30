import { Component } from "react";

class AppCounterClass extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }

    render() {
        return <>
            <h3>Valor(Class): {this.state.counter}</h3>

            <button onClick={() => {

                this.setState({
                    counter: this.state.counter - 1
                })
            }}>-1</button>

            <button onClick={() => {
                this.setState({
                    counter: this.state.counter + 1
                })
            }}>+1</button>
            <br></br>
        </>
    }
}

export default AppCounterClass