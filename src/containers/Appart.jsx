import { Component } from "react";
import data from "../data.json";
import List from "../components/List/List";

class Appart extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            value: "test",
            filteredData: data
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
            filteredData: data.filter((appart) =>
            appart.title.toLowerCase().includes(event.target.value.toLowerCase())
      ),
        });
    }

    render() {
        return <div>
                    <input type="text" onChange={this.handleChange}/>
                    <p>{this.state.value}</p>
                </div>
    }
}

export default Appart;
