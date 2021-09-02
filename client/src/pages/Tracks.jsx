import React from 'react'
import TrackCard from '../components/Trackcard'
import trackdata from '../data/tracks'


function Tracks (){
    
    let trackarray = trackdata
    
    const listingtracks= trackarray.map((track)=>{
        return (
            <TrackCard key={track.id} track={track}  />


        )



    })

    return (
    
        
        
    <div className='listings'>
        {listingtracks}


    </div>
    )
}
export default Tracks