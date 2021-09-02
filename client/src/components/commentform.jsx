import React, { useState } from 'react'
import axios from 'axios'
import {POSTCOMMENT_URL} from '../globle'

function CommentForm (props){
    const [Postbody,SetPostbody]=useState({
        "username":"Default",
        "comments":"Hello car",
        "title":"Unknown title",
        "car_id":props.carId


    })

    
    

    async function postcomment(e){
       // e.preventDefault()
        try{
            console.log(Postbody)
        let res = await axios.post(`${POSTCOMMENT_URL}`,Postbody,
        {headers:{ 'Content-Type': 'application/json'}})
        console.log(res)}catch(error){
            console.log(error)
        }
        
    }




const handlenameChange = (e)=>{
    let tempbody=Postbody
    tempbody.username=e.target.value
    SetPostbody(tempbody)
   
}
const handletitleChange = (e)=>{
    let tempbody=Postbody
    tempbody.title=e.target.value
    SetPostbody(tempbody)
   
}
const handlecommentsChange = (e)=>{
    let tempbody=Postbody
    tempbody.comments=e.target.value
    SetPostbody(tempbody)
   
}

return (  
    <div className="commentform">

    <form onSubmit={postcomment} className="form">
    <h2>Post your comment</h2> 
    <input  type="text" onChange={handlenameChange} placeholder="Username" />
    <input type="text" onChange={handletitleChange} placeholder="Title" />
    <input type="text" rows={4} onChange={handlecommentsChange} placeholder="comments" className="inputcomments" />
   
        <button>Submit</button>
    </form>


    </div>
)
}

export default CommentForm