import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import Image from "next/image";
import Profile1 from "../../public/image/p1.png";
import Profile2 from "../../public/image/p2.png";
import Profile3 from "../../public/image/p3.png";

export default function Slider() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        className="mySwiper"
        // id="cardSlider"
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          // 420: {
          //   slidesPerView: 1,
          //   spaceBetween: 20,
          // },
          640: {
            slidesPerView: 1,
            spaceBetween: 25,
          },
          768: {
            slidesPerView: 1.2,
            spaceBetween: 25,
          },
          998: {
            slidesPerView: 2.3,
            spaceBetween: 25,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
        }}
      >
        <SwiperSlide>
          <div className="review_card" style={{ position: "relative" }}>
            <div className="top_review_card" style={{ display: "flex" }}>
              <div className="profile_img">
                <Image src={Profile1} alt="img" width={42} height={43} />
              </div>
              <div
                className="profile_section"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div className="designation">
                  <h1>Jhon Doe</h1>
                </div>
                <div className="rating_star">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                </div>
              </div>
            </div>
            <div className="review_details_designation">
              <p>CEO</p>
            </div>

            <div className="review_details">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
                commodo est. Pellentesque eu placerat mauris. Etiam ut maximus
                ante. Suspendisse varius dolor nec bibendum dignissim. Proin in
                diam a justo sollicitudin mattis eu sagittis nunc. In hac
                habitasse platea dictumst.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review_card" style={{ position: "relative" }}>
            <div className="top_review_card" style={{ display: "flex" }}>
              <div className="profile_img">
                <Image src={Profile2} alt="img" width={42} height={43} />
              </div>
              <div
                className="profile_section"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div className="designation">
                  <h1>Amanda green</h1>
                </div>
                <div className="rating_star">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                </div>
              </div>
            </div>
            <div className="review_details_designation">
              <p>Operations Manager</p>
            </div>

            <div className="review_details">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
                commodo est. Pellentesque eu placerat mauris. Etiam ut maximus
                ante. Suspendisse varius dolor nec bibendum dignissim. Proin in
                diam a justo sollicitudin mattis eu sagittis nunc. In hac
                habitasse platea dictumst.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review_card" style={{ position: "relative" }}>
            <div className="top_review_card" style={{ display: "flex" }}>
              <div className="profile_img">
                <Image src={Profile3} alt="img" width={42} height={43} />
              </div>
              <div
                className="profile_section"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div className="designation">
                  <h1>Sam Cooper</h1>
                </div>
                <div className="rating_star">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                </div>
              </div>
            </div>
            <div className="review_details_designation">
              <p>Customer Service Manager</p>
            </div>

            <div className="review_details">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
                commodo est. Pellentesque eu placerat mauris. Etiam ut maximus
                ante. Suspendisse varius dolor nec bibendum dignissim. Proin in
                diam a justo sollicitudin mattis eu sagittis nunc. In hac
                habitasse platea dictumst.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review_card" style={{ position: "relative" }}>
            <div className="top_review_card" style={{ display: "flex" }}>
              <div className="profile_img">
                <Image src={Profile1} alt="img" width={42} height={43} />
              </div>
              <div
                className="profile_section"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div className="designation">
                  <h1>Jhon Doe</h1>
                </div>
                <div className="rating_star">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                </div>
              </div>
            </div>
            <div className="review_details_designation">
              <p>CEO</p>
            </div>

            <div className="review_details">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
                commodo est. Pellentesque eu placerat mauris. Etiam ut maximus
                ante. Suspendisse varius dolor nec bibendum dignissim. Proin in
                diam a justo sollicitudin mattis eu sagittis nunc. In hac
                habitasse platea dictumst.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
