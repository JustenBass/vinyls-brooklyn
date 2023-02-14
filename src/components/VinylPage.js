import React, {useState} from "react";
import VinylCard from "./VinylCard";

function VinylPage({vinylData}){
    const [lessThanTwenty, setLessThanTwenty] = useState(false)

    const onlyNewVinylsToDisplay =
    vinylData.filter((vinyl) => vinyl.used ? !vinyl.used : true)
    .filter((vinly) => lessThanTwenty ? vinly.price < 20 : true)

    function lessThanTwentyClick(){
        setLessThanTwenty((lessThanTwenty) => !lessThanTwenty)
    }

    return(
        <>
        <div className="about-header" onClick={lessThanTwentyClick}>
            <h1>Click To See Vinyls under $20</h1>
        </div>

        {onlyNewVinylsToDisplay.map((vinyl) => (
            <VinylCard
            key={vinyl.id}
            vinylData={vinyl}
            />
        ))}
        </>
    )
}

export default VinylPage