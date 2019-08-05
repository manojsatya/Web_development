import React from "react"

function MainContent(){
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if(hours < 12){
        timeOfDay = "morning";
    }else if (hours > 12 && hours < 17) {
        timeOfDay = "afternoon"
    }else{
        timeOfDay = "night"
    }
    return (
        <h1 style = {"color:blue"}>Good {timeOfDay} Manoj</h1>
    )
}

export default MainContent