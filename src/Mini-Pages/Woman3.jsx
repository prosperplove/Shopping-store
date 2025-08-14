import React, {useState} from 'react'

import e from "../images/1.jpeg"
import f from "../images/2.jpeg"
const Woman3 = () => {
   
  // State to keep track of which image is displayed
  const [isFirstImage, setIsFirstImage] = useState(true);

  // Image URLs or paths
 

  // Function to handle image click
  const handleImageClick = () => {
    setIsFirstImage(!isFirstImage);
  };

  return (
    <img
      src={isFirstImage ? e : f}
      alt="Toggle"
      style={{ cursor: 'pointer', width: '100%', height:"auto",objectFit:"cover",display:"inline-block" }}
      onClick={handleImageClick}
     
    />
  );
}

export default Woman3