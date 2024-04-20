import React from "react";
import Lottie from 'lottie-react';
import animationData from './json/bot.json'; 
import "./css/index.css" ; 

function Main() {
    return (
        <>
        <div className="lottie">
            
            <Lottie animationData={animationData} />
            </div>
        </>
    );
}

export default Main;
