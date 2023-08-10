import React from "react"
import CardData from "./CardData"
import CardStructure from "./CardStructure"

export default function Card(){
    const CardElements = CardData.map(items => {
        return (
            <CardStructure
                img = {items.img}
                reviews = {items.reviews}
                orders = {items.orders}
                location = {items.location}
                title = {items.title}
                price = {items.price}
                slots = {items.slots}
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


