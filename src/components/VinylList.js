import React from "react";
import Vinyl from "./Vinyl";

function VinylList({vinylData}){
    let onlyNewVinylsToDispay = vinylData.slice(0, 5)
    return(
        <>
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