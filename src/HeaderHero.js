import React from "react";
import "./HeaderHero.css";

function HeaderHero() {
  return (
    <div
      className="rmq-88d17f53 header-hero"
      style={{ height: "auto", marginTop: "0px", paddingBottom: "8px" }}
      aria-hidden="false"
      data-radium="true"
    >
      <div className="header-hero-image-wrapper" data-radium="true">
        <div
          className="header-hero-image-overlay"
          style={{
            background:
              "linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 80%)"
          }}
          data-radium="true"
        ></div>
        <div
          className="header-hero-image"
          style={{
            backgroundImage:
              "url('https://d2d8wwwkmhfcva.cloudfront.net/1024x/filters:quality(50)/d2lnr5mha7bycj.cloudfront.net/warehouse/background_image/5/92fb7e34-abc9-418f-9472-9e427799a379.png')",
            backgroundPositionY: "calc(50% + 0px)",
            filter: "blur(2px)"
          }}
          data-radium="true"
        ></div>
      </div>
      <div
        className="header-hero-inner-wrapper"
        style={{ opacity: 1 }}
        data-radium="true"
      >
        <div
          className="header-hero-logo clickable"
          aria-hidden="true"
          data-identifier="store_logo"
          data-radium="true"
        >
          <img
            src="https://d2d8wwwkmhfcva.cloudfront.net/156x/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/5/65f2304b-908e-4cd0-981d-0d4e4effa8de.png"
            alt="Costco"
          />
          <div className="logo-background"></div>
        </div>
        <h1 aria-label="Costco storefront">Costco</h1>
        <p
          className="header-hero-price-transparency centered higher"
          data-radium="true"
        >
          <span data-identifier="store_info">
            <a
              type="button"
              style={{
                touchAction: "manipulation",
                cursor: "pointer",
                border: "1px solid transparent",
                borderRadius: "4px",
                fontWeight: 600,
                whiteSpace: "nowrap",
                userSelect: "none",
                WebkitFontSmoothing: "antialiased",
                backgroundImage: "none",
                MozOsxFontSmoothing: "grayscale",
                display: "inline",
                alignItems: "center",
                paddingLeft: "8px",
                paddingRight: "8px",
                fontSize: "14px",
                height: "32px",
                backgroundColor: "transparent",
                color: "rgb(255, 255, 255)",
                boxSizing: "border-box"
              }}
              href="costco/info?source_type=storefront_header"
              className="rad-102324f4"
              data-radium="true"
            >
              View pricing policy · More info
            </a>
          </span>
        </p>
        <div
          aria-haspopup="listbox"
          aria-owns="dropdown-container"
          aria-expanded="false"
          aria-label="Search Costco..."
          style={{
            maxWidth: "700px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "8px",
            paddingRight: "8px",
            width: "100%",
            position: "relative"
          }}
        >
          <form
            role="search"
            action="."
            data-identifier="search_input"
            data-radium="true"
            style={{
              display: "flex",
              flexWrap: "nowrap",
              borderRadius: "5px",
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 0px 0px 1px"
            }}
          >
            <input
              autoCorrect="off"
              autoCapitalize="off"
              type="search"
              placeholder="Search Costco..."
              aria-controls="dropdown-container"
              aria-autocomplete="both"
              data-radium="true"
              value="defaultValue"
              style={{
                borderRadius: "5px 0px 0px 5px",
                flexGrow: 1,
                height: "36px",
                marginBottom: "0px",
                fontSize: "16px",
                backgroundColor: "rgb(247, 247, 247)",
                appearance: "none",
                lineHeight: "normal"
              }}
            />
            <button
              type="submit"
              data-radium="true"
              style={{
                touchAction: "manipulation",
                cursor: "pointer",
                border: "1px solid transparent",
                borderRadius: "0px 5px 5px 0px",
                fontWeight: 600,
                whiteSpace: "nowrap",
                userSelect: "none",
                WebkitFontSmoothing: "antialiased",
                backgroundImage: "none",
                display: "inline-flex",
                alignItems: "center",
                paddingLeft: "16px",
                paddingRight: "16px",
                fontSize: "16px",
                height: "36px",
                backgroundColor: "rgb(67, 176, 42)",
                color: "rgb(255, 255, 255)",
                width: "50px"
              }}
            >
              <i
                aria-hidden="true"
                data-radium="true"
                style={{
                  fontSize: "16px",
                  position: "relative",
                  fontFamily: "ic-icons",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontVariant: "normal",
                  textTransform: "none",
                  speak: "none",
                  lineHeight: 1
                }}
              >
                
              </i>
              <span data-radium="true" style={{ marginRight: "8px" }}></span>
            </button>
          </form>
          <div
            data-testid="autocomplete-dropdown"
            className="search-dropdown"
            style={{
              zIndex: 101,
              display: "none",
              position: "absolute",
              left: "0px",
              right: "0px",
              marginTop: "4px",
              padding: "inherit"
            }}
          >
            <ul
              role="listbox"
              id="dropdown-container"
              style={{ margin: "0px", padding: "0px" }}
            >
              <div
                className="module-renderer"
                style={{
                  padding: "0px",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  overflow: "hidden"
                }}
              >
                <div>
                  <div
                    className="rmq-2b6e2857 rmq-b03aad7b rmq-c611fdaa rmq-2e94fefd rmq-835d8432 rmq-42fc83d9"
                    data-radium="true"
                    style={{ width: "100vw", justifyContent: "center" }}
                  >
                    <div
                      className="rmq-c321f64e rmq-3a4a3111 rmq-fa12f81f rmq-d421b412 rmq-f0cdd0bf"
                      data-radium="true"
                      style={{ maxWidth: "100%" }}
                    >
                      <div
                        className="module-wrapper module-wrapper"
                        style={{ marginBottom: "0px" }}
                      ></div>
                      <div
                        className="module-wrapper module-wrapper"
                        style={{ marginBottom: "0px" }}
                      ></div>
                      <div
                        className="module-wrapper module-wrapper"
                        style={{ marginBottom: "0px" }}
                      ></div>
                      <div
                        className="module-wrapper module-wrapper"
                        style={{ marginBottom: "0px" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderHero;
