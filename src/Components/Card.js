import React from "react"
import CardData from "./CardData"
import CardStructure from "./CardStructure"

export default function Card(){
    const CardElements = CardData.map(items => {
        return (
            <CardStructure
                img = {items.img}
                availability = {items.availability}
                reviews = {items.reviews}
                orders = {items.orders}
                title = {items.title}
                price = {items.price}
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


