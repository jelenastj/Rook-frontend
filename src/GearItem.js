import React from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import { IconContext } from "react-icons";
import { FaWeight } from "react-icons/fa";

const GearItem = (props) => {


  const image = props.gear.geartype
  let num = `${image}.png`
  console.log(num)

  return (
    // <div className="single-gear">
      <div className="container">
      <div className='gear-coll-page'>
      <div class="wavecard">
        <img class="wavecard-image"src="./images/matheus-bandoch-mkdI8JN6sDU-unsplash-2.jpg" alt="image"/>
        <div class="wavecard-body">
        <span className="gear-name">{props.gear.name}</span><h4 style={{textTransform: 'uppercase'}}>{props.gear.brand}</h4>
      
        <h4>< FaWeight> </FaWeight> {props.gear.weight} oz</h4>
      
      
      {/* </div> */}
 


      {/* {
        !props.showAddGearBtn
          ?
          <IconContext.Provider value={{ size: "2em"}}>
          <button className="add-gear-to-pack-btn"
            key={props.gear.id}
            onClick={() => props.handleClick(props.gear)}>
               < IoIosAddCircleOutline></IoIosAddCircleOutline></button>
               </IconContext.Provider>
          :
          null
      } */}

      {
        props.showDelete
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
          : null
      }

    </div >  
    </div>
    </div>
    </div>
  )
}

export default GearItem