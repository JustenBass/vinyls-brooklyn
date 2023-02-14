import React, {useState} from "react";

function VinylCard({vinylData}){
    const {name, frontCover, backCover, artist, price} = vinylData
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
                <hr className="underline"/>

                <h3>{artist}</h3>

                <img
                className="vinly-image-front"
                onClick={handleVinylCoverClick}
                src={isFrontCover ? frontCover : backCover}
                alt="covers"
                />

                <h3>${price}</h3>

                <button
                className="button-black"
                onClick={handleInCartClick}
                >
                {vinylData.comingSoon ? "COMING SOON" :
                vinylData.soldOut ? "SOLD OUT" :
                inCart ? 'See you soon! 🎧' : 'Buy Me!'}
                </button>
            </span>
        </div>
        </>
    )
}

export default VinylCard