import React,{useState} from 'react'
import axios from 'axios'
import {POSTCAR_URL} from '../globle'
function PostCar (){

    const [PostCarbody,SetPostCarbody]=useState({
        "Catagory": "luxury sports car",
        "Performance": "503hp 3830lbs 8-speed auto/manuel",
        "brand": "BMW",
        "createdAt": "2021-08-30T19:58:34.648Z",
        "intro": "Great car!",
        "model": "2021 BMW M4 Competition",
        "photo": "https://www.carscoops.com/wp-content/uploads/webp/2020/09/2021-bmw-m4-coupe-monaco-1024x555.webp"
})

async function postcar(e){
    // e.preventDefault()
     try{
         console.log(PostCarbody)
     let res = await axios.post(`${POSTCAR_URL}`,PostCarbody,
     {headers:{ 'Content-Type': 'application/json'}})
     console.log(res)}catch(error){
         console.log(error)
     }
     
 }








return <div></div>
}
export default PostCar