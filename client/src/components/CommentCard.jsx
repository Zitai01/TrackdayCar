import axios from 'axios'
import React from 'react'
import {DELETECOMMENT_URL} from '../globle'
function CommentCard(props){

async function deletecomment(commentId){
    
    let res = await axios.delete(`${DELETECOMMENT_URL}${commentId}`)
    console.log(res)
    window.location.reload(false)
}


return <div className='commentcard'>
    <h2>{props.comment.title}</h2>
    <p>{props.comment.comments}</p>
    <div className="author">
    <div>Post by: {props.comment.username} <button className="delete" onClick={()=>deletecomment(props.comment._id)}>Delete</button></div>
    
    </div>
  



</div>


}
export default CommentCard