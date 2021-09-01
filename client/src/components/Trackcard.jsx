import React from 'react'
import '../App.css'
function TrackCard(props){
    
    return (
        <div className='car-card' >
            <img style={{ display: 'block' }} src={props.photo} alt={'trackphoto'} className="imgs"/>
            <h3>{props.name}</h3>
        </div>


    )







}
export default TrackCard