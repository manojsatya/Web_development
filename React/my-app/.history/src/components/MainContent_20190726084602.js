import React from "react"

function MainContent(){
    return (
        <div>
            <input type="checkbox" name="vehicle1" value="Bike" /> I have a bike
            <input type="checkbox" name="vehicle2" value="Car" /> I have a car
            <input type="checkbox" name="vehicle3" value="Boat" checked /> I have a boat<br>
        </div>
    )
}

export default MainContent