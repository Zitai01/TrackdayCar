import Comment from '../components/comment'

import React, {useEffect,useState} from 'react'

function CarPage(props){
    const [Car,setCar]=useState(null)
    useEffect(() => {
        async function findcar() {
          try {
            let selectedCars = props.cars.find(
              (car) => car._id === props.match.params._id
            )
    
            setCar(selectedCars)
            //console.log(props.match.params._id)
            return <div></div>
          } catch (err) {
            console.log(err)
          }
        }
        findcar()
        
      })


    return Car ?(<div>
        <div>{Car.model}</div>
        <div><img src={Car.photo} alt="pics" /></div>
        
        <Comment   Car={Car}  />
    
    </div>):null
}
export default CarPage