import React from 'react';
import PirateList from '../components/PirateList';
import PirateDetail from '../components/PirateDetail';
import PirateForm from '../components/PirateForm';
import DataService from '../services/DataService';

class PirateContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pirates: [],
            selectedPirate: null
        };
        this.handlePirateSelected = this.handlePirateSelected.bind(this);
        this.handlePirateSubmit = this.handlePirateSubmit.bind(this);
    }

    handlePirateSelected(id){
        this.setState({
            selectedPirate: this.state.pirates.find( pirate => {
                return pirate.id === parseInt(id);
            }
        )})
    }

    componentDidMount(){
        const url = "http://localhost:8080/pirates";
        fetch(url)
        .then(res => res.json())
        .then(result => this.setState({pirates: result}))
        .catch(err => console.err(err))
    }

    handlePirateSubmit(newPirate){
        DataService.addPirates(newPirate);
        const updatedPirates = [...this.state.pirates,newPirate];
        this.setState({
            pirates: updatedPirates
        });
    }

    handlePirateDeleted(pirateID){
        DataService.deletePirate(pirateID);
        // const index = this.state.pirates.findIndex(pirate => pirate.id === pirateID);
        // console.log(index);
    }

    handlePirateAgeChange(age){
        this.setState()
    }

    render(){

        // const selectedPirate = this.state.pirates.find(
        //     pirate => {
        //         return pirate.id === parseInt(this.state.selectedPirateID);
        //     }
        // )

        return(
            <div>
                <h2>All Your Pirates are below:</h2>
                <PirateList
                    pirates={this.state.pirates}
                    onPirateSelected = {this.handlePirateSelected} 
                    onPirateDeleted = {this.handlePirateDeleted}
                />
                <PirateDetail 
                    pirate={this.state.selectedPirate}
                    onPirateAgeChange={this.handlePirateAgeChange} 
                />
                <PirateForm onPirateSubmit={this.handlePirateSubmit}/>
            </div>
        );
    }
}

export default PirateContainer;