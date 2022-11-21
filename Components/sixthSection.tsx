import React from "react";
import Image from "next/image";
import FirstImg from "../public/image/f1.png";
import Secondimg from "../public/image/f2.png";
import ThirdImg from "../public/image/f3.png";

function SixthSection() {
  return (
    <div className="sixth_section" style={{ marginTop: "190px" }}>
      <div className="container">
        <div className="thirdsection_content" style={{ paddingBottom: "86px" }}>
          <h1>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</h1>
        </div>
        <div
          className="fourth_section_box"
          style={{ textAlign: "center", paddingBottom: "146px" }}
        >
          <div className="fourth_section_box_details">
            <Image src={FirstImg} alt="img" width={185} height={89} />
            <p>Forms On Fire</p>
          </div>
          <div className="fourth_section_box_details">
            <Image src={Secondimg} alt="img" width={177} height={89} />
            <p>ElectroNeek Studio IDE</p>
          </div>
          <div className="fourth_section_box_details">
            <Image src={ThirdImg} alt="img" width={89} height={89} />
            <p>Jot form</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SixthSection;
