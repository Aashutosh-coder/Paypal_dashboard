import React from 'react'
import filt from "./Filter.css"
function Filter() {
  return (
    <div className='main-filter'>
       <div className='filter-head' >
        Filter by
        </div>
       <div className='filter-nav' >
            <button className='btn active-btn' > Date:Last 90 days</button>
            <button className='btn' > Type </button>
            <button className='btn' > Status</button>
       </div>

       <div className='complete-head' >
        Completed

       </div>
       
    </div>
  )
}

export default Filter
