import React from "react";
import logo from "../img/logo.jpeg";

const Serve = () => {
  return (
    <>
      <div className="container">
        <div class="row g-0  position-relative">
          <div class="col-md-6 mb-md-0 p-md-4">
            <img src={logo} class="w-100" alt="img" />
          </div>
          <div class="col-md-6 p-4 ps-md-0">
            <p className="fs-2">
              {" "}
              We Proudly cater to diverse sectors, ensuring top-notch solutions
              for.
            </p>
            <ul className="fs-4">
              <li>Military Defense Forces </li>
              <br />
              <li>Law Enforcement Agencies </li>
              <br />
              <li>Private Security Firms </li>
              <br />
              <li>Humanitarian and peacekeeping Missions'</li>
            </ul>
          </div>
        </div>
      </div>

      <br />
      <br />
    </>
  );
};

export default Serve;
