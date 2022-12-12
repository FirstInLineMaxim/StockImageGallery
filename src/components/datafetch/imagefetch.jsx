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
                Authorization: "563492ad6f9170000100000124ab6329ef3741459a9f0df02892ac91"
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
    {imageMap}
    <Popup open={openPopup} onClose={()=>setOpenPopup(false)}>
        <div style={{width:'1000px',height:'600px',background: 'white',border:'0px'}} >
        <h1>{imageIndex.photographer}</h1>
        <img src={imageIndex.src.medium}/>
        </div>
    </Popup>

       <Pagination totalPosts={imageArray.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage}/>
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