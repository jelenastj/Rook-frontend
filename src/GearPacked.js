import React from 'react';
import GearPackedItem from './GearPackedItem';


const GearPacked = (props) => {

  function mapGears() {

    const gears = props.showCurrentTrip.gears
    return gears && gears.map(gear => {
      return <GearPackedItem
        key={Math.random()}
        gear={gear}
        deleteFromGearPack={props.deleteFromGearPack} />
    })
  }
  return (
    <div className="gear-packed">
      {mapGears()}
    </div>
  )
}
export default GearPacked;