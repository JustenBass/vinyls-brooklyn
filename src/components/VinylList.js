import React from "react";
import Vinyl from "./Vinyl";

function VinylList({vinylData}){
    return(
        <>
         {vinylData.map((vinyl) => (
            <Vinyl
            key={vinyl.id}
            vinylData={vinyl}
            />
        ))}
        </>
    )
}

export default VinylList