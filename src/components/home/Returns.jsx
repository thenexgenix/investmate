import React from "react";
import roundimage from "../../assets/images/return-image.png";
import { motion } from "motion/react";
import { Handshake, BadgeDollarSign, TrendingUp } from "lucide-react";

const returnsData = [
  {
    title: "Equity-Based Sharing",
    description: "Own a stake in the next big idea.",
    icon: Handshake,
    color: "text-green-500",
  },
  {
    title: "Revenue Sharing",
    description: "Earn from real business success.",
    icon: BadgeDollarSign,
    color: "text-blue-500",
  },
  {
    title: "Profit-Driven Returns",
    description: "Share in the journey, reap the rewards.",
    icon: TrendingUp,
    color: "text-emerald-500",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.5 },
  }),
};
const Returns = () => {
  return (
    <section className="py-16 px-4 md:px-20 bg-[#F2F7F5]">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 items-center ">
        {/* Left Side: Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={roundimage}
            alt="Investment Illustration"
            className="w-full max-w-md mx-auto"
          />
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold text-green-600 mb-2">Returns</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Fuel Innovation &<br /> Secure Your Returns
          </h2>
          <p className="text-gray-700 mb-8 max-w-lg">
            Invest in innovation and secure your future. Our platform offers
            equity, revenue-sharing, and profit-driven models, ensuring your
            investments grow alongside visionary ideas.
          </p>

          {/*  cards */}
          <div className="space-y-6">
            {returnsData.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  variants={cardVariants}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full bg-opacity-10 ${item.color}`}
                  >
                    <Icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Returns;
