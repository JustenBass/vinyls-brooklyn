import React, {useState} from "react";
import PostIt from "./PostIt";
import AddForm from "./AddForm";
import Vinyl from "./VinylCard";

function AddUsed({vinylData, handleAddVinyl}){

    const onlyUsedVinylsToDisplay =
    vinylData.filter((vinyl) => vinyl.used ? true : vinyl.used)

    return(
    <>
    <PostIt />

    <AddForm
    handleAddVinyl={handleAddVinyl}
    />

    {onlyUsedVinylsToDisplay.map((vinyl) => (
    <Vinyl
    key={vinyl.id}
    vinylData={vinyl}
    />
    ))}
    </>
)}




export default AddUsed