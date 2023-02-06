import React, {useState} from "react";

function Vinyl({vinylData}){
    const {name, image, artist, price} = vinylData

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
        <div className="vinyl-card">
            <span>
                <h1>{name}</h1>
                <hr/>

                <h3>{artist}</h3>

                <img
                className="vinly-image-front"
                onClick={handleVinylCoverClick}
                src={isFrontCover ? image.frontCover : image.backCover}
                alt="covers"
                />

                <h3>${price}</h3>

                <button onClick={handleInCartClick}>
                    {vinylData.comingSoon ? "COMING SOON" :
                    inCart ? 'See you soon! 🎧' : 'Buy Me!'}
                </button>
            </span>
        </div>
        </>
    )
}

export default Vinyl