import React, {useState} from "react";


function AddForm({handleAddVinyl}){
  const[name, setName] = useState("")
  const [artist, setArtist] = useState("")
  const [frontCover, setFrontCover] = useState("")
  const [backCover, setBackCover] = useState("")
  const [price, setPrice] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    const newItemData ={
      name: name,
      artist: artist,
      frontCover: frontCover,
      backCover: backCover,
      price: price,
      used: true
    }
    setName("")
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
  <>
  <form onSubmit={handleSubmit}>
    <label className="add-form-label">
       <b>Name:</b>
       <input
       type="text"
       name="name"
       placeholder="Vinyl Name..."
       value={name}
       onChange={(e) => setName(e.target.value)}
       />
    </label>

    <label className="add-form-label">
      <b>Artist:</b>
      <input
      type="text"
      name="artist"
      placeholder="Artist Name..."
      value={artist}
      onChange={(e) => setArtist(e.target.value)}
      />
    </label>

    <label className="add-form-label">
      <b>Front-Cover:</b>
      <input
      type="text"
      name="frontCover"
      placeholder="JPG Link..."
      value={frontCover}
      onChange={(e) => setFrontCover(e.target.value)}
      />
    </label>

    <label className="add-form-label">
      <b>Back-Cover:</b>
      <input
      type="text"
      name="backCover"
      placeholder="Insert JPG Link..."
      value={backCover}
      onChange={(e) => setBackCover(e.target.value)}
      />
    </label>

    <label className="add-form-label">
      <b>Price:</b>
      <input
      type="text"
      name="price"
      placeholder="Set Your Price..."
      value={price}
      onChange={(e) => setPrice(e.target.value)}
      />
    </label>

    <button type="submit" className="add-form-button">POST-IT!</button>
  </form>
  </>
  )
}

export default AddForm