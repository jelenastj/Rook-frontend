import React from 'react';

const GearItem = (props) => {
  return (

    <div className="single-gear" >

      <p>{props.gear.name} by {props.gear.brand}</p>
      <p>{props.gear.notes}</p>
      <p>Weight: {props.gear.weight}</p>

      {!props.showAddGearBtn
        ?
        <button className="add-gear-to-pack-btn"
          key={props.gear.id}
          onClick={() => props.handleClick(props.gear)} >Add</button>

        :
        null
      }

      {props.showDelete
        ?
        <button
          className="delete-gear-btn"
          onClick={(e) => {
            e.stopPropagation();
            props.deleteGear(props.gear)
          }
          }
        >
          Delete
              </button>
        : null}
    </div>
  )
}
export default GearItem