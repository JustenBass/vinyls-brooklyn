import React, {useState} from "react";

function Vinyl({allDataForVinyls}){
    const {name, image, artist, price} = allDataForVinyls

    const [isFrontCover, setIsFrontCover] = useState(true)

    const [inCart, setInCart] = useState(false)

    function handleVinylCoverClick(){
        setIsFrontCover((isFrontCover) => !isFrontCover)
    }

    function handleInCartClick(){
        setInCart((inCart) => !inCart)
    }

    return(
        <>
        <div>
            <span>
                <h1>{name}</h1>
                <hr/>

                <h3>{artist}</h3>

                <img
                onClick={handleVinylCoverClick}
                src={isFrontCover ? image.frontCover : image.backCover}
                alt=""
                />

                <h3>${price}</h3>

                <button onClick={handleInCartClick}>
                    {allDataForVinyls.comingSoon ? "COMING SOON" :
                    inCart ? 'See you soon! 🎧' : 'Buy Me!'}
                </button>
            </span>
        </div>
        </>
    )
}

export default Vinyl