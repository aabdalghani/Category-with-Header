import React, { useState } from "react";
import '../App.css';


function Agriculture() {
  const [setActive] = useState("first");

  return (
    <>
    <button
  className="activeButton"
  onClick={() => {
    setActive("Seeds");
  }}
>
Seeds
</button>
<button
  className="activeButton"
  onClick={() => {
    setActive("Fertilize");
  }}
>
Fertilize
</button>
<button
  className="activeButton"
  onClick={() => {
    setActive("Crops");
  }}
>
Crops
</button>
    </>
  );
}
export default Agriculture;