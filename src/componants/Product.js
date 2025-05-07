import React from "react";
import product1 from "../img/product1.jpeg";
import product2 from "../img/product2.jpeg";
import product3 from "../img/product3.jpeg";
import product4 from "../img/product4.jpeg";
import product5 from "../img/product5.jpeg";
import product6 from "../img/product6.jpeg";

const Product = () => {
  return (
    <>
   <div className="container-fluid text-center py-5" id="product">
  <h1 className="text-center mb-5">OUR PRODUCT</h1>

  {/* First Row */}
  <div className="container">
    <div className="row g-4">
      <div className="col-12 col-md-6 col-lg-4">
        <div className="card h-100">
          <img src={product1} className="card-img-top" alt="product1" />
          <div className="card-body">
            <h5 className="card-title">Armored VIP Civil Vehicles</h5>
            <p className="card-text">
              Extra Clear BR Glasses - Certified from International Labs. Protection Against Specified threat levels
            </p>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6 col-lg-4">
        <div className="card h-100">
          <img src={product2} className="card-img-top" alt="product2" />
          <div className="card-body">
            <h5 className="card-title">Armoured Personnel Carriers</h5>
            <p className="card-text">
              Protection STANG Level 2 Underbelly Blast Protection Equipped with Blast Attenuated Seats
            </p>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6 col-lg-4">
        <div className="card h-100">
          <img src={product3} className="card-img-top" alt="product3" />
          <div className="card-body">
            <h5 className="card-title">Surveillance Towers & Machans</h5>
            <p className="card-text">
              BR Morcha Machan, BR Observation Posts, BR Guard Cabins
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Second Row */}
    <div className="row g-4 mt-3">
      <div className="col-12 col-md-6 col-lg-4">
        <div className="card h-100">
          <img src={product4} className="card-img-top" alt="product4" />
          <div className="card-body">
            <h5 className="card-title">Bullet Resistant Jackets</h5>
            <p className="card-text">
              Lightweight Composites, Steel Composites, Ceramic Composites etc.
            </p>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6 col-lg-4">
        <div className="card h-100">
          <img src={product5} className="card-img-top" alt="product5" />
          <div className="card-body">
            <h5 className="card-title">Bullet Resistant Helmets</h5>
            <p className="card-text">
              Protection V50: 600m/s to 700m/s, multi Point Harness and Suspension System
            </p>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6 col-lg-4">
        <div className="card h-100">
          <img src={product6} className="card-img-top" alt="product6" />
          <div className="card-body">
            <h5 className="card-title">ANTI RIOT EQUIPMENTS</h5>
            <p className="card-text">
              Tactical Anti Riot Shields, Suits, Polycarbonate, Police batons
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Product;
