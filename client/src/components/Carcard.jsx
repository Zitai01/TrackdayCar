import React, { useState } from 'react'
import '../App.css'
function CarCard(props){
    const {car} = props
    const [carborder,setcarBorder] = useState('none')
    const [carmargin,setcarmargin] = useState('50px')
    let carstyle={
        border:`${carborder}`,
        margin: `${carmargin}`

    }
    let setcarstyle=(borders,margins)=>{
        setcarBorder(borders)
        setcarmargin(margins)

    }




    return (
        <div>
        <div
         className='car-card' 
         style={carstyle} 
         onClick={()=>props.showCar(car)} 
         onMouseEnter={()=>setcarstyle('5px solid #add8e6','45px')}
         onMouseLeave={()=>setcarstyle('none','50px') }    >
            <img style={{ display: 'block' }} src={car.photo} alt={car.model} className="imgs"/>
            <h3>{car.model}</h3>
        </div>
        </div>

    )







}
export default CarCard