import React from "react"

const Group = "images/group.png"

export default function Hero(){
    return(
        <>
            <div className="hero--container">
                <div className="hero--container__image">
                    <img src={Group} alt="Pictures of people"/>
                </div>
                <div className="hero--container__text">
                    <h1> Online Experiences </h1>
                    <p> Join unique interactive activities led by one-of-a-kind hosts—all without leaving home. </p>
                </div>
            </div>
        </>
    )
};