import React from 'react'

const TripItem = (props) => {
    return (
        <div>
            <tr>
      <td>{props.trip.location}</td>
      {/* <td>{props.tran.description}</td>
      <td>{props.tran.category}</td>
      <td>{props.tran.amount}</td> */}
    </tr>

        </div>
    )
}
export default TripItem