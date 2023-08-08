import React from "react"

export default function CardContent(props){
    return(
        <> 
            <div className="cards">
                <div className="cards--image">
                    <img src={props.img} alt="Swimmer"/>
                    <h4 className="cards--image__status"> {props.availability} </h4>
                </div>
                <div className="cards--text">
                    <p className="reviews"> {props.reviews} <span className="orders">{props.orders}</span></p>
                    <p className="title">{props.title}</p>
                    <p className="pricing"> <span className="price">{props.price}</span>/ person</p>
                </div>
            </div>
        </>
    )
}