import React, { useState } from "react";
import Image from "next/image";
import Logo from "../public/image/logo.png";
import { AiOutlineDown } from "react-icons/ai";
import { BsFilterRight, BsXLg } from "react-icons/bs";

function Navbar() {
  const [show, setShow] = useState(true);

  const openMenu = (e: any) => {
    e.prevenDefault;
    setShow(!show);
  };
  return (
    <>
      <div
        className="navbar"
        style={{
          padding: "32px 0px",
        }}
      >
        <div className="container">
          <div
            className="logo"
            style={{
              margin: "auto",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Image
              src={Logo}
              alt="Picture of the author"
              width={163.86}
              height={47.83}
            />
          </div>
        </div>
      </div>
      <div
        className="nav_item"
        style={{
          margin: "auto",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            textAlign: "center",
            justifyContent: "center",
            paddingBottom: "16.2px",
            borderBottom: "1px solid  #707070",
          }}
        >
          <li>Nav1</li>
          <li>Nav2</li>
          <li>
            Nav3 <AiOutlineDown size={14} />
          </li>
          <li>
            Nav4 <AiOutlineDown size={14} />
          </li>
          <li>Nav5</li>
          <li>Nav6</li>
          <li>Nav7</li>
          <li>Nav8</li>
        </ul>
      </div>

      <div className="main_header">
        <div className="container">
          <div
            style={{
              top: "20px",
              left: "20px",
              position: "absolute",
              zIndex: 3,
            }}
          ></div>
          <input type="checkbox" id="active" onClick={openMenu} />
          <label htmlFor="active" className="menu-btn">
            {show ? (
              <BsFilterRight className="icon-menu" size={"3rem"} />
            ) : (
              <BsXLg />
            )}
          </label>
          <div className="wrapper ">
            <input type="checkbox" id="active" onClick={openMenu} />
            <label htmlFor="active" className="menu-btn">
              {show ? (
                <BsFilterRight className="icon-menu" size={"3rem"} />
              ) : (
                <BsXLg />
              )}
            </label>
            <ul
              style={{
                listStyle: "none",
                textAlign: "center",

                paddingBottom: "16.2px",
              }}
            >
              <li>Nav1</li>
              <li>Nav2</li>
              <li>
                Nav3 <AiOutlineDown size={14} />
              </li>
              <li>
                Nav4 <AiOutlineDown size={14} />
              </li>
              <li>Nav5</li>
              <li>Nav6</li>
              <li>Nav7</li>
              <li>Nav8</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
