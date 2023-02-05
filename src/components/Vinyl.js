import React from "react";

function Vinyl({allDataForVinyls}){
    const {name, image, artist, price} = allDataForVinyls
    return(
        <>
        <div>
            <span>
                <h1>{name}</h1>
                <hr/>

                <h3>{artist}</h3>

                <img src={image.frontCover} alt="vinyl-covers"/>

                <h3>{price}</h3>

                <button>Buy Me!</button>
            </span>
        </div>
        </>
    )
}

export default Vinyl