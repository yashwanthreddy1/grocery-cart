import React from "react";
import PrimaryNav from "./PrimaryNav";
import HeaderHero from "./HeaderHero";
import SecondaryNav from "./SecondaryNav";
import "./Header.css";

function Header() {
  return (
    <div className="js-app">
      <header className="ic-nav-new" id="header" role="banner">
        <div
          style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
          data-radium="true"
        >
          <div className="header-inner-wrapper">
            <a
              href="#store-wrapper"
              aria-label="Skip Navigation"
              style={{
                position: "fixed",
                top: "-200px",
                left: "calc(50vw - 100px)",
                width: "300px",
                height: "30px",
                backgroundColor: "#fff",
                border: "1px solid #43B02A",
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "30px",
                textAlign: "center",
                transition: "top 100ms ease-in-out",
                zIndex: 99999
              }}
              data-bypass="true"
              id="skip_navigation_link"
            >
              Skip Navigation
            </a>
            <PrimaryNav />
            <HeaderHero />
            <div style={{ height: "0px" }}></div>
          </div>
          <span></span>
          <div className="store_overlay"></div>
          <SecondaryNav />
        </div>
      </header>
    </div>
  );
}

export default Header;
