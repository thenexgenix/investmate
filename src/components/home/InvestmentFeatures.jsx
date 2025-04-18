import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LineChart, Landmark, Handshake, X } from "lucide-react";

const investmentData = [
  {
    id: 1,
    title: "Investment Transparency",
    description:
      "Full disclosure on all investments, ensuring you know exactly where your money is going.",
    details:
      "Detailed info about Investment Transparency. Includes audit reports, investor dashboards, and more.",
    icon: <LineChart className="text-green-500 w-10 h-10" />,
  },
  {
    id: 2,
    title: "Islamic Finance Principles",
    description:
      "All investments are vetted to comply with Shariah law and ethical standards.",
    details:
      "Investments are reviewed by Islamic scholars. We avoid interest-based income or haram industries.",
    icon: <Landmark className="text-blue-600 w-10 h-10" />,
  },
  {
    id: 3,
    title: "Diverse Opportunities",
    description:
      "Access a wide range of Halal investment options across various sectors and risk levels.",
    details:
      "From real estate to ethical startups, we bring you various halal investment options with different risk levels.",
    icon: <Handshake className="text-emerald-600 w-10 h-10" />,
  },
];

const InvestmentFeatures = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="relative ">
      <div className="mt-20 py-10 px-4 md:px-20 lg:px-36 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
        {investmentData.map((item, index) => (
          <motion.div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white shadow-md rounded-xl p-6 text-center border border-[#00B67A] hover:shadow-lg transition-all cursor-pointer"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg p-10 max-w-md w-full relative shadow-lg flex flex-col gap-5"
            >
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
                onClick={() => setSelectedItem(null)}
              >
                <X />
              </button>
              <div className="flex items-center gap-4 mb-4">
                <div>{selectedItem.icon}</div>
                <div>
                  <h2 className="text-xl font-semibold">
                    {selectedItem.title}
                  </h2>
                </div>
              </div>
              <p className="text-gray-700">{selectedItem.details}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InvestmentFeatures;
