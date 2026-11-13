import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    { title: "Опытные педагоги", color: "var(--green)" },
    { title: "Уютная атмосфера", color: "var(--yellow)" },
    { title: "Малые группы", color: "var(--pink)" },
    { title: "Игровой формат", color: "var(--blue)" },
  ];

  return (
    <section className="container">
      <h2 className="section-title">Почему выбирают нас?</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-item"
            style={{
              backgroundColor: feature.color,
              color: feature.color === "var(--yellow)" ? "#333" : "white",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 style={{ fontSize: "1.2rem" }}>{feature.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
