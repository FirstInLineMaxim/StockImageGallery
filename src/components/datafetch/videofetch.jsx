import React, { useEffect, useState, useRef} from "react";
import './media-container.css';


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
        const url = i.video_files[2].link
       return(
        <video controls className="single-video"> 
        <source src={url} type="video/mp4" />
        </video>
       )
   })

    // for video autoplay

//     const ref = useRef(null);
//     const [focus, setFocus] = useState(false);

//     const loop = () => {
//         ref.current.play();
//     }

//     const onEndedLoop = () => {
//         if (focus) loop();
//     }

    

//     useEffect(() => {
// if (focus) loop();
//     }, [focus])
  
    return(
        <>
        <div className="video-container">
            <span className="video-grid">
                {videoMap}
                </span>
        </div>
        
        </>
    )
}