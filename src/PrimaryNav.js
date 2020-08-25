/* jshint esversion: 6 */
import React from "react";
import "./PrimaryNav.css";

function PrimaryNav() {
  return (
    <div
      className="header-primary-nav"
      id="primaryNav"
      style={{
        height: "56px",
        top: "0px",
        display: "flex",
        backgroundColor: "rgba(255, 255, 255, 0)",
        pointerEvents: "none"
      }}
    >
      <div
        className="header-primary-nav-left"
        style={{
          flexGrow: 0,
          whiteSpace: "nowrap",
          pointerEvents: "auto",
          minWidth: "170px"
        }}
      >
        <div className="logo-wrapper clearfix pull-left">
          <div className="header-logo-inner-wrapper">
            <a
              title="Instacart Home"
              aria-label="Instacart Home"
              className="header-logo-white"
              style={{
                color: "rgb(67, 176, 42)",
                opacity: 1,
                visibility: "inline-block",
                backgroundImage:
                  "url(https://d2guulkeunn7d8.cloudfront.net/assets/beetstrap/brand/instacart-logo-white@3x-02fa8904479ae7f547c730d787a0ca35ddcb2a26763d3b2ca79b4ee2dc49babc.png)"
              }}
              href="#"
              data-bypass="false"
              data-radium="true"
            ></a>
            <a
              title="Instacart"
              aria-label="Instacart"
              className="header-logo-color"
              style={{
                color: "rgb(67, 176, 42)",
                opacity: 0,
                display: "none",
                backgroundImage:
                  "url(https://d2guulkeunn7d8.cloudfront.net/assets/beetstrap/brand/instacart-logo-color@3x-586fdf73b07dc9ca4b2c9a57f85f82c46f35debd4fd1887227b83f68e41d4f87.png)"
              }}
              href="#"
              data-bypass="false"
              data-radium="true"
            ></a>
          </div>
        </div>
        <a
          className="primary-nav-link"
          elementattributes="[object Object]"
          href="#"
          data-bypass="true"
          role="button"
          aria-expanded="false"
          style={{
            color: "rgb(67, 176, 42)",
            padding: "16px"
          }}
          data-identifier="storechooser_link"
          data-radium="true"
        >
          Stores
          <i
            style={{
              fontSize: "16px",
              position: "relative",
              fontFamily: "ic-icons",
              fontStyle: "normal",
              fontWeight: "normal",
              fontVariant: "normal",
              textTransform: "none",
              speak: "none",
              lineHeight: 1,
              fontSmoothing: "antialiased",
              osxFontSmoothing: "grayscale",
              marginLeft: "3px",
              top: "2px",
              display: "inline-block",
              transition: "transform 500ms"
            }}
            aria-hidden="true"
            data-radium="true"
          >
            
          </i>
        </a>
      </div>
      <div
        className="header-primary-nav-center"
        style={{
          opacity: -4,
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          pointerEvents: "auto"
        }}
      ></div>
      <div
        className="header-primary-nav-right"
        style={{
          flexGrow: 0,
          whiteSpace: "nowrap",
          pointerEvents: "auto"
        }}
      >
        <div
          className="dropdown nav-dropdown account-dropdown"
          style={{
            display: "inline-block"
          }}
          data-radium="true"
        >
          <a
            href="#"
            data-bypass="true"
            role="button"
            aria-expanded="false"
            style={{
              color: "rgb(67, 176, 42)",
              padding: "16px"
            }}
            className="primary-nav-link"
            data-radium="true"
          >
            <div data-radium="true">
              <span>Account</span>
              <i
                style={{
                  fontSize: "16px",
                  position: "relative",
                  fontFamily: "ic-icons",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontVariant: "normal",
                  textTransform: "none",
                  speak: "none",
                  lineHeight: 1,
                  fontSmoothing: "antialiased",
                  osxFontSmoothing: "grayscale",
                  marginLeft: "3px",
                  top: "2px",
                  display: "inline-block",
                  transition: "transform 500ms"
                }}
                aria-hidden="true"
                data-radium="true"
              >
                
              </i>
            </div>
          </a>
          <ul className="dropdown-menu">
            <li>
              <a
                href="/store/account"
                style={{
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "#757575",
                  fontSize: "24px",
                  fontWeight: "300"
                }}
                data-radium="true"
              >
                , Yash
              </a>
            </li>
            <li className="divider"></li>
            <li>
              <a
                href="/store/account"
                style={{
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "#757575"
                }}
                data-radium="true"
              >
                
              </a>
            </li>
            <li>
              <a
                href="/store/account/orders"
                style={{
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "#757575"
                }}
                data-radium="true"
              >
                <i
                  style={{
                    fontSize: "16px",
                    position: "relative",
                    fontFamily: "ic-icons",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontVariant: "normal",
                    textTransform: "none",
                    speak: "none",
                    lineHeight: 1,
                    fontSmoothing: "antialiased",
                    osxFontSmoothing: "grayscale",
                    marginRight: "5px",
                    top: "3px"
                  }}
                  aria-hidden="true"
                  data-radium="true"
                >
                  
                </i>
              </a>
            </li>
            <li>
              <a
                href="#coupon"
                style={{
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "#757575"
                }}
                data-bypass="true"
                data-radium="true"
              >
                <i
                  style={{
                    fontSize: "16px",
                    position: "relative",
                    fontFamily: "ic-icons",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontVariant: "normal",
                    textTransform: "none",
                    speak: "none",
                    lineHeight: 1,
                    fontSmoothing: "antialiased",
                    osxFontSmoothing: "grayscale",
                    marginRight: "5px",
                    top: "3px"
                  }}
                  aria-hidden="true"
                  data-radium="true"
                >
                  
                </i>
              </a>
            </li>
            <li>
              <a
                href="/store/referrals"
                style={{
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "#43b02a"
                }}
                data-radium="true"
              >
                <i
                  style={{
                    fontSize: "16px",
                    position: "relative",
                    fontFamily: "ic-icons",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontVariant: "normal",
                    textTransform: "none",
                    speak: "none",
                    lineHeight: 1,
                    fontSmoothing: "antialiased",
                    osxFontSmoothing: "grayscale",
                    marginRight: "5px",
                    top: "3px"
                  }}
                  aria-hidden="true"
                  data-radium="true"
                >
                  
                </i>
                Invite Friends, Get $50
              </a>
            </li>
            <li className="divider"></li>
            <li>
              <a
                href="/store/shop_with_friends"
                style={{
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "#757575"
                }}
                data-radium="true"
              >
                <i
                  style={{
                    fontSize: "16px",
                    position: "relative",
                    fontFamily: "ic-icons",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontVariant: "normal",
                    textTransform: "none",
                    speak: "none",
                    lineHeight: 1,
                    fontSmoothing: "antialiased",
                    osxFontSmoothing: "grayscale",
                    marginRight: "5px",
                    top: "3px"
                  }}
                  aria-hidden="true"
                  data-radium="true"
                >
                  
                </i>
                Group Carts
              </a>
            </li>
            <li>
              <a
                href="/store/gift_cards/send"
                style={{
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "#757575"
                }}
                data-radium="true"
              >
                <i
                  style={{
                    fontSize: "16px",
                    position: "relative",
                    fontFamily: "ic-icons",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontVariant: "normal",
                    textTransform: "none",
                    speak: "none",
                    lineHeight: 1,
                    fontSmoothing: "antialiased",
                    osxFontSmoothing: "grayscale",
                    marginRight: "5px",
                    top: "3px"
                  }}
                  aria-hidden="true"
                  data-radium="true"
                >
                  
                </i>
                Buy Gift Card
              </a>
            </li>
            <li>
              <a
                href="/store/subscriptions/account"
                style={{
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "#757575"
                }}
                data-radium="true"
              >
                <i
                  style={{
                    fontSize: "16px",
                    position: "relative",
                    fontFamily: "ic-icons",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontVariant: "normal",
                    textTransform: "none",
                    speak: "none",
                    lineHeight: 1,
                    fontSmoothing: "antialiased",
                    osxFontSmoothing: "grayscale",
                    marginRight: "5px",
                    top: "3px"
                  }}
                  aria-hidden="true"
                  data-radium="true"
                >
                  
                </i>
                Grocerycart Express
              </a>
            </li>
            <li>
              <a
                href="/help/section/how-instacart-works"
                style={{
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "#757575"
                }}
                data-radium="true"
              >
                <i
                  style={{
                    fontSize: "16px",
                    position: "relative",
                    fontFamily: "ic-icons",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontVariant: "normal",
                    textTransform: "none",
                    speak: "none",
                    lineHeight: 1,
                    fontSmoothing: "antialiased",
                    osxFontSmoothing: "grayscale",
                    marginRight: "5px",
                    top: "3px"
                  }}
                  aria-hidden="true"
                  data-radium="true"
                >
                  
                </i>
                How Grocerycart Works
              </a>
            </li>
            <li className="divider"></li>
            <li>
              <a
                href="#logout"
                style={{
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "#757575"
                }}
                data-bypass="true"
                data-radium="true"
              >
                <i
                  style={{
                    fontSize: "16px",
                    position: "relative",
                    fontFamily: "ic-icons",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontVariant: "normal",
                    textTransform: "none",
                    speak: "none",
                    lineHeight: 1,
                    fontSmoothing: "antialiased",
                    osxFontSmoothing: "grayscale",
                    marginRight: "5px",
                    top: "3px"
                  }}
                  aria-hidden="true"
                  data-radium="true"
                >
                  
                </i>
                Log Out
              </a>
            </li>
            <li className="static-pages-links">
              <ul className="small-list">
                <li>
                  <a
                    href="/press"
                    style={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "#757575"
                    }}
                    data-radium="true"
                  >
                    Press
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    style={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "#757575"
                    }}
                    data-radium="true"
                  >
                    Jobs
                  </a>
                </li>
                <li className="legal-link">
                  <a
                    href="/terms"
                    style={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "#757575"
                    }}
                    data-radium="true"
                  >
                    Terms
                  </a>
                </li>
                <li className="legal-link">
                  <a
                    href="/privacy"
                    style={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "#757575"
                    }}
                    data-radium="true"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <a
          href="/help"
          data-bypass="true"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "rgb(67, 176, 42)",
            padding: "16px"
          }}
          className="rmq-520c50c5 primary-nav-link"
          data-radium="true"
        >
          Help
        </a>
        <div
          style={{
            display: "inline-flex"
          }}
        >
          <button
            type="button"
            style={{
              touchAction: "manipulation",
              cursor: "pointer",
              border: "1px solid transparent",
              borderTopRightRadius: "4px",
              borderBottomRightRadius: "4px",
              borderBottomLeftRadius: "4px",
              borderTopLeftRadius: "4px",
              fontWeight: 600,
              whiteSpace: "nowrap",
              userSelect: "none",
              WebkitFontSmoothing: "antialiased",
              backgroundImage: "none",
              MozOsxFontSmoothing: "grayscale",
              display: "inline-flex",
              alignItems: "center",
              paddingLeft: "16px",
              paddingRight: "16px",
              fontSize: "16px",
              height: "40px",
              backgroundColor: "#43b02a",
              color: "#ffffff",
              marginRight: "16px",
              top: "5px",
              position: "relative"
            }}
            aria-label="View Cart. Items in cart: 0"
            data-identifier="cart_view_button"
            data-radium="true"
          >
            <i
              style={{
                fontSize: "22px",
                position: "relative",
                fontFamily: "ic-icons",
                fontStyle: "normal",
                fontWeight: "normal",
                fontVariant: "normal",
                textTransform: "none",
                speak: "none",
                lineHeight: "38px",
                fontSmoothing: "antialiased",
                osxFontSmoothing: "grayscale",
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: "4px"
              }}
              aria-hidden="true"
              data-radium="true"
            >
              
            </i>
            Cart
            <span
              style={{
                backgroundColor: "#E8104A",
                color: "#fff",
                lineHeight: "26px",
                position: "absolute",
                right: "-10px",
                top: "-8px",
                width: "26px",
                height: "26px",
                borderRadius: "50%",
                display: "none"
              }}
              data-radium="true"
            >
              0
            </span>
          </button>
        </div>
        <div className="cart-popover cursor-pointer">
          <div
            className="popover bottom"
            style={{
              right: "16px",
              width: "412px",
              maxWidth: "412px",
              boxShadow: "0px 0px 16px rgba(0, 0, 0, .1)",
              border: "1px solid #E0E0E0",
              borderRadius: "8px"
            }}
          >
            <div>
              <div
                className="arrow"
                style={{
                  left: "365px"
                }}
              ></div>
              <div className="popover-content"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrimaryNav;
