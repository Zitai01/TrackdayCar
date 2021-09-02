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
        <div className="carspec">
        
        <div><img src={Car.photo} alt="pics" className="bigimgs" /></div>
        <div>
        <h1>{Car.model}</h1>
        <div>{Car.intro}</div>
        <div>{Car.Performance}</div>
        <div>Starting at:${Car.price}</div>
        </div>
        
        </div>
        <Comment   Car={Car}  />
    
    </div>):null
}
export default CarPage