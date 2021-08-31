import  { useState,useEffect } from 'react'
import axios from 'axios'
import {GETCOMMENT_URL} from '../globle'
import CommentCard from './CommentCard'
import CommentForm from './commentform'
function Comment (props){
    const [Comments,SetComments]= useState(null)
        let Carid = props.Car._id
    useEffect(() => {
        async function getComments() {
          let res = await axios.get(`${GETCOMMENT_URL}${Carid}`)
        
          SetComments(res.data.comments)
        }
        getComments()
        
            return <div></div>
      },[Carid])
       

    return <div>
        <h2>Comments</h2>
        <CommentForm carId={props.Car._id} />
        <div className="commentHolder">
            {Comments?
            Comments.map((comment)=>(
              <CommentCard
              key={comment._id}  
                comment={comment}
                />
            )):null
        
        }
            
            
             </div>
    </div>
}

export default Comment