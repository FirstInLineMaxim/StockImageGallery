import React, { useEffect, useState } from "react";

export default function VideoFetch(){
    const [videoArray,setvideoArray] = useState([])

    useEffect(()=>{
        async function fetchData(){
       await fetch("https://api.pexels.com/videos/search?query=nature&per_page=25"
       ,{
            headers:{
                Authorization: "563492ad6f917000010000018d6e567481954be7adb58821c258f84b"
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