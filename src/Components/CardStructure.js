import React from "react"

export default function CardStructure(props){
    let statusDisplay;
    if (props.slots === 0){
        statusDisplay = "SOLD OUT"
    } else if (props.slots != 0){
        statusDisplay = "AVAILABLE"
    } else if (props.location === "•Online"){
        statusDisplay = "ONLINE"
    }
    else {
        statusDisplay = "N/A"
    }

    return(
        <> 
            <div className="cards">
                <div className="cards--image">
                    <img src={props.img} alt="Images"/>
                    {statusDisplay && <h4 className="cards--image__status">{statusDisplay}</h4>}
                </div>
                <div className="cards--text">
                    <p className="reviews"> {props.reviews} <span className="orders">({props.orders}){props.location}</span></p>
                    <p className="title">{props.title}</p>
                    <p className="pricing"> <span className="price">{props.price}</span>/ person</p>
                </div>
            </div>
        </>
    )
}