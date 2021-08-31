import react, { useState,useEffect } from 'react'
import axios from 'axios'
import {GETCOMMENT_URL} from '../globle'

function Comment (props){
const [Comments,SetComments]= useState(null)
    let Carid = props.Car._id
    useEffect(() => {
        async function getComments() {
          let res = await axios.get(`${GETCOMMENT_URL}${Carid}`)
          console.log(res.data.comments)
          SetComments(res.data.comments)
        }
        getComments()
        console.log(Comments)
        return <div></div>
      }, [])
    return Comments ? (<div>
        <h2>Comments</h2>
        {/* Comment wrap */}
        <div className="commentHolder">
            {Comments[0].comments}
        </div>
    </div>) :null
}

export default Comment