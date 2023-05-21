import React from "react";
import memesData from "../memesData.js";

function Meme() {
    const[memeImage,setMemeImage] = React.useState("");

    function getMemeImage(){
        // e.preventDefault()
        const memeArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        setMemeImage(memeArray[randomNumber].url)
        
    }
  return (
    <main>
      <div className="form">
        <input type="text" className="form_input" placeholder="Top text" />
        <input type="text" className="form_input" placeholder="Buttom text" />
        <button className="form_button" onClick={getMemeImage}>Get a new meme impage</button>
      </div>
      <img src={memeImage} className="meme_image"/>
    </main>
  );
}

export default Meme;
