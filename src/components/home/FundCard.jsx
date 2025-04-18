import React, { useEffect, useState } from "react";
import { motion, animate } from "motion/react";
import { Link, NavLink } from "react-router";
import { BiSolidDonateHeart } from "react-icons/bi";

const CircularProgress = ({ percentage }) => {
  const radius = 40;
  const stroke = 8;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const controls = animate(0, percentage, {
      duration: 2,
      onUpdate: (v) => setProgress(v),
    });
    return () => controls.stop();
  }, [percentage]);

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke="#e5e7eb"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <motion.circle
        stroke="#10B981"
        fill="transparent"
        strokeWidth={stroke}
        strokeLinecap="round"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset }}
        transition={{ duration: 2 }}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="13"
        fill="#333"
        fontWeight="bold"
      >
        {Math.round(progress)}%
      </text>
    </svg>
  );
};

const FundCard = ({ funding }) => {
  const targetPercentage = funding.progress;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-sm mx-auto bg-white shadow-lg rounded-xl p-6 space-y-5 border-green-600 border-2"
    >
      {/* Top Section */}
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-sm text-gray-500">Funds Raised</h4>
          <h2 className="text-2xl font-bold text-gray-800">${funding.total_invested} USD invested</h2>
          <p className="text-xs text-gray-400">${funding.Goal} goal </p>
        </div>
        <div className="w-20 h-20">
          <CircularProgress percentage={targetPercentage} />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-3">
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="bg-[#00B67A] text-white py-2 rounded-lg font-semibold hover:bg-[#00b679d7]"
        >
          <NavLink to={"/checkout"}>Invest Now</NavLink>
        </motion.button>
      </div>

      {/* Status */}
      <div className="text-sm text-gray-700 flex items-center gap-2">
        <span role="img" aria-label="rocket">
          <BiSolidDonateHeart className="text-xl text-green-600" />
        </span>
        {funding.donated} people invested
      </div>

      {/* Goal */}
      <div>
        <p className="text-xs text-gray-500 font-medium">Goal</p>
        <h3 className="text-2xl lg:text-4xl font-bold bg-[linear-gradient(65deg,#00B67A_-40.61%,#2E74EC_-22.89%,#00B67A_24.46%,#2E74EC_100.95%)] text-transparent bg-clip-text">25</h3>
      </div>

      {/* Contributors */}
      <div>
        <h4 className="text-sm text-gray-600 font-medium mb-2">Contributors</h4>
        <div className="space-y-2">
          {[1, ].map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div>
                <p className="font-medium text-gray-800 text-sm">Bryan dash</p>
                <p className="text-xs text-gray-500">$95 • Recent donation</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="flex justify-between pt-4">
        <button className="border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1 hover:bg-gray-100">
          <span>⭐</span> Top Donation
        </button>
      </div>
    </motion.div>
  );
};

export default FundCard;
