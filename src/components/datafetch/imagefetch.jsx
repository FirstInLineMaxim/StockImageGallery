import React, { useEffect, useState } from "react";
import Pagination from "./pagination";
import Popup from "./popup";

export default function ImageFetch({query}){
    const [openPopup,setOpenPopup] = useState(false)
    const [imageArray,setimageArray] = useState([])
    const [currentPage,setCurrentPage] =useState(1)
    const [postsPerPage,setPostsPerPage] = useState(20)
    const [imageIndex,setImageIndex] = useState()

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
    
    function popup(e){ 
        
        
        setOpenPopup(true)
      }


    const lastPostIndex= currentPage * postsPerPage
    const firstPostIndex = lastPostIndex - postsPerPage
    const currentPosts =  imageArray.slice(firstPostIndex,lastPostIndex)
   
    const  imageMap= currentPosts.map((i,index)=>{

       return(
        <>
       <button style={{background: 'none',border:'0px'}} onClick={()=>{
        setOpenPopup(true)
        setImageIndex(i)
        console.log(i)
       }}> <img src={i.src.tiny} /></button>
   
     </>
       )
    })
    
    if(imageArray&&imageIndex){
    return(
        <>
<<<<<<< HEAD
        <div className="media-container">
            
            <span className="media-grid">
              {imageMap}
                </span>
       </div>
=======
    {imageMap}
    <Popup open={openPopup} onClose={()=>setOpenPopup(false)}>
        <div style={{width:'1000px',height:'600px',background: 'white',border:'0px'}} >
        <h1>{imageIndex.photographer}</h1>
        <img src={imageIndex.src.medium}/>
        </div>
    </Popup>

       <Pagination totalPosts={imageArray.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage}/>
>>>>>>> 1f8919873edb8c5b9c1e4bc7599224cc7f972784
        </>
    )
}

    return(
        <>
        {imageMap}
           <Pagination totalPosts={imageArray.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage}/>
            </>
    )
}