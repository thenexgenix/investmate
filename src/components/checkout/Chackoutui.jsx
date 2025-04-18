import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useInvestMassage from "../../hook/useInvestMassage";

const Chackoutui = () => {
  const {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit
  } = useInvestMassage();

  const [localFormData, setLocalFormData] = useState({
    firstName: "",
    lastName: "",
    country: "Bangladesh",
    street: "",
    houseNumber: "",
    apartment: "",
    townCity: "",
    district: "",
    postcode: "",
    phone: "",
    email: "",
    amount: 5000,
  });

  const [showPopup, setShowPopup] = useState(false);

  // Effect to handle popup display and auto-close
  useEffect(() => {
    if (submitStatus.message) {
      setShowPopup(true);
      
      // Auto-close popup after 5 seconds
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  // Effect to clear form after successful submission
  useEffect(() => {
    if (submitStatus.success) {
      // Reset local form data
      setLocalFormData({
        firstName: "",
        lastName: "",
        country: "Bangladesh",
        street: "",
        houseNumber: "",
        apartment: "",
        townCity: "",
        district: "",
        postcode: "",
        phone: "",
        email: "",
        amount: 5000,
      });
    }
  }, [submitStatus.success]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData((prev) => ({ ...prev, [name]: value }));
    
    // Also update the formData in useInvestMassage hook
    if (name === 'email') {
      handleChange({ target: { name: 'email', value } });
    }
  };

  const handleAmountChange = (amount) => {
    setLocalFormData((prev) => ({ ...prev, amount }));
    // Update investment amount in useInvestMassage hook
    handleChange({ target: { name: 'investmentAmount', value: amount.toString() } });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Update the name field in useInvestMassage hook
    handleChange({ 
      target: { 
        name: 'name', 
        value: `${localFormData.firstName} ${localFormData.lastName}` 
      } 
    });
    
    // Update the message field with form details
    const message = `
      Investment Interest:
      Name: ${localFormData.firstName} ${localFormData.lastName}
      Email: ${localFormData.email}
      Phone: ${localFormData.phone}
      Country: ${localFormData.country}
      Address: ${localFormData.street}, ${localFormData.apartment}
      City: ${localFormData.townCity}
      District: ${localFormData.district}
      Postcode: ${localFormData.postcode}
      Investment Amount: ${localFormData.amount}
      Interested Project: ${formData.interestedProject}
    `;
    
    handleChange({ target: { name: 'message', value: message } });
    
    // Submit the form
    handleSubmit(e);
  };

  // Popup variants for animation
  const popupVariants = {
    hidden: { 
      opacity: 0, 
      y: -50,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      scale: 0.9,
      transition: {
        duration: 0.2
      }
    }
  };

  // Project options
  const projectOptions = [
    { id: "1", name: "Sustainable Agriculture" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
        <div
          className="relative mb-6  h-52 rounded-xl md:h-64 flex justify-center items-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1633158829875-e5316a358c6f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment : "fixed"
          }}
        >
          <h2 className="text-2xl md:text-5xl font-bold capitalize  ">Submit your Interest</h2>
        </div>

        {/* Enhanced Popup with Framer Motion */}
        <AnimatePresence>
          {showPopup && (
            <motion.div 
              className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
                submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex items-center">
                <div className="mr-3">
                  {submitStatus.success ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 500, 
                        delay: 0.2 
                      }}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 500, 
                        delay: 0.2 
                      }}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </motion.div>
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-lg">
                    {submitStatus.success ? "Thank You!" : "Oops! Something went wrong"}
                  </h3>
                  <p className="text-sm">
                    {submitStatus.success 
                      ? "We've received your investment interest. Our team will contact you shortly with next steps." 
                      : "We couldn't process your submission. Please try again or contact support if the issue persists."}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleFormSubmit}>
          <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="firstName"
              value={localFormData.firstName}
              onChange={handleInputChange}
              placeholder="First Name *"
              className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
            <input
              type="text"
              name="lastName"
              value={localFormData.lastName}
              onChange={handleInputChange}
              placeholder="Last Name *"
              className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <select
            name="country"
            value={localFormData.country}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          >
            <option value="Bangladesh">Bangladesh</option>
            {/* Add more countries as needed */}
          </select>

          <input
            type="text"
            name="street"
            value={localFormData.street}
            onChange={handleInputChange}
            placeholder="House number and street name *"
            className="w-full border border-gray-300 rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />

          <input
            type="text"
            name="apartment"
            value={localFormData.apartment}
            onChange={handleInputChange}
            placeholder="Apartment, suite, unit etc. (optional)"
            className="w-full border border-gray-300 rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          <input
            type="text"
            name="townCity"
            value={localFormData.townCity}
            onChange={handleInputChange}
            placeholder="Town / City *"
            className="w-full border border-gray-300 rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />

          <input
            type="text"
            name="district"
            value={localFormData.district}
            onChange={handleInputChange}
            placeholder="District"
            className="w-full border border-gray-300 rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          <input
            type="text"
            name="postcode"
            value={localFormData.postcode}
            onChange={handleInputChange}
            placeholder="Postcode / ZIP (optional)"
            className="w-full border border-gray-300 rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          <input
            type="tel"
            name="phone"
            value={localFormData.phone}
            onChange={handleInputChange}
            placeholder="Phone *"
            className="w-full border border-gray-300 rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />

          <input
            type="email"
            name="email"
            value={localFormData.email}
            onChange={handleInputChange}
            placeholder="Email *"
            className="w-full border border-gray-300 rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />

          {/* New Interested Project field */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Interested Project *</label>
            <select
              name="interestedProject"
              value={formData.interestedProject}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            >
              <option value="">Select a project you're interested in</option>
              {projectOptions.map(option => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
            {errors.interestedProject && (
              <p className="text-red-500 text-sm mt-1">{errors.interestedProject}</p>
            )}
          </div>

          <div className="mb-4">
            <p className="font-semibold mb-2">Select Amount</p>
            <div className="flex gap-2">
              {[5000, 10000, 25000, 100000].map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleAmountChange(item)}
                  className={`border rounded p-2 ${
                    localFormData.amount === item
                      ? "bg-[#00B67A] text-white"
                      : "bg-gray-100"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <p className="font-semibold">Amount</p>
            <p className="text-lg font-bold">{localFormData.amount}</p>
          </div>

          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="agreedToTerms"
                checked={formData.agreedToTerms}
                onChange={handleChange}
                className="mr-2"
                required
              />
              <span>I agree to the terms and conditions</span>
            </label>
            {errors.agreedToTerms && (
              <p className="text-red-500 text-sm">{errors.agreedToTerms}</p>
            )}
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#00B67A] text-white rounded p-2 hover:bg-[#00b679dc] transition disabled:opacity-50"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? "Submitting..." : "Submit Interest"}
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default Chackoutui;
