import React from 'react'
import '../App.css'
function CarCard(props){
    const {car} = props
    return (
        <div className='car-card' onClick={()=>props.showCar(car)}>
            <img style={{ display: 'block' }} src={car.photo} alt={car.model} className="imgs"/>
            <h3>{car.model}</h3>
        </div>


    )







}
export default CarCard