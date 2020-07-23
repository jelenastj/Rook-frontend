import React from 'react';
import GearItem from './GearItem';

 const GearPacked = (props) => {
    return (
          <div className="gear-packed">
            
              <div>
               <h1>PACKED </h1>
                {/* {props.tripsgears.map(gear => < GearItem key={gear.id} gear={gear} handleClick= {props.handleClick} deleteGear={props.deleteGear}/>)} */}
              </div>
          </div>
      )
    }
    export default GearPacked;