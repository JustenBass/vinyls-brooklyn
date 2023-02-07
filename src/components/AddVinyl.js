import React from "react";
import AddForm from "./AddForm";
import Vinyl from "./Vinyl";

function AddVinyl({vinylData, handleAddVinyl}){



    return(
        <div>
            <h1>Sell Your Vinyls</h1>

            <AddForm
            handleAddVinyl={handleAddVinyl}
            />

            {vinylData.map((vinyl) => (
            <Vinyl
            key={vinyl.id}
            vinylData={vinyl}
            />
        ))}
        </div>
    )
}

export default AddVinyl