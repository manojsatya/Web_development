import React from "react"

function MainContent(){
    return (
        <form>
            <ul style = "none">
                <li><input type="checkbox" name="vehicle1" value="Bike" /> I have a bike</li>
                <input type="checkbox" name="vehicle2" value="Car" /> I have a car
                <input type="checkbox" name="vehicle3" value="Boat" /> I have a boat
            </ul>
        </form>
    )
}

export default MainContent