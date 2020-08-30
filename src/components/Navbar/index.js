import React from "react";
import "./style.css";
import { useEffect, useState } from "react";

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => window.removeEventListener("scroll");
  }, []);
  console.log(show);
  return (
    <div className={`navbar ${show && "navbar__black"}`}>
      <img
        className="navbar__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
        alt="NetflixLogo"
      />
      <img
        className="navbar__avatar"
        src="https://image.flaticon.com/icons/png/512/870/870910.png"
        alt="user icon"
      />
    </div>
  );
}

export default Navbar;
