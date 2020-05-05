import React from 'react';
import './Tips.css';
import hand_wash from './images/hand_wash.png'
import healthcare from './images/healthcare.png'
import house from './images/house.png'
import shakehands from './images/shakehands.png'


function Tips() {
    return(
        <div className="tips">
            <div className="hashwash">
                <img src={hand_wash} alt="hand-wash"></img>
            </div>
            <div className="healthcare">
                <img src={healthcare} alt="healthcare"></img>
            </div>
            <div className="shakehands">
                <img src={shakehands} alt="shakehands"></img>
            </div>
            <div className="house">
                <img src={house} alt="house"></img>
            </div>
        </div>
    );
}

export default Tips;