import React, {useState} from "react";
import Vinyl from "./Vinyl";

function VinylList({vinylData}){
    const [lessThanTwenty, setLessThanTwenty] = useState(false)

    let onlyNewVinylsToDispay = vinylData.slice(0, 6)
    .filter((vinly) => lessThanTwenty ? vinly.price < 20 : vinly.price)

    function handleFilterLessThanClick(){
        setLessThanTwenty((lessThanTwenty) => !lessThanTwenty)
    }

    return(
        <>
        <div
        className="about-header"
        onClick={handleFilterLessThanClick}
        >
            <h1>Click To See Vinyls under $20</h1>
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