import React from "react"
import CardContent from "./CardsContent"
import Swimmer from "../Images/swimmer.png"
import Wedding from "../Images/wedding.png"
import Jak from "../Images/jak.jpg"


export default function Card(){
    return(
        <>
        <div className="cards--holder">
            <CardContent
                img={Swimmer}
                availability="SOLD OUT"
                reviews="5.0"
                orders="(6)•USA"
                title="Life lessons with Katie Zafarees"
                price="From $136"
            />
            <CardContent
                img={Wedding}
                availability="AVAILABLE"
                reviews="4.8"
                orders="(32)•USA"
                title="Wedding photography lessons"
                price="From $72"
            />
            <CardContent
                img={Jak}
                availability="SOLD OUT"
                reviews="5.0"
                orders="(132)•PH"
                title="Anti Selos Lessons"
                price="From $20"
            />
            </div>
        </>
    )
}

