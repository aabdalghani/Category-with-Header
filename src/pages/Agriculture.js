import React, { useState } from "react";
import '../App.css';
import { handleDownload } from "../functions";


function Agriculture() {
  //const [setActive] = useState("first");
  const Ag1 = 'agriculture/seeds.jpg'
  const Ag2 = 'agriculture/fertilizer.jpg'
  const Ag3 = 'agriculture/crop.jpg'

  return (
    <>
    <button
  className="activeButton"
  onClick={() => {handleDownload(Ag1)}}
>
Seeds
</button>
<button
  className="activeButton"
  onClick={() => {handleDownload(Ag2)}}
>
Fertilize
</button>
<button
  className="activeButton"
  onClick={() => {handleDownload(Ag3)}}
>
Crops
</button>
    </>
  );
}
export default Agriculture;