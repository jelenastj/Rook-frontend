import React from 'react';

const GearItem = (props) => {
    return (
        <div className="single-gear" key={props.gear.id}
        onClick={() => props.handleClick(props.gear)}>
            
            <p>Name: {props.gear.name}</p>
            <p>Brand: {props.gear.brand}</p>
            <p>Notes: {props.gear.notes}</p>
            <p>Link: {props.gear.url}</p>
            <p>Weight: {props.gear.weight}</p>
            
            <button
                className="ui mini red button"
                onClick={(e) => {
                  e.stopPropagation(); 
                  props.deleteGear(props.gear)}
                }
              >
                x
              </button>
        </div>
    )
}
export default GearItem