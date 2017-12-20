import React , { Component } from 'react';
export default class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            counter: 0,
        }
    }
    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        )

        this.setState((prevState,props)=>({
            counter: prevState.counter + props.increment
        }))
    }
    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    tick () {
        this.setState({
            date: new Date()
        })
    }
    
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <h2>It is { this.state.date.toLocaleTimeString() }.</h2>
                {this.state.counter}
            </div>
        )
    }
}