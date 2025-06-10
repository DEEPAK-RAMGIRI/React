import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Done By Deepak ⓒ {currentYear}</p>
    </footer>
  );
}

export default Footer;
