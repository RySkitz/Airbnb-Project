import React from "react"
import CardData from "./CardData"
import CardStructure from "./CardStructure"

export default function Card(){
    const CardElements = CardData.map(item => {
        return (
            <CardStructure
                key = {item.id}
                {...item}     
            />
        )
    })

    return(
        <>
        <div className="cards--holder">
            {CardElements}
        </div>
        </>
    )
}


