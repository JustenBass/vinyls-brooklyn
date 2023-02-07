import React from "react";
import AddForm from "./AddForm";
import Vinyl from "./Vinyl";

function AddVinyl({vinylData, handleAddVinyl}){
    let onlyUsedVinylsToDisplay = vinylData.slice(6, vinylData.length)

    return(
        <div>
            <div className="logo">
            <h1>Sell and Buy Vinyls</h1>
        </div>

            <AddForm
            handleAddVinyl={handleAddVinyl}
            />

            {onlyUsedVinylsToDisplay.map((vinyl) => (
            <Vinyl
            key={vinyl.id}
            vinylData={vinyl}
            />
        ))}
        </div>
    )
}

export default AddVinyl