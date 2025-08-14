import React, {useState} from 'react'
import k from "../images/9.jpeg"
import l from "../images/10.jpeg"

const Woman5 = () => {

  // State to keep track of which image is displayed
  const [isFirstImage, setIsFirstImage] = useState(true);

  // Image URLs or paths
 

  // Function to handle image click
  const handleImageClick = () => {
    setIsFirstImage(!isFirstImage);
  };

  return (
    <img
      src={isFirstImage ? k : l}
      alt="Toggle"
      style={{ cursor: 'pointer', width: '100%',height:"auto",objectFit:"cover",display:"inline-block"}}
      onClick={handleImageClick}
       
    />
  );
}
export default Woman5