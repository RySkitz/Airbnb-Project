import React from "react"

const Logo = "images/airbnb.png"

export default function Navbar(){
    return(
        <>
            <nav className="navbar">  
                <img src={Logo} className="navbar--logo" alt="Airbnb Logo"/>
            </nav>
        </>
    )
}