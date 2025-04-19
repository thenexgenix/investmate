import React from "react";
import CountUp from "react-countup";
import { motion } from "motion/react";

const Achievement = () => {
  const stats = [
    { end: 1000, suffix: "+", label: "Signature every hour" },
    { end: 50, suffix: "+", label: "Victory each month" },
    { end: 100, suffix: "k+", label: "Fundraised per year" },
  ];

  return (
    <div className="grid grid-cols-1 rounded-xl md:flex md:justify-around px-0  md:px-10 lg:px-40 xl:px-60 gap-12 py-10 bg-[#00B67A] text-[#FFFFFF]   mx-auto">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold">
            <CountUp end={stat.end} duration={2.5} suffix={stat.suffix} />
          </h2>
          <p className="text-sm mt-1">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Achievement;
