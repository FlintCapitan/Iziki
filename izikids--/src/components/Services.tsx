import React from "react";
import { motion } from "framer-motion";
import { BookOpen, MessageCircle } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Services = () => {
  return (
    <section id="services" className="container">
      <h2 className="section-title">Наши направления</h2>

      <motion.div
        className="services-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Карточка Логопеда */}
        <motion.div className="service-card" variants={itemVariants}>
          <div
            className="service-icon"
            style={{ backgroundColor: "var(--pink)" }}
          >
            <MessageCircle size={40} color="white" />
          </div>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "15px" }}>
            Услуги логопеда
          </h3>
          <p style={{ color: "#666" }}>
            Индивидуальные занятия по коррекции речи, постановке звуков и
            развитию связной речи.
          </p>
        </motion.div>

        {/* Карточка Английского */}
        <motion.div className="service-card" variants={itemVariants}>
          <div
            className="service-icon"
            style={{ backgroundColor: "var(--blue)" }}
          >
            <BookOpen size={40} color="white" />
          </div>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "15px" }}>
            Английский язык (6-16 лет)
          </h3>
          <p style={{ color: "#666" }}>
            Игровой английский для младших и подготовка к экзаменам для
            школьников по современным методикам.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
