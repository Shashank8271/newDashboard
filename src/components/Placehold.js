import React from 'react'
import './Placeholder.css'

export default function Placehold() {
  return (
    <>
    <div className="card">
    <h5>Winter Training Schedule</h5>
    <p> 4 weeks | 12 Sessons</p>
  
    <div className="card-body">
      
      <p className="card-text">Some card's content.</p>
    
    </div>
  </div>
  
  <div className="card" aria-hidden="true">

    <div className="card-body">
      <h6 className="card-title placeholder-glow">
        Start date
      </h6>
      <form>

       <div id="InContent"> <input  type="text" /></div>
       <div id="InContent"> <input  type="text" /></div>
       
       <button type='submit'>Update</button>
       
      </form>
    
    <div></div>
    </div>
  </div></>
  )
}
