import React from "react";
// import secureImage from "../../assets/images/secure-image.png";
import { motion } from "motion/react";
import { ShieldCheck, Turtle } from "lucide-react";

const securityFeatures = [
  {
    title: "End-to-End Encryption",
    description:
      "All user data, transactions, and communications are protected with AES-256 encryption, ensuring that sensitive information remains secure.",
  },
  {
    title: "Multi-Factor Authentication (MFA)",
    description:
      "To prevent unauthorized access, we enforce MFA, requiring users to verify their identity through multiple authentication steps.",
  },
  {
    title: "Secure Payment Processing",
    description:
      "We partner with PCI-DSS compliant payment gateways to process all transactions securely, preventing fraud and unauthorized payments.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const Secure = () => {
  return (
    <section className="py-16 px-4 md:px-20 bg-[#FFFFFF] ">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center lg:px-14">
        {/*  Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{once : true}}
        >
          <p className="text-sm font-semibold text-green-600 mb-2">Secure</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Investments Are
            <br /> Our Top Priority
          </h2>
          <p className="text-gray-700 mb-8 max-w-xl">
            We implement cutting-edge security measures to protect your
            investments. Our platform uses encryption and multi-factor
            authentication to ensure your data remains safe.
          </p>

          <div className="space-y-6">
            {securityFeatures.map((item, index) => (
              <motion.div
                key={item.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="mt-1 text-green-500">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/*Image section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:px-5  xl:px-20"
        >
          <img
            src={
              "https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="Secure System"
            className="rounded-tl-[30%] rounded-br-[30%] w-full  mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Secure;
