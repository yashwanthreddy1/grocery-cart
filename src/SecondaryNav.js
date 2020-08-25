import React from "react";
import "./SecondaryNav.css";

function SecondaryNav() {
  return (
    <div
      className="rmq-d459ecd9 header-secondary-nav clearfix"
      id="secondaryNav"
      style={{
        top: "0px",
        backgroundColor: "rgb(255, 255, 255)",
        paddingLeft: "16px",
        paddingRight: "16px",
        display: "flex",
        boxShadow: "none"
      }}
      aria-hidden="false"
      data-radium="true"
    >
      <div
        className="rmq-d81419b8 header-secondary-nav-inner-wrapper"
        data-radium="true"
      >
        <nav
          className="navigation-tabs"
          style={{ width: "auto", float: "left" }}
          aria-label="navigation links"
          data-radium="true"
        >
          <ul
            className="rmq-ff7440a3 navigation-tabs-inner-wrapper unstyled clearfix"
            role="defaultValue"
            data-radium="true"
          >
            <li
              className="navigation-tab pull-left active"
              style={{ color: "rgb(67, 176, 42)" }}
              data-radium="true"
            >
              <a
                href="#Home"
                data-bypass="true"
                style={{ color: "rgb(67, 176, 42)", position: "relative" }}
                data-radium="true"
                aria-current="page"
              >
                <span>Home</span>
              </a>
            </li>
            <li
              className="navigation-tab pull-left"
              style={{ color: "rgb(117, 117, 117)" }}
              data-radium="true"
            >
              <a
                href="#Departments"
                data-bypass="true"
                style={{ color: "rgb(117, 117, 117)", position: "relative" }}
                data-radium="true"
              >
                <span>Departments</span>
              </a>
            </li>
            <li
              className="navigation-tab pull-left"
              style={{ color: "rgb(117, 117, 117)" }}
              data-radium="true"
            >
              <a
                href="#Savings"
                data-bypass="true"
                style={{ color: "rgb(117, 117, 117)", position: "relative" }}
                data-radium="true"
              >
                <span>Savings</span>
              </a>
            </li>
            <li
              className="navigation-tab pull-left"
              style={{ color: "rgb(117, 117, 117)" }}
              data-radium="true"
            >
              <a
                href="#Get $50"
                data-bypass="true"
                style={{ color: "rgb(117, 117, 117)", position: "relative" }}
                data-radium="true"
              >
                <span>Get $50</span>
              </a>
            </li>
            <li
              className="navigation-tab pull-left"
              style={{ color: "rgb(117, 117, 117)" }}
              data-radium="true"
            >
              <a
                href="#Your Items"
                data-bypass="true"
                style={{ color: "#757575", position: "relative" }}
                data-radium="true"
              >
                <span>Your Items</span>
              </a>
            </li>
            <div
              className="navigation-tab-seeker"
              style={{ backgroundColor: "rgb(67, 176, 42)", bottom: "0px" }}
              aria-hidden="true"
            ></div>
          </ul>
        </nav>
      </div>
      <div
        data-identifier="availability_chooser"
        style={{
          height: "55px",
          display: "flex",
          alignItems: "center",
          fontSize: "16px",
          color: "#757575",
          marginRight: "16px",
          position: "absolute",
          top: 0,
          right: 0
        }}
        className="rmq-e181a8bb"
        data-radium="true"
      >
        <div style={{ fontWeight: 600, color: "#424242" }} data-radium="true">
          Delivery to
        </div>
        <div
          data-radium="true"
          style={{
            height: "100%",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "flex-end",
            marginLeft: "8px"
          }}
        >
          <div
            data-radium="true"
            style={{ height: "100%", position: "relative" }}
          >
            <button
              className="rmq-ffabcfb8"
              data-radium="true"
              style={{
                padding: "0px 16px",
                background: "0px center",
                border: "0px",
                fontSize: "inherit",
                fontWeight: 600,
                fontFamily: "inherit",
                textAlign: "left",
                textDecoration: "none",
                minWidth: "0px",
                display: "flex",
                alignItems: "center",
                flex: "1 1 0%",
                height: "100%",
                color: "rgb(67, 176, 42)"
              }}
            >
              <span
                title="1304 West 2nd Street, 364"
                className="rmq-db5b060a"
                data-radium="true"
              >
                1304 West 2nd Street, 364
              </span>
              <svg
                width="18px"
                height="18px"
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="#43b02a"
                style={{ marginLeft: "8px", flexShrink: 0 }}
              >
                <path d="M12.728 15.711l4.979-5a.999.999 0 0 0-.002-1.415 1.005 1.005 0 0 0-1.413 0l-4.276 4.296-4.306-4.3a1.008 1.008 0 0 0-1.416-.002.998.998 0 0 0 0 1.415l5.013 5.006c.185.185.429.282.676.29.27.01.543-.087.745-.29z"></path>
              </svg>
            </button>
            <div
              data-radium="true"
              style={{
                width: "420px",
                position: "absolute",
                top: "0px",
                right: "0px"
              }}
            ></div>
          </div>
          <span data-radium="true">
            <span
              data-radium="true"
              style={{
                height: "24px",
                flex: "0 0 1px",
                background: "rgb(224, 224, 224)"
              }}
            ></span>
            <a
              type="button"
              href="/costco/info?tab=info"
              data-radium="true"
              style={{
                touchAction: "manipulation",
                cursor: "pointer",
                border: "0px",
                borderRadius: "4px",
                fontWeight: 600,
                whiteSpace: "nowrap",
                userSelect: "none",
                WebkitFontSmoothing: "antialiased",
                background: "0px center",
                display: "flex",
                alignItems: "center",
                padding: "0px 16px",
                fontSize: "inherit",
                height: "100%",
                color: "rgb(117, 117, 117)",
                boxSizing: "border-box",
                fontFamily: "inherit",
                textAlign: "left",
                textDecoration: "none",
                minWidth: "0px",
                flex: "1 1 0%"
              }}
            >
              <span title="Today" data-radium="true">
                Today
              </span>
              <div>
                <svg
                  width="18px"
                  height="18px"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  fill="currentColor"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ marginLeft: "8px", flexShrink: 0 }}
                >
                  <path d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm0-1c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-11.5a1 1 0 0 1 1 1V16a1 1 0 0 1-2 0v-4.5a1 1 0 0 1 1-1zM12 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
                </svg>
              </div>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SecondaryNav;
