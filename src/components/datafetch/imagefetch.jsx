import React, { useEffect, useState } from "react";

export default function ImageFetch(){
    const [imageArray,setimageArray] = useState([])

    useEffect(()=>{
        async function fetchData(){
       await fetch("https://api.pexels.com/v1/search?query=nature&per_page=25",{
            headers:{
                Authorization: "563492ad6f917000010000018d6e567481954be7adb58821c258f84b"
            }
        })
        .then((res)=>res.json())
        .then((data)=>setimageArray(data.photos))
        }
        fetchData()
        
    },[])
   
    const  imageMap= imageArray.map((i)=>{
        console.log(i)
        console.log(i.src.large)
       return(
        <img src={i.src.tiny} />
       )
    })
    return(
        <>
       {imageMap}
        </>
    )
}