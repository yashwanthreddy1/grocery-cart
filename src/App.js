import React from "react";
import Header from "./Header";
import Main from "./Main";
import "./App.css";

function App() {
  return (
    <div>
      <Header />

      <Main />
      {setTimeout(scroll, 500)}
    </div>
  );
}

function scroll() {
  const header = document.getElementById("secondaryNav");
  console.log("header", header);
  const sticky = header.offsetTop;
  console.log("sticky", sticky);
  window.onscroll = function () {
    console.log("wpyo", window.pageYOffset);
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  };
}

export default App;
