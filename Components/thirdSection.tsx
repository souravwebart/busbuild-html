import React from "react";
import Image from "next/image";
import FirstCard from "../public/image/1.png";
import SecondCard from "../public/image/2.png";
import ThirdCard from "../public/image/3.png";

function thirdSection() {
  return (
    <div className="thirdsection">
      <div className="container">
        <div className="thirdsection_content">
          <h1>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</h1>
        </div>
        <div className="thirdSection_card">
          <div className="third_item_card">
            <Image src={FirstCard} alt="card" width={244} height={188} />
            <h2>Lorem ipsum dolor sit .</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
              commodo est. Pellentesque eu placerat mauris. Etiam ut maximus
              ante. Suspendisse varius dolor nec bibendum dignissim. Proin in
              diam a justo sollicitudin mattis eu sagittis nunc. In hac
              habitasse platea dictumst.
            </p>
          </div>
          <div className="third_item_card">
            <Image src={SecondCard} alt="card" width={244} height={188} />
            <h2>Lorem ipsum dolor sit .</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
              commodo est. Pellentesque eu placerat mauris. Etiam ut maximus
              ante. Suspendisse varius dolor nec bibendum dignissim. Proin in
              diam a justo sollicitudin mattis eu sagittis nunc. In hac
              habitasse platea dictumst.
            </p>
          </div>
          <div className="third_item_card">
            <Image src={ThirdCard} alt="card" width={244} height={188} />
            <h2>Lorem ipsum dolor sit .</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
              commodo est. Pellentesque eu placerat mauris. Etiam ut maximus
              ante. Suspendisse varius dolor nec bibendum dignissim. Proin in
              diam a justo sollicitudin mattis eu sagittis nunc. In hac
              habitasse platea dictumst.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default thirdSection;
