import React from "react"
import Swimmer from "../Images/swimmer.png"
import Wedding from "../Images/wedding.png"
import Jak from "../Images/jak.jpg"

export default function Card(){
    return(
        <> <div className="cards--holder">
                <div className="cards">
                    <div className="cards--image">
                        <img src={Swimmer} alt="Swimmer"/>
                        <h4 className="cards--image__status"> SOLD OUT </h4>
                    </div>
                    <div className="cards--text">
                        <p className="reviews"> 5.0 <span className="orders"> (6)•USA</span></p>
                        <p className="title">Life lessons with Katie Zafarees</p>
                        <p className="pricing"> <span className="price">From $136</span>/ person </p>
                    </div>
                </div>
                <div className="cards">
                    <div className="cards--image">
                        <img src={Wedding} alt="Wedding"/>
                        <h4 className="cards--image__status"> AVAILABLE </h4>
                    </div>
                    <div className="cards--text">
                        <p className="reviews"> 5.0 <span className="orders"> (30)•USA</span></p>
                        <p className="title">Learn wedding photography</p>
                        <p className="pricing"> <span className="price">From $136</span>/ person </p>
                    </div>
                </div>
                <div className="cards">
                    <div className="cards--image">
                        <img src={Jak} alt="Bike"/>
                        <h4 className="cards--image__status"> SOLD OUT </h4>
                    </div>
                    <div className="cards--text">
                        <p className="reviews"> 4.8 <span className="orders"> (2)•USA</span></p>
                        <p className="title">Anti-Selos Master Class </p>
                        <p className="pricing"> <span className="price">From $50</span>/ person </p>
                    </div>
                </div>
            </div>    
        </>
    )
}