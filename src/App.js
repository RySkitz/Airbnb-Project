import React from "react"
import "./index.css"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Card from "./Components/Card"

export default function App(){
    return(
        <>
                <Navbar/>
                <Hero/>
                <Card/>
        </>
    )
}