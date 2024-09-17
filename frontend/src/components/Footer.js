import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        textAlign: "center",
        padding: "10px",
        backgroundColor: "#f1f1f1",
      }}
    >
      <p>
        © {currentYear} <b>Portify</b>. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;