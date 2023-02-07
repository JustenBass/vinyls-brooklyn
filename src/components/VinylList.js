import React from "react";
import Vinyl from "./Vinyl";

function VinylList({vinylData}){
    let onlyNewVinylsToDispay = vinylData.slice(0, 6)
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