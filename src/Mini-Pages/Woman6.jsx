import React, {useState} from 'react'
import m from "../images/13.jpeg"
import o from "../images/14.jpeg"
const Woman6 = () => {

  // State to keep track of which image is displayed
  const [isFirstImage, setIsFirstImage] = useState(true);

  // Image URLs or paths
 

  // Function to handle image click
  const handleImageClick = () => {
    setIsFirstImage(!isFirstImage);
  };

  return (
    <img
      src={isFirstImage ? m : o}
      alt="Toggle"
      style={{ cursor: 'pointer', width: '100%' , height:"auto",objectFit:"cover" ,display:"inline-block"}}
      onClick={handleImageClick}
     
    />
  );
}
export default Woman6