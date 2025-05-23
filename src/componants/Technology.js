import React from "react";

const Technology = () => {
  return (
    <>
    <h1 className="text-center mt-5" id="Technology">Technology</h1>

<div className="container mt-4">
  <div className="row g-4">

    <div className="col-12 col-md-6 col-lg-3">
      <div className="card h-100">
        <h5 className="p-4" style={{ backgroundColor: '#DDDDDD' }}>
          Ballistic protection up to STANAG 4569 levels
        </h5>
        <div className="card-body">
          <p className="card-text p-2">
            Our vehicles provide top-tier protection against firearms, shrapnel, and explosions, meeting STANAG 4569 standards for unmatched safety in high-risk environments.
          </p>
        </div>
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-3">
      <div className="card h-100">
        <h5 className="p-4" style={{ backgroundColor: '#DDDDDD' }}>
          Advanced communication and navigation systems
        </h5>
        <div className="card-body">
          <p className="card-text p-2">
            Adaptive suspension ensures smooth travel on rough terrains, enhanced stability, and high load-bearing capacity providing exceptional mobility for challenging missions
          </p>
        </div>
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-3">
      <div className="card h-100">
        <h5 className="p-4" style={{ backgroundColor: '#DDDDDD' }}>
          Cutting-edge suspension for all-terrain capability
        </h5>
        <div className="card-body">
          <p className="card-text p-2">
            Adaptive suspension ensures smooth travel on rough terrains, enhanced stability, and high load- bearing capability providing exceptional mobility for challenging missions 
          </p>
        </div>
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-3">
      <div className="card h-100">
        <h5 className="p-4" style={{ backgroundColor: '#DDDDDD' }}>
          Modular design for flexibility and adaptability
        </h5>
        <div className="card-body">
          <p className="card-text p-2">
            Modular design allow quick upgrades, role-specific configurations, and customizable armor kits, ensuring vehicles adapt effortlessly to changing operational needs
          </p>
        </div>
      </div>
    </div>

  </div>
</div>

    </>
  );
};

export default Technology;
