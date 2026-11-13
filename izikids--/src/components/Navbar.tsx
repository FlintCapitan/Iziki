import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="header container"
    >
      <div className="logo">Изики ✨</div>
      <nav>
        <a
          href="#services"
          style={{
            marginRight: "20px",
            textDecoration: "none",
            color: "#333",
            fontWeight: "bold",
          }}
        >
          Услуги
        </a>
        <a
          href="#contact"
          className="btn"
          style={{ padding: "10px 20px", fontSize: "0.9rem" }}
        >
          Записаться
        </a>
      </nav>
    </motion.header>
  );
};

export default Navbar;
