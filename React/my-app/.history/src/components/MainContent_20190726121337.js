import React from "react"

function MainContent(){
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    const styles = {
        color:"blue",
        backgroundColor: "yellow"
    }

    if(hours < 12){
        timeOfDay = "morning";
    }else if (hours > 12 && hours < 17) {
        timeOfDay = "afternoon"
    }else{
        timeOfDay = "night"
    }
    return (
        <h1 style = {styles}>Good {timeOfDay} Manoj</h1>
    )
}

export default MainContent