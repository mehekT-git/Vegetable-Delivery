import React from 'react';
import HProduct from './HProduct';
import Turnip from '../assets/Images/turnip.png';
import Celery from '../assets/Images/Celery.png';
import Amaranth from '../assets/Images/Amaranth.png';
import Veg1 from '../assets/Images/veg1.jpg';
import Veg2 from '../assets/Images/veg2.jpg';
import Veg3 from '../assets/Images/veg3.jpg';

const Healthy = () => {
  return (
    <div className="container-fluid px-4 py-5 healthy">
      <h2 className="text-center display-4 mt-4 fw-bold pb-3">
        It's Healthy Eating Made Easy
      </h2>

      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <HProduct
            Image={Veg1}
            Image2={Turnip}
            Title="Turnip"
            Description={`Turnips aren’t just ordinary root veggies — they’re a powerhouse of nutrition with a naturally sweet, earthy flavor. 🥗
Rich in vitamin C and fiber, they help boost your immunity and keep digestion happy.
Whether roasted, mashed, or added to curries, our freshly harvested turnips bring taste and health to every plate.
Add them to your basket today and give your meals a fresh twist.`}
          />

          <HProduct
            Image={Veg2}
            Image2={Amaranth}
            Title="Amaranth"
            Description={`Amaranth leaves — also known as Rajgira — are a hidden gem packed with iron, calcium, and powerful antioxidants. 🌿
They're soft, flavorful, and perfect for dals, saag, or light stir-fries.
A traditional superfood loved across India, it helps boost energy and supports strong immunity.
Bring home a bundle of freshness and tradition with our organically grown Amaranth.`}
          />

          <HProduct
            Image={Veg3}
            Image2={Celery}
            Title="Celery"
            Description={`Crunchy, fresh, and incredibly hydrating — celery is your go-to green for detox and daily wellness. 🥬
Low in calories but rich in antioxidants and vitamins, it’s great for juicing, soups, or healthy snacking.
Known to support digestion and reduce inflammation, celery adds both crunch and care to your meals.
Grab a bunch of our crisp farm-fresh celery and taste the green goodness.`}
          />
        </div>
      </div>
    </div>
  );
};

export default Healthy;
