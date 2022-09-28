import { Component } from "react";

class Test extends Component{

    constructor(props){
        super(props);
        this.state = {
            parameter: "test"
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({parameter: event.target.value})
    }

    render() {
        return <div>
                    <input type="text" onChange={this.handleChange}/>
                    <p>{this.state.parameter}</p>
                </div>
       
    }
}

export default Test;