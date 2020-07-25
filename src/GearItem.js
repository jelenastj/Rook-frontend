import React from 'react';

const GearItem = (props) => {
    return (
        
        <div className="single-gear" key={props.gear.id}
        onClick={() => props.handleClick(props.gear)}>
            
            <p>{props.gear.name} by {props.gear.brand}</p>
            <p>{props.gear.notes}</p>
            <p>Weight: {props.gear.weight}</p>
            
            {props.showDelete
            ?
            <button
            className="ui mini red button"
            onClick={(e) => {
              e.stopPropagation(); 
              props.deleteGear(props.gear)}
            }
            >
                Delete
              </button>
          : null}
        </div>
    )
}
export default GearItem