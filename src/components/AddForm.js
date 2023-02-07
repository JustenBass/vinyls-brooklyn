import React, {useState} from "react";


function AddForm({handleAddVinyl}){

    const[name, setName] = useState("")
    const [artist, setArtist] = useState("")
    const [image, setImage] = useState("")
    const [price, setPrice] = useState("")
    const [soldOut, setSoldOut] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        const newItemData ={
        name: name,
        artist: artist,
        image: image,
        price: price,
        soldOut: soldOut
    }
      fetch(" http://localhost:3001/vinyls", {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(newItemData)
      })
      .then((r) => r.json())
      .then((newItem) => handleAddVinyl(newItem))

    }


    return(
        <div>
             <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Artist:
        <input
          type="text"
          name="artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
      </label>

      <label>
        Cover:
        <input
          type="text"
          name="image"
          src={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </label>

      <label>
        Price:
        <input
          type="text"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>

      <label>
        Sold Out
        <input
          type="text"
          name="soldOut"
          value={soldOut}
          onChange={(e) => setSoldOut(e.target.value)}
        />
      </label>

                <button type="submit">Click To Sell</button>
            </form>

            <div>

            </div>
        </div>
    )
}

export default AddForm