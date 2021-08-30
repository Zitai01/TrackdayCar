import React from 'react'
import CarCard from '../components/Carcard'
function Home(props){
    let showCar = (car)=>{
        props.history.push(`/cars/${car._id}`)
    }
    const carListings = props.cars.map((car)=>{
        return (
            <CarCard 
                key={car._id}
                car={car}
                showCar={showCar}
            
            
            />
        )

    })



    return (
        <div>
          <div>
              <form >
            <input type="text" />
            <button>Search</button>
              </form>
            
          </div>
          <div className="listings">{carListings}</div>
        </div>
    )
}
export default Home