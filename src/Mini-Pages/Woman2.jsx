import React, {useState} from 'react'
import g from "../images/pic4.jpeg"
import j from "../images/pic5.jpeg"
const Woman2 = () => {
   
  // State to keep track of which image is displayed
  const [isFirstImage, setIsFirstImage] = useState(true);

  // Image URLs or paths
 

  // Function to handle image click
  const handleImageClick = () => {
    setIsFirstImage(!isFirstImage);
  };

  return (
    <img
      src={isFirstImage ? g : j}
      alt="Toggle"
      style={{ cursor: 'pointer', width: '100%', height:"auto",objectFit:"cover",display:"inline-block" }}
      onClick={handleImageClick}
      
    />
  );
}

export default Woman2