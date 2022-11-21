/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import HeroImage from "../public/image/image1.png";

function HeroSection() {
  return (
    <div className="heroSection" style={{ paddingBottom: "97.78px" }}>
      <div className="container">
        <div className="row">
          <div className="col-12 .col-xl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12">
            <div className="herosection_left" style={{ paddingTop: "97.78px" }}>
              <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
                commodo est.Pellentesque eu placerat mauris. Etiam ut maximus
                ante. Suspendisse varius dolor nec bibendum dignissim. Proin in
                diam a justo sollicitudin mattis eu sagittis nunc. In hac
                habitasse platea dictumst.
              </p>
              <button type="button" className="btn btn-primary buildbutton">
                Check Pricing
              </button>
            </div>
          </div>
          <div className="col-12 .col-xl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12">
            <img src="./image/image1.png" alt="img" width="100%" height="518" />

            {/* <Image
              src={HeroImage}
              alt="Picture of the author"
              width={509}
              height={518}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
