import React, { Component } from 'react';
import DataService from '../services/DataService';

class PirateDetail extends Component{

    constructor(props){
        super(props);
        this.state = {

        }
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleUpdate(event){
        event.preventDefault();
        console.log(this.props.pirate.id);
        console.log(event.target.age.value);
        console.log(event.target.firstName.value);
        console.log(event.target.lastName.value);
        const updatedPirate = {
            "id": this.props.pirate.id,
            "firstName": event.target.firstName.value,
            "lastName": event.target.lastName.value,
            "age": event.target.age.value
        };
        DataService.updatePirate(updatedPirate);
    }

    render(){
        if(!this.props.pirate){
            return (
                <h3>Choose a priate and find the detail.</h3>
            );
        } 
            
        return (
            <>
                <form onSubmit={this.handleUpdate}>
                    <h3>Detail of your pirate:</h3>
                    <input type="number" name="age"
                    defaultValue={this.props.pirate.age} 
                    />
                    <input type="text" placeholder="first name" name = "firstName"
                    defaultValue={this.props.pirate.firstName}></input>
                    <input type="text" placeholder="last name" name = "lastName"
                    defaultValue={this.props.pirate.lastName}></input>
                    <input type="submit" value="update" />
                </form>
            </>
        )
    }

}
export default PirateDetail;
