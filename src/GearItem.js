import React from 'react';
import { constSelector } from 'recoil';

const GearItem = (props) => {


  const image = props.gear.geartype
  let num =`${image}.png`
  console.log(num)

  return (
   
    <div className="single-gear">
 <div class="cards_grid container-md">
 <div class="row">
		<div class="col-12 col-sm-6">
			<div class="card">
				<div class="container-fluid">
					<div class="row">
						<div class="card_image_holder col-md-6">
      <img src= {`../public/icons/png/${num}`}/>
      </div>
						<div class="col-md-6"></div>
      <p class="card-text">{props.gear.name} by {props.gear.brand}</p>
      <p>{props.gear.notes}</p>
      <p>Weight: {props.gear.weight}</p>
      <p>type: {props.gear.geartype}</p>
      </div>
      <div class="col-auto d-none d-lg-block"></div>
    
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
					</div>
				</div>
			</div>
		</div>
    
    </div>
    
    
  )
}

export default GearItem