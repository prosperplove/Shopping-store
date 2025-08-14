import React from 'react';
import WomenBest3 from './WomenBest3';

// Import images
import dress12 from "../images/36.jpg";
import dress13 from "../images/37.jpg";
import dress14 from "../images/33.jpg";

import dress21 from "../images/34.jpg";
import dress22 from "../images/38.jpg";
import dress23 from "../images/39.jpg";

const slides1 = [
  { id: 1, img: dress12, alt: 'Slide 1' },
  { id: 2, img: dress13, alt: 'Slide 2' },
  { id: 3, img: dress14, alt: 'Slide 3' },
];

const slides2 = [
  { id: 1, img: dress21, alt: 'Slide 1' },
  { id: 2, img: dress22, alt: 'Slide 2' },
  { id: 3, img: dress23, alt: 'Slide 3' },
];

const accordionItems1 = [
  {
    header: 'Details',
    body: (
      <>
        This single-breasted blazer in grain de poudre wool has a notched lapel with Medusa buttons.
        <ul>
          <li>Medusa hardware</li>
          <li>Versace tailoring label</li>
          <li>Long sleeves</li>
          <li>Notched lapels</li>
        </ul>
      </>
    )
  },
  {
    header: 'Size',
    body: 'The model is 1.87 m tall and wears size 48 IT',
  },
  {
    header: 'Packaging',
    body: 'Wrapped with Barocco tissue paper and a matte black box, FSC Certified sources.',
  }
];

const accordionItems2 = [
  {
    header: 'Details',
    body: (
      <>
        Elegant floral silk dress with delicate straps and flowing skirt.
        <ul>
          <li>100% Silk</li>
          <li>Floral print</li>
          <li>Adjustable straps</li>
          <li>Machine washable</li>
        </ul>
      </>
    )
  },
  {
    header: 'Size',
    body: 'Model height 1.75 m wearing size S',
  },
  {
    header: 'Packaging',
    body: 'Packaged in eco-friendly recycled boxes with care instructions included.',
  }
];

const WomenBest = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 mb-4">
          <WomenBest3
            slides={slides1}
            title="Seller of the Year"
            link={{
              url: "/product/page1",
              title: "Wool Single-Breasted Blazer",
              color: "Black",
            }}
            accordionItems={accordionItems1}
          />
        </div>
        <div className="col-md-6 mb-4">
          <WomenBest3
            slides={slides2}
            title="New Arrival"
            link={{
               url:  "/product/page2",
              title: "Elegant Floral Silk Dress",
              color: "Blue",
            }}
            accordionItems={accordionItems2}
          />
        </div>
      </div>
    </div>
  );
};

export default WomenBest;
