import React, { useEffect, useState } from "react";

export default function VideoFetch(){
    const [videoArray,setvideoArray] = useState([])

    useEffect(()=>{
        async function fetchData(){
       await fetch("https://api.pexels.com/videos/search?query=nature&per_page=25"
       ,{
            headers:{
                Authorization: "563492ad6f91700001000001620506b875614302bd8f6e133d82d091"
            }
        })
        .then((res)=>res.json())
        .then((data)=>setvideoArray(data.videos))
        }
        fetchData()
        
    },[])

    const  videoMap= videoArray.map((i)=>{
        console.log(i)
        const url = i.video_files[2].link
       return(
        <video width="320" height="240" controls> 
        <source src={url} type="video/mp4" />
        </video>
       )


   })
    return(
        <>
        {videoMap}
        </>
    )
}