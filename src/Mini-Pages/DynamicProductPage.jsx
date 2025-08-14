import React from "react";
import { useParams } from "react-router-dom";
import WomenBest2 from "./WomenBest2";
import nine from "../images/9.jpeg"
import ten from "../images/10.jpeg"
import eleven from "../images/11.jpeg";
import twelve from "../images/12.jpeg";
import e from "../images/1.jpeg";
import f from "../images/2.jpeg";
import a from "../images/3.jpeg"
import b from "../images/4.jpeg"
import pic3 from "../images/pic3.jpeg"
import pic1 from "../images/pic1.jpeg";
import pic2 from "../images/pic2.jpeg";
import pic6 from "../images/pic6.jpeg"
import pic7 from "../images/pic7.jpeg"
import pic5 from "../images/pic5.jpeg"
import img1 from "../images/33.jpg";
import img2 from "../images/36.jpg";
import img3 from "../images/37.jpg";
import img4 from "../images/34.jpg";
import img5 from "../images/38.jpg";
import img6 from "../images/39.jpg";
import i from "../images/8.jpeg";
import j from "../images/5.jpeg";
import k from "../images/6.jpeg";
import l from "../images/7.jpeg";
import combo3 from "../images/combo3.jpg";
import combo4 from "../images/combo4.jpg";
import combo10 from "../images/combo10.jpg";
import mini from "../images/13.jpeg"
import minione from "../images/14.jpeg"
import minitwo from "../images/15.jpeg";
import minithree from "../images/16.jpeg";
import watch10 from "../images/watch10.jpeg";
import watch11 from "../images/watch11.jpeg";
import watch12 from "../images/watch12.jpeg";
import watch20 from "../images/watch20.jpg";
import watch22 from "../images/watch22.jpg";
import watch17 from "../images/watch17.jpg";
import watch18 from "../images/watch18.jpg";
import watch21 from "../images/watch21.jpg";
import watch19 from "../images/watch19.jpg";
import watch14 from "../images/watch14.jpg";
import watch15 from "../images/watch15.jpg";
import watch16 from "../images/watch16.jpg";
import men from "../images/men.jpg";
import men2 from "../images/men2.jpg";
import men3 from "../images/men3.jpg";
import men4 from "../images/men4.jpg";
const data = {
  page1: {
    title: "Our Clothing Collection",
    products: [
      { id: 1, image: img1 },
      { id: 2, image: img2 },
      { id: 3, image: img3 },
    ],
    productDetails: [
      {
        id: 11,
        name: "Wool Single-Breasted Blazer",
        sizes: ["S", "M"],
        price: 10540,
        about:
          "This single-breasted blazer in grain de poudre wool has a notched lapel with Medusa buttons and features a Wild Cats printed lining.",
      },
    ],
  },
  page2: {
    title: "Our Clothing Collection",
    products: [
      { id: 1, image: img4 },
      { id: 2, image: img5 },
      { id: 3, image: img6 },
    ],
    productDetails: [
      {
        id: 21,
        name: "Elegant Floral Silk Dress",
        sizes: ["M", "L"],
        price: 13400,
        about: "Elegant silk dress with floral print and adjustable straps.",
      },
    ],
  },
    page3: {
     title: "Our Shoe Collection",
    products: [
      { id: 1, image: pic1 },
      { id: 2, image: pic2 },
      { id: 3, image: pic3 },
    ],
    productDetails: [
      {
         id: 1,
      name: "Nike Air Mag",
      sizes: ["S", "M", "L"],
      price: 970,
      about: "white and milk color with upper jumpman logo on mesh",
      },
    ],
  },
   page4: {
     title: "Our Shoe Collection",
    products: [
      { id: 1, image: pic5 },
      { id: 2, image: pic6 },
      { id: 3, image: pic7 },
    ],
    productDetails: [
      {
          id: 2,
      name: "Nike SB",
      sizes: ["S", "M"],
      price: 1120,
      about: "orange and whitke fitted SB,2025 edition",
      },
    ],
  },
   page5: {
   title: "Our Shoe Collection",
    products: [
          { id: 1, image: e },
          { id: 2, image: f },
          { id: 3, image: b },
          { id: 4, image: a },
         
    ],
    productDetails: [
      {
       id: 3,
      name: "Nike Men's Killshot",
      sizes: ["S", "M"],
      price: 2500,
      about: "Killshot nailfit Nike,with soft comfort. football boot inspired",
      },
    ],
  },
   page6: {
     title: "Our Shoe Collection",
    products: [
      { id: 1, image: i },
         { id: 2, image: j },
         { id: 3, image: k },
         { id: 4, image: l },
    ],
    productDetails: [
      {
        id: 4,
      name: "Nike Tupac's Outlaw",
      sizes: ["S", "M"],
      price: 1500,
      about: "Classic Luxury and perfection wool skin Nike, Designed by Tupac's 1995 Nike edition",
      },
    ],
  },
   page7: {
    title: "Our Shoe Collection",
    products: [
      { id: 1, image: nine },
         { id: 2, image: ten },
         { id: 3, image: eleven },
         { id: 4, image: twelve },
    ],
    productDetails: [
      {
          id: 5,
      name: "Nike force 109",
      sizes: ["S", "M"],
      price: 850,
      about: "White Goretex Sport crazed model editio",
      },
    ],
  },
   page8: {
    title: "Our Shoe Collection",
    products: [
      { id: 1, image: mini },
         { id: 2, image: minione },
         { id: 3, image: minitwo},
         { id: 4, image: minithree },
    ],
    productDetails: [
      {
          id: 6,
      name: "Men's Nike Miler",
      sizes: ["S", "M"],
      price: 1050,
      about: "Men's Repel Running Jacket",
      },
    ],
  },
 page9: {
    title: "Our Clothing Collection",
    products: [
   
         { id: 2, image: combo4 },
         { id: 3, image: combo10},
        
    ],
    productDetails: [
      {
          id: 6,
      name: "Women's Luxury combo",
      sizes: ["S", "M"],
      price: 2150,
      about: "Colorful set of jean short, brown shirt,orange face cap, gld white colored shoe and Nike wrist watch",
      },
    ],
  },
   page10: {
    title: "Our Clothing Collection",
    products: [
   
         { id: 2, image: combo3 },
         { id: 3, image: combo3},
        
    ],
    productDetails: [
      {
          id: 6,
      name: "Party hard",
      sizes: ["S", "M"],
      price: 2150,
      about: "Women's jean short, black and white polo, black flat shoe and a sunshade, made off quality and original style for groove",
      },
    ],
  },
page11: {
      title: "Our Watch Collection",
    products: [
   
       { id: 1, image: watch10},
          { id: 2, image: watch11 },
          { id: 2, image: watch12 },
         
        
    ],
    productDetails: [
      { id: 13,
     sizes: ["S", "M"],
      name: "ONE CLICK JOYFUL STEEL SKY BLUE",
      price: 19500,
      about: "ONE CLICK JOYFUL STEEL SKY BLUE Multi-purpose Promaster Diver Super diamond and blue lane Watch",
      },
    ],
  },
page12: {
     title: "Our Watch Collection",
    products: [
     { id: 1, image: watch22 },
      { id: 2, image: watch20 },
      
        
    ],
    productDetails: [
      {
          
      id:11,
     sizes: ["S", "M"],
      name: "Casio AQ S820W 5A",
      price: 1850,
       about: "Casio AQ S820W 5A Men's Automatic Two Tone Watch",
      },
    ],
  },
  page13: {
      title: "Our Watch Collection",
    products: [
   
          { id: 1, image: watch17 },
            { id: 2, image: watch18 },
        
    ],
    productDetails: [
      {
      id: 10,
     sizes: ["S", "M"],
      name: "Citizen NH8354-58",
      price: 723,
      about: "Citizen NH8354-58A Men's Automatic Two Tone Watch",
      },
    ],
  },
  page14: {
     title: "Our Watch Collection",
    products: [
    { id: 1, image: watch21},
       { id: 2, image: watch19 },
      
    ],
    productDetails: [
      {
        id: 12,
     sizes: ["S", "M"],
      name: "Citizen BN0220-16",
      price: 1350,
      about: "Citizen BN0220-16E Men's Promaster Diver Super Titanium Resin Watch",
      },
    ],
  },
   page15: {
    title: "Our Watch Collection",
    products: [
        { id: 1, image: watch14 },
        { id: 2, image: watch15 },
        { id: 3, image: watch16},
    ],
    productDetails: [
      {
      id: 9,
     sizes: ["S", "M"],
      name: "Rotary Regent GBO",
      price: 1150,
      about: "Brand Rotary Regent GB054550/65 Men's Chronograph Stainless Steel",
      },
    ],
  },
    page16: {
    title: "Our Clothing Collection",
    products: [
        { id: 1, image: men },
        { id: 2, image:men2 },
        { id: 3, image: men3},
        { id: 4, image:men4},
    ],
    productDetails: [
      {
      id: 9,
     sizes: ["S", "M"],
      name: "Melange Wool Formal Pants",
      price: 5150,
      about: "This wool mélange double-breasted blazer features a peaked lapel and accent Medusa buttons. The sartorial style is detailed with a jacquard Versace tailoring label at the sleeve. It's fully lined featuring the Wild Cats print, a reinterpretation of an archival print of the animal kingdom with zebra and leopard patterns.",
      },
    ],
  },




};


const DynamicProductPage = () => {
  const { id } = useParams();
  const content = data[id];

  if (!content) {
    return <div className="text-center my-5">Product page not found.</div>;
  }

  return (
    <WomenBest2
      title={content.title}
      products={content.products}
      productDetails={content.productDetails}
    />
  );
};

export default DynamicProductPage;
