import React, {Component} from "react";

class PersonCard extends Component {

    //Declare constructor to override our default constructor so that we can initially set the state object 
    constructor(props) {
        //super gives us all the functionality of the default constructor that comes with Component
        super(props);
        //now we can set our state object 
        this.state = {
            age: this.props.person.age
        }
    }
    birthday = () => {
        this.setState({ age: this.state.age + 1 })
    }

    render() {
        return (
            <div>
                <h1>{this.props.person.lastName}, {this.props.person.firstName}</h1>
                <p>Age: {this.state.age}</p> 
                <p>Hair Color: {this.props.person.hairColor}</p>
                <button onClick={ () => this.birthday() }>Happy Birthday!</button>
            </div>
        );
    }
}

export default PersonCard;