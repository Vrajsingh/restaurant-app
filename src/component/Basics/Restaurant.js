import React from 'react'
import "./style.css"

const Restaurant = () => {
  return (
    <>
    <div className= "card-container">
        <div className = "card">
            <div className = "card-body">
                <span className =  "card-number card-circle subtle">1</span>
                <span className = "card-author subtle" style={{color: "red"}}>Breakfast</span>
            </div>
        </div>
    </div>
    </>
  )
}

export default Restaurant