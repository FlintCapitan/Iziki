import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero container">
      {/* Анимированные фоновые фигуры */}
      <motion.div
        className="blob shape-1"
        style={{ width: 300, height: 300, top: -50, left: -100 }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="blob shape-2"
        style={{ width: 250, height: 250, top: 100, right: -50 }}
        animate={{ scale: [1, 1.2, 1], rotate: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Растем, играем <br /> и учимся вместе!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{
          fontSize: "1.2rem",
          color: "#666",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        Развивающий центр "Изики" для детей от 2 до 16 лет. Логопеды, английский
        язык и море позитивных эмоций. Очно в Всеволожске и онлайн из любой
        точки мира.
      </motion.p>

      <motion.div
        className="hero-img-wrapper"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <img
          src="https://prazdnik164.ru/wp-content/uploads/2024/11/U4SLXeSw2rY.jpg"
          alt="Дети в центре"
          style={{
            width: "100%",
            maxWidth: "800px",
            border: "10px solid white",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
