import { Component } from 'react';

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date().toLocaleTimeString()
        }
        this.intervale = () => this.setState({date: new Date().toLocaleTimeString()})
    }

    render() {
        return <h2>{this.state.date}</h2>;
    }

    componentDidMount() {
        return setInterval(this.intervale, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
}


export default Clock;