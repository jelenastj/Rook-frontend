import {testState} from './atoms/TripsState';
import { useRecoilState } from "recoil";

//  const CreateTripForm = () => {
//   const [test, setTest] = useRecoilState(testState)

//   const [tripId, setTripId] = useState(null)

//   // function changeTest() {
//   //   setTest("hello")
//   // }

//   return ( 
//     <div>
//       <button onClick={changeTest}>Click me</button>
//       {console.log(test)}
//     </div>
//   )
// }

// export default CreateTripForm;

 // addToGearPack = (gear) => {
  //   const trip = this.state.currentTrip
  //   console.log(trip)
  //   // this.addGear(gear)
  //   trip.gears = this.state.gears

    // fetch(` http://localhost:3000/api/v1/trips/${trip.id}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //     Authorization: `Bearer ${localStorage.getItem("token")}`,
    //   },
    //   body: JSON.stringify(trip),
    // }).then(r => r.json())
    //   .then(data => {
    //     console.log(data)
    //   })


  fetch(` http://localhost:3000/api/v1/trips/${trip.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({ newGears }),
  }).then(r => r.json())
    .then(updatedTrip => {
      this.seState({ currentTrip: updatedTrip })
    })

}