import React from "react";
import AddForm from "./AddForm";
import Vinyl from "./Vinyl";

function AddVinyl({vinylData, handleAddVinyl}){
    let onlyUsedVinylsToDisplay =
    vinylData.slice(6, vinylData.length)

    return(
        <>
        <div className="about-header">
            <h1>Sell Your Old Treasures For Others To Buy!</h1>
        </div>

        <div className="about-text-area">
            <center>
                <article>
                    <small>
                        <b>
                        Do you have any vinyls that you've loved for years but need to get rid
                        of to make room for your new future collections? Or have you been looking
                        for a special vinyl for awhile now and just can't seem find and get your hands
                        on it?
                        </b>
                    </small>
                </article>
            </center>
        </div>
        <hr className="underline-add-vinyl-text"/>

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
        </>
    )
}

export default AddVinyl