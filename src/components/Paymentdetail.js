import React from 'react'
import image from"./comp.jpeg";
import detail from "./Paymentdetail.css"
function Paymentdetail() {
  return (
    <div className='main-details' >
         <div className="left-sect">
             <img src={image} alt="" />
             
             
             <div className='details' >
                 <div className='comp-name' >Shoopy.com Inc</div>
                 <div className='tranc-details' >June 22 :  Automatic Payment </div>
             </div>
                
            </div>

            <div className='right-sect'>
                - $9.89   
             </div>    


    </div>
  )
}

export default Paymentdetail
