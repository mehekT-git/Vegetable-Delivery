import React from 'react';
import Process1 from '../assets/Images/process1.png';
import Process2 from '../assets/Images/process2.png';
import Process3 from '../assets/Images/process3.png';

const Delivery = () => {
  return (
    <div className="container px-4 py-5 delivery-process">
      <h2 className="text-center display-4 mt-4 fw-bold">How Delivery Works</h2>
      <p className="text-center mt-2 mb-5" style={{ fontSize: '18px', color: 'rgb(37, 99, 37)' }}>
        It's as simple as picking, receiving, and enjoying! Here's how our process brings fresh veggies to your plate 🍽️
      </p>

      <div className="row g-4 py-5 row-cols-1 row-cols-sm-2 row-cols-md-3">
        <div className="col px-5 text-center">
          <div className="mb-3">
            <img src={Process1} className="w-50 h-50" alt="Pick Veg" />
          </div>
          <h5>🥕 Pick Your Veg</h5>
          <p style={{ color: '#256325' }}>
            Choose from a variety of fresh, seasonal veggies grown locally. No hassle, just farm-fresh choices at your fingertips.
          </p>
        </div>

        <div className="col px-5 text-center">
          <div className="mb-3">
            <img src={Process2} className="w-50 h-50" alt="Deliver Bag" />
          </div>
          <h5>🚚 We Deliver the Bag</h5>
          <p style={{ color: '#256325' }}>
            Sit back and relax — your veggies are packed with care and delivered right to your doorstep, fresh and ready to use.
          </p>
        </div>

        <div className="col px-5 text-center">
          <div className="mb-3">
            <img src={Process3} className="w-50 h-50" alt="Enjoy Veg" />
          </div>
          <h5>🍲 You Enjoy Your Veg</h5>
          <p style={{ color: '#256325' }}>
            Whether it’s a salad, curry, or snack — enjoy the flavor, crunch, and nutrition of every veggie. It’s health made simple!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
