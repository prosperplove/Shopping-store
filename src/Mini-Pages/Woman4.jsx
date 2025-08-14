import React, {useState} from 'react'

import i from "../images/5.jpeg"
import j from "../images/6.jpeg"
const Woman4 = () => {
   
  // State to keep track of which image is displayed
  const [isFirstImage, setIsFirstImage] = useState(true);

  // Image URLs or paths
 

  // Function to handle image click
  const handleImageClick = () => {
    setIsFirstImage(!isFirstImage);
  };

  return (
    <img
      src={isFirstImage ? i : j}
      alt="Toggle"
      style={{ cursor: 'pointer', width: '100%', height:"auto",objectFit:"cover",display:"inline-block" }}
      onClick={handleImageClick}
       
    />
  );
}

export default Woman4