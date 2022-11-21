import React from "react";
import SecondCard from "./Subcomponents/secondCard";

function secondSection() {
  return (
    <div className="secondSection" style={{ marginBottom: "110px" }}>
      <div className="container">
        <div className="second_container_heading">
          <h1>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</h1>
        </div>
        <div className="second_section_card">
          {Array.from({ length: 3 }).map((item, idx) => {
            return <SecondCard key={idx} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default secondSection;
