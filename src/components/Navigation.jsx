import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      {/* =============Sub-Header Section Start============== */}
      <div className="sub-header">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* ==============Sub-Header Section End=============== */}
      {/* ===============Header Section Start================ */}
      <header>
        <article>
          <main>
            <div className="name">
              Gaurav Gunjan
            </div>
            <span className="hamburger hamburger-1">≡</span>
            <span className="hamburger hamburger-2">X</span>
            {/* ==========Nav Section Start========== */}
            <nav>
              <ul>
                <li>
                  <Link to={"/"}>HOME</Link>
                  <Link to={"/about"}>ABOUT</Link>
                  <Link to={"/portfolio"}>PORTFOLIO</Link>
                  <Link to={"/contact"}>CONTACT</Link>
                </li>
              </ul>
            </nav>
            {/* ==========Nav Section End========== */}
          </main>
        </article>
      </header>
      {/* ===============Header Section End================ */}
    </>
  );
};

export default Navigation;
