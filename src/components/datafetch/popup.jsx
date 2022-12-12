import React from "react";
import ReactDom from 'react-dom'



export default function Popup ({open,children,onClose}){
    
    const Modal_Style={
        
        position: 'fixed',
        left:'20%',
        top:'10%',
        tranform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        padding: '10px',
        zIndex: 1000,
        borderRadius: '1.5%'
        
    }


    const OVERLAY_Style={
       
        position: 'fixed',
        top:0,
        left:0,
        right:0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,.7)',
        zIndex: 1000
    }



    if(!open) return null
    
    
        return ReactDom.createPortal(
            <>
            <div style={OVERLAY_Style} /> 
            <div style={Modal_Style}>
            <button  onClick={onClose}>X</button>
                {children}
            </div>
            </>,
            document.getElementById('portal')
            
        )
   

   

 
   
}