import React from 'react';
import GearPackedItem from './GearPackedItem';


const GearPacked = (props) => {
  // const id = props.currentUser.id;
  // const trips = props.trips.filter((trip) => trip.user_id === id)

  function mapGears() {

    const gears = props.showCurrentTrip.gears
    return gears && gears.map(gear => {
      return <GearPackedItem key={Math.random()} gear={gear} handleClick={props.handleClick} />
    })
  }

  return (
    <div className="gear-packed">
      {/* <h1>PACKED </h1> */}
      {mapGears()}
    </div>
  )
}
export default GearPacked;