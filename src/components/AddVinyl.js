import React from "react";
import AddForm from "./AddForm";
import Vinyl from "./Vinyl";

function AddVinyl({vinylData, handleAddVinyl}){
    let onlyUsedVinylsToDisplay =
    vinylData.slice(6, vinylData.length)

    return(
        <div>
            <AddForm
            handleAddVinyl={handleAddVinyl}
            vinylData={vinylData}
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