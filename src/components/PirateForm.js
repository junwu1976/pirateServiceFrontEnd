import React, {Component} from 'react';

class PirateForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            age: 0,
            firstName: "",
            lastName: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleFNameChange = this.handleFNameChange.bind(this);
        this.handleLNameChange = this.handleLNameChange.bind(this);
    }

    handleSubmit(evt){
        evt.preventDefault();
        const age = this.state.age;
        const firstName = this.state.firstName.trim();
        const lastName = this.state.lastName.trim();
        if(!firstName || !lastName){
            return 
        }
        this.props.onPirateSubmit({
            age: age,
            firstName: firstName,
            lastName: lastName
        });
        
        this.setState({
            age: 0,
            firstName: "",
            lastName: ""
        });
    }

    handleAgeChange(evt){
        this.setState({age: evt.target.value})
    }

    handleFNameChange(evt){
        this.setState({firstName: evt.target.value})
    }

    handleLNameChange(evt){
        this.setState({lastName: evt.target.value})
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Please input your pirate:</h3>
                <input type="number" value={this.state.author} 
                onChange={this.handleAgeChange} />
                <input type="text" placeholder="first name"
                onChange={this.handleFNameChange}></input>
                <input type="text" placeholder="last name"
                onChange={this.handleLNameChange}></input>
                <input type="submit" value="save" />
            </form>
        )
    }
}

export default PirateForm;