import React from "react";
import Vinyl from "./Vinyl";

function VinylList({vinylData}){
    let onlyNewVinylsToDispay = vinylData.slice(0, 6)
    return(
        <>
         <div className="logo">
            <h1>Music To Our Ears</h1>
        </div>

         {onlyNewVinylsToDispay.map((vinyl) => (
            <Vinyl
            key={vinyl.id}
            vinylData={vinyl}
            />
        ))}
        </>
    )
}

export default VinylList