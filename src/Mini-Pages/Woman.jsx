import React, {useState} from 'react'


import pic from "../images/pic.jpeg"
import pic1 from "../images/pic1.jpeg"

const Woman = () => {
   
  // State to keep track of which image is displayed
  const [isFirstImage, setIsFirstImage] = useState(true);

  // Image URLs or paths
 

  // Function to handle image click
  const handleImageClick = () => {
    setIsFirstImage(!isFirstImage);
  };

  return (
    <img
      src={isFirstImage ? pic : pic1}
      alt="Toggle"
      style={{ cursor: 'pointer', width: '100%', height:"auto",objectFit:"cover",display:"block" }}
      onClick={handleImageClick}
    />
    
  );
}

export default Woman