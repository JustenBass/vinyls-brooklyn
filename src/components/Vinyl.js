import React, {useState} from "react";

function Vinyl({allDataForVinyls}){
    const {name, image, artist, price} = allDataForVinyls

    const [inCart, setInCart] = useState(false)

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

                <img src={image.frontCover} alt="vinyl-covers"/>

                <h3>{price}</h3>

                <button onClick={handleInCartClick}>
                    {inCart ? 'See you soon! 🎧' : 'Buy Me!'}
                </button>
            </span>
        </div>
        </>
    )
}

export default Vinyl