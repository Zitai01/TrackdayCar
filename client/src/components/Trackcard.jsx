import React from 'react'
import '../App.css'
import logo1 from '../data/eaglescanyon.png'
import logo2 from '../data/Drivewayaustin.png'

function TrackCard(props){
    const {track} =props
    const logos =[logo1,logo2]
    console.log(props)
    return (
        <div className='track-card' >
            
            <h3>{track.name}</h3>
            <div><img src={logos[track.id]} alt='logo'  className="trackimgs" /></div>
                <div>{track.Description}</div>
            <div className="website">Website:{track.links}</div>
        </div>


    )







}
export default TrackCard