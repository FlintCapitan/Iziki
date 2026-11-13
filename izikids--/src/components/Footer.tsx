import React from "react";

const Footer = () => {
  return (
    <footer className="footer container">
      <p>© {new Date().getFullYear()} Izikids.</p>
      <p style={{ fontSize: "0.8rem", marginTop: "10px" }}>
        Telegram: @englishmamavibe
      </p>
    </footer>
  );
};

export default Footer;
