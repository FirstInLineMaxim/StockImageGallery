import React, { useEffect, useState } from "react";

export default function VideoFetch({query}){
    const [videoArray,setvideoArray] = useState([])

    useEffect(()=>{
        async function fetchData(){
       await fetch(`https://api.pexels.com/videos/search?query=${query}&per_page=25`
       ,{
            headers:{
                Authorization: "563492ad6f9170000100000124ab6329ef3741459a9f0df02892ac91"
            }
        })
        .then((res)=>res.json())
        .then((data)=>setvideoArray(data.videos))
        }
        fetchData()
        
    },[query])

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