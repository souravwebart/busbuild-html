import React from "react";
import Image from "next/image";
import FirstImg from "../public/image/b.png";
import SecondImg from "../public/image/a.png";
import ThirdImg from "../public/image/d.png";
import FourthImg from "../public/image/c.png";

function FourthSection() {
  return (
    <div
      className="fourthSection"
      style={{ marginTop: "100px", marginBottom: "159px" }}
    >
      <div className="container">
        <div className="thirdsection_content" style={{ paddingBottom: "86px" }}>
          <h1>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</h1>
        </div>
        <div className="row">
          <div className="col-12 col-xl-7 col-lg-12 col-md-12 col-sm-12">
            <div
              className="fourth_section_Card1"
              style={{ alignContent: "start", marginBottom: "24px" }}
            >
              <div className="fourth_section_card_start">
                <div className="fourthsection_card_img">
                  <Image src={FirstImg} alt="img" width={70} height={70} />
                </div>
                <div className="fourth_section_card_text">
                  <h1>Lorem ipsum dolor sit .</h1>
                </div>
              </div>
              <p className="fourthcard_details">
                adipiscing elit. Ut sed commodo est.Pellentesque eu placerat
                mauris. ut maximus ante. Suspendisse varius dolor nec bibendum
                dignissim
              </p>
              <button type="button" className="btn btn-primary buildbutton">
                Check Pricing
              </button>
            </div>
          </div>
          <div className="col-12 col-xl-5 col-lg-12 col-md-12 col-sm-12"></div>
        </div>
        <div className="row">
          <div className="col-12 col-xl-6 col-lg-12 col-md-12 col-sm-12"></div>
          <div className="col-12 col-xl-6 col-lg-12 col-md-12 col-sm-12">
            <div
              className="fourth_section_Card1"
              style={{
                alignContent: "start",
                marginBottom: "24px",
                paddingLeft: "60px",
              }}
            >
              <div className="fourth_section_card_start">
                <div className="fourthsection_card_img">
                  <Image src={SecondImg} alt="img" width={70} height={70} />
                </div>
                <div className="fourth_section_card_text">
                  <h1>Lorem ipsum dolor sit .</h1>
                </div>
              </div>
              <p className="fourthcard_details2">
                adipiscing elit. Ut sed commodo est.Pellentesque eu placerat
                mauris. ut maximus ante. Suspendisse
              </p>
              <button type="button" className="btn btn-primary buildbutton">
                Check Pricing
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-xl-7 col-lg-12 col-md-12 col-sm-12">
            <div
              className="fourth_section_Card1"
              style={{ alignContent: "start", marginBottom: "24px" }}
            >
              <div className="fourth_section_card_start">
                <div className="fourthsection_card_img">
                  <Image src={ThirdImg} alt="img" width={70} height={70} />
                </div>
                <div className="fourth_section_card_text">
                  <h1>Lorem ipsum dolor sit .</h1>
                </div>
              </div>
              <p className="fourthcard_details">
                adipiscing elit. Ut sed commodo est.Pellentesque eu placerat
                mauris. ut maximus ante. Suspendisse varius dolor nec bibendum
                dignissim
              </p>
              <button type="button" className="btn btn-primary buildbutton">
                Check Pricing
              </button>
            </div>
          </div>
          <div className="col-12 col-xl-5 col-lg-12 col-md-12 col-sm-12"></div>
        </div>
        <div className="row">
          <div className="col-12 col-xl-6 col-lg-12 col-md-12 col-sm-12"></div>
          <div className="col-12 col-xl-6 col-lg-12 col-md-12 col-sm-12">
            <div
              className="fourth_section_Card1"
              style={{
                alignContent: "start",
                marginBottom: "24px",
                paddingLeft: "60px",
              }}
            >
              <div className="fourth_section_card_start">
                <div className="fourthsection_card_img">
                  <Image src={FourthImg} alt="img" width={70} height={70} />
                </div>
                <div className="fourth_section_card_text">
                  <h1>Lorem ipsum dolor sit .</h1>
                </div>
              </div>
              <p className="fourthcard_details2">
                adipiscing elit. Ut sed commodo est.Pellentesque eu placerat
                mauris. ut maximus ante. Suspendisse
              </p>
              <button type="button" className="btn btn-primary buildbutton">
                Check Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourthSection;
