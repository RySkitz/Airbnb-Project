import React from "react"
import airbnb from "../Images/airbnb.png"

export default function Navbar(){
    return(
        <>
            <nav className="navbar">  
                <img src={airbnb} className="navbar--logo" alt="Airbnb Logo"/>
            </nav>
        </>
    )
}