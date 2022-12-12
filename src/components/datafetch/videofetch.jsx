import React, { useEffect, useState, useRef} from "react";
import './media-container.css';


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