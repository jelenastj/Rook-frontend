import React from 'react';
import { FaWeight } from "react-icons/fa";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { IconContext } from "react-icons";


const GearPackedItem = (props) => {
    return (

        // <div className="single-gear">
        // <div className="container">
        <div class="cards-list">
            <div class="homecard">

                <h4 >{props.gear.name} by {props.gear.brand}</h4>
                <h4>< FaWeight> </FaWeight> {props.gear.weight} oz</h4>

                {/* </div > */}
                <IconContext.Provider value={{ size: "2em" }}>
                    <button
                        className="delete-gear-btn"
                        onClick={(e) => {
                            e.stopPropagation();
                            props.deleteGear(props.gear)
                        }
                    }>
                        < IoIosRemoveCircleOutline> </IoIosRemoveCircleOutline></button>
                </IconContext.Provider>
            </div>
        </div>
    )
}
export default GearPackedItem