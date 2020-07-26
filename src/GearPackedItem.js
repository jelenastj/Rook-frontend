import React from 'react';

const GearPackedItem = (props) => {
    return (

        <div className="single-gear" >

            <p>{props.gear.name} by {props.gear.brand}</p>
            <p>{props.gear.notes}</p>
            <p>Weight: {props.gear.weight}</p>


            <button
                className="delete-gear-btn"
                onClick={(e) => {
                    e.stopPropagation();
                    props.deleteGear(props.gear)
                    }
                }
            >
                Remove
              </button>

        </div>
    )
}
export default GearPackedItem