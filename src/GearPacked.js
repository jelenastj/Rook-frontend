import React from 'react';
import GearItem from './GearItem';

const GearPacked = (props) => {
  // const id = props.currentUser.id;
  // const trips = props.trips.filter((trip) => trip.user_id === id)
  
  function mapGears() {
   
    const gears = props.showCurrentTrip.gears
      return gears && gears.map(gear => {
        return <GearItem key={gear.id} gear={gear} handleClick={props.handleClick} deleteGear={props.deleteGear} />
      })
    }

  return (
    <div className="gear-packed">

      <div>
        <h1>PACKED </h1>
        {mapGears()}
      </div>
    </div>
  )
}
export default GearPacked;