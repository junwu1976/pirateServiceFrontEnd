import React from 'react';

const PirateList = (props) => {

    const lis = props.pirates.map( pirate => {
        const id = pirate.id;
        return (
            <li value={id} key={id}>
                <span>{pirate.firstName}</span>
                <span>
                    <button value={id} key={id} onClick={handleClick}>
                        detail
                    </button>
                </span>
                <span>
                    <button value={id} 
                    key={id} 
                    onClick={handleDelete}>
                        delete
                    </button>
                </span>
            </li>
        )
    })

    function handleClick(event){
        console.log("Get Detail?"+event.target.value);
        props.onPirateSelected(event.target.value);
    }

    function handleDelete(event){
        console.log("You really wish to delete "+event.target.value);
        props.onPirateDeleted(event.target.value);
    }

    return (
        <div>
            <ul id="pirate-selector">
                {lis}
            </ul>
        </div>
    )
}

export default PirateList;