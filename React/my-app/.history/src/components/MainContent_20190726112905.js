import React from "react"

function MainContent(){
    return (
        <div>
            <ul>
                <input type="checkbox" name="vehicle1" value="Bike" /> I have a bike
                <br></br>
                <input type="checkbox" name="vehicle2" value="Car" /> I have a car
                <br></br>
                <input type="checkbox" name="vehicle3" value="Boat" /> I have a boat
            </ul>
        </div>
    )
}

export default MainContent