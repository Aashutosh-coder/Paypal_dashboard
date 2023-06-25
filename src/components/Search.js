import React from 'react'
import search from "./Search.css"
import srch from "./srch.png"
import dwnld from "./download.png"
function Search() {
  return (
    <div className='srch-outer' >
       <div className="searchbar">
        <img src= {srch} alt="" />
      <input
        className="searchbar-input"
        type="text"
        placeholder="Search by name or email"  
      />
  </div>
  <div>  

       <img className='download' src={dwnld} alt="" />
  </div>
    </div>
  )
}

export default Search
