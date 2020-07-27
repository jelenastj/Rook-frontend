import React, { Component } from 'react'
import GearItem from './GearItem'

export default class GearCollection extends Component {

    render() {

        const id = this.props.currentUser.id;
        const gears = this.props.gears.filter((gear) => gear.user_id === id)

        return (
            <div className="all-gears-rendered">
                {gears.map((gear) => <GearItem 
                key={gear.id} 
                gear={gear} 
                handleClick={this.props.handleClick} 
                deleteGear={this.props.deleteGear} 
                showDelete={this.props.showDelete} s
                howAddGearBtn={this.props.showAddGearBtn} />
                )}
            </div>
        )
    }
}
