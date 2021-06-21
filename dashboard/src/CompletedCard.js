import React from 'react'
import './index.css'
const CompletedCard = () => {
    return (
        <div className="card">
            <h5 className="cardtitle">Create a Dahboard concept</h5>
            <input class="cardcheck" type="checkbox" />
            <p className="para4">Occaecat amet duis sint dolore voluptate aliquip occaecat id Lorem laborum ut mollit in minim.
            </p>
            <button className="cardbtn" id="comp">Done</button><h5 className="cardperc">0%</h5>
            <i className="fas fa-chevron-right"></i>
        </div>
    )
}

export default CompletedCard
