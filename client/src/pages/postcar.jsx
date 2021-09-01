import React,{useState} from 'react'
import axios from 'axios'
import {POSTCAR_URL} from '../globle'
function PostCar (){

    const [PostCarbody,SetPostCarbody]=useState({
        "model": "2021 BMW M4 Competition",
        "Catagory": "luxury sports car",
        "Performance": "503hp 3830lbs 8-speed auto/manuel",
        "brand": "BMW",
        "price":76500,
        "intro": "Great car!",
        
        "photo": "https://www.carscoops.com/wp-content/uploads/webp/2020/09/2021-bmw-m4-coupe-monaco-1024x555.webp"
})

async function postcar(e){
     e.preventDefault()
     try{
         console.log(PostCarbody)
     let res = await axios.post(`${POSTCAR_URL}`,PostCarbody,
     {headers:{ 'Content-Type': 'application/json'}})
     console.log(res)}catch(error){
         console.log(error)
     }
     
 }


 const handlemodelChange = (e)=>{
    let tempbody=PostCarbody
    tempbody.model=e.target.value
    SetPostCarbody(tempbody)
   
}
const handlepriceChange = (e)=>{
    let tempbody=PostCarbody
    tempbody.price=Number.parseInt(e.target.value)
    SetPostCarbody(tempbody)
   
}
const handleCatagoryChange = (e)=>{
    let tempbody=PostCarbody
    tempbody.Catagory=e.target.value
    SetPostCarbody(tempbody)
   
}
const handlePerformanceChange = (e)=>{
    let tempbody=PostCarbody
    tempbody.Performance=e.target.value
    SetPostCarbody(tempbody)
   
}
const handlebrandChange = (e)=>{
    let tempbody=PostCarbody
    tempbody.brand=e.target.value
    SetPostCarbody(tempbody)
   
}
const handleintroChange = (e)=>{
    let tempbody=PostCarbody
    tempbody.intro=e.target.value
    SetPostCarbody(tempbody)
   
}
const handlephotoChange = (e)=>{
    let tempbody=PostCarbody
    tempbody.photo=e.target.value
    SetPostCarbody(tempbody)
   
}
return <div>
    

<form onSubmit={postcar} className="form">
<h2>Post your Car</h2> 
<input  type="text" onChange={handlemodelChange} placeholder="model" />
<input  type="text" onChange={handlepriceChange} placeholder="price" />
<input  type="text" onChange={handleCatagoryChange} placeholder="Catagory" />
<input  type="text" onChange={handlePerformanceChange} placeholder="performance" />
<input  type="text" onChange={handlebrandChange} placeholder="brand" />
<input  type="text" onChange={handleintroChange} placeholder="intro" />
<input  type="text" onChange={handlephotoChange} placeholder="photo" />
    <button>Submit</button>
</form>



</div>
}
export default PostCar