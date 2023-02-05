import React, {useEffect, useState} from "react";

function VinylList(){
    const[vinylData, setVinylData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/vinyls')
        .then((r) => r.json())
        .then((data) => setVinylData(data))
    }, [])

    
    return(
        <h1>VinylList Test</h1>
    )
}

export default VinylList