import React, {useEffect, useState} from "react";
import Vinyl from "./Vinyl";

function VinylList(){
    const[vinylData, setVinylData] = useState([])


    useEffect(() => {
        fetch('http://localhost:3001/vinyls')
        .then((r) => r.json())
        .then((data) => setVinylData(data))
    }, [])


    return(
        <>
        {vinylData.map((vinyl) => (
            <Vinyl
            key={vinyl.id}
            allDataForVinyls={vinyl}
            />
        ))}
        </>
    )
}

export default VinylList