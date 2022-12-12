import React from "react";

export default function Pagination({totalPosts, postsPerPage,setCurrentPage}){
    
    let pages= []
    
    for(let i =1 ; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pages.push(i)
    }

    
    return(
        <div className="pagination-component">
        {
            pages.map((page,index) =>{
                return <button  onClick={()=>setCurrentPage(page)} key={index} className="pagination-button">{page}</button>
            })
        }
        </div>
    )
}