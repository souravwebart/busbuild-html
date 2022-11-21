import React from "react";
import Image from "next/image";
import FirstImg from "../public/image/f.png";
import Slider from "./Subcomponents/slider";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

function FifthSection() {
  return (
    <div className="fifth_section">
      <div className="container">
        <div className="thirdsection_content">
          <h1>Lorem ipsum dolor sit .</h1>
        </div>
        <div className="fourth_back_section">
          <div className="fourth_back_section_heading">
            <div className="fourth_section_card_start">
              <div className="fourthsection_card_img">
                <Image src={FirstImg} alt="img" width={64} height={64} />
              </div>
              <div className="fifth_section_card_text">
                <h1>Lorem ipsum dolor sit .</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="testemonial" style={{ paddingBottom: "100px" }}>
          <Slider />
        </div>
      </div>
    </div>
  );
}

export default FifthSection;
