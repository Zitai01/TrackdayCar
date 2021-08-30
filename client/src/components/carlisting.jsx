import React from 'react' 
import CarCard from './Carcard'

function Carlisting (props){
    const carListings = props.cars.map((car)=>{
        return (
            <CarCard 
                key={car._id}
                car={car}
            
            
            />
        )

    })
    

}
export default Carlisting