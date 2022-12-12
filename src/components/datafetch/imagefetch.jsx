import React, { useEffect, useState } from "react";

export default function ImageFetch({query}){
    const [imageArray,setimageArray] = useState([])

    useEffect(()=>{
        async function fetchData(){
       await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=25`,{
            headers:{
                Authorization: "563492ad6f91700001000001620506b875614302bd8f6e133d82d091"
            }
        })
        .then((res)=>res.json())
        .then((data)=>setimageArray(data.photos))
        }
        fetchData()
        
    },[query])
    const  imageMap= imageArray.map((i)=>{
        console.log(i)
        console.log(i.src.large)
       return(
        <img src={i.src.tiny} />
       )
    })
if(imageArray)
    return(
        <>
       {imageMap}
        </>
    )
}