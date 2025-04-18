import React, { useState } from "react";
import { NavLink, useParams } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, ShieldCheck, Mail, Phone, MapPin, X } from "lucide-react";
import useProject from "./../../hook/useProject";
import Button from "../Button";
import FundCard from "./FundCard";

const ProjectDetailsPage = () => {
  const params = useParams();
  const { getProjectByTitle, loading, error } = useProject();
  const data = getProjectByTitle(params.title);
  const [showSharePopup, setShowSharePopup] = useState(false);

  const handleShare = () => {
    setShowSharePopup(true);
  };

  const closeSharePopup = () => {
    setShowSharePopup(false);
  };

  if (loading) {
    return (
      <motion.div
        className="h-screen w-full flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.5 }}
      >
        <Leaf className="w-16 h-16 text-green-500 animate-bounce" />
        <p className="text-gray-600 mt-2">Loading project details...</p>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        className="h-screen w-full flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
      >
        <div className="bg-red-50 rounded-lg p-8 flex flex-col items-center">
          <div className="text-red-500 mb-4">
            <svg
              className="w-16 h-16"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Error Loading Project
          </h3>
          <p className="text-gray-600 text-center mb-4">
            We encountered an error while loading the project details. Please
            try again later.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            Retry
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <>
      <main>
        {data && (
          <section className="mt-32 md:mt-28 lg:mt-36 px-10 md:px-[10%]  mx-auto space-y-16">
            <div className=" flex flex-col md:relative  md:grid md:grid-cols-5 md:grid-rows-2 gap-4">
              <div className="col-span-3 row-span-2">
                {/* Header Image & Title */}
                <motion.div
                  className="space-y-4 border-b border-gray-200 pb-10"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-3xl mt-20 md:text-4xl font-bold text-start">
                    {data.title}
                  </h1>
                  <img
                    src={data.image_url}
                    alt={data.title}
                    className="w-full h-auto md:h-[500px]  rounded-md object-contain- o shadow-md"
                  />
                  <div className="flex items-center gap-2 text-green-700 text-sm border border-green-500 bg-green-100 w-fit px-3 py-1 rounded-full">
                    <ShieldCheck size={16} />
                    Donation Protected
                  </div>
                </motion.div>
                {/* Description Section */}
                <motion.div
                  className="space-y-6 border-b border-gray-200 pb-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="border-b-[3px] border-green-600 w-fit font-bold capitalize">
                    description
                  </h3>
                  <h2 className=" md:text-xl  text-gray-800 text-justify">
                    {data.details.introduction}
                  </h2>
                  <h3 className="text-gray-600">
                    {data.details.join_investor_note}
                  </h3>

                  <div className="space-y-3 ">
                    <a
                      href="https://www.facebook.com/investmate.pda/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 underline hover:text-blue-800 mb-5"
                    >
                      https://www.facebook.com/investmate.pda
                    </a>
                    <div className="flex flex-wrap gap-4 mt-7">
                      <NavLink to={"/checkout"}>
                        <Button text="Invest Now" />
                      </NavLink>
                      <button onClick={handleShare}>
                        <Button text="Share" />
                      </button>
                    </div>
                  </div>
                </motion.div>{" "}
              </div>
              <div className="col-span-2 row-span-2 col-start-4 sticky top-20 h-fit">
                <FundCard funding={data.funding} />
              </div>
            </div>
            {/* Contact Section */}
            <motion.div
              className="border-b border-gray-200 pb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="space-y-2 mb-6 text-center flex flex-col  gap-2 md:gap-4">
                <h5 className="uppercase tracking-widest text-sm text-gray-500">
                  Connect
                </h5>
                <h3 className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold text-gray-800">
                  Get in Touch
                </h3>
                <h4 className="text-gray-600">
                  We're here to answer your questions and provide more
                  information about our projects
                </h4>
              </div>

              <div className=" flex flex-col md:grid md:grid-cols-5 md:grid-rows-2 gap-10 md:gap-20 lg:gap-40 xl:gap-48 items-start md:items-center ">
                <div className="w-full h-[300px] md:h-[350px] lg:h-[500px] overflow-hidden rounded-lg shadow-md col-span-3 row-span-2">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4594.5354241828245!2d91.9704551752972!3d22.460971079571344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad2f1dac23e023%3A0xa8390badc675b5e7!2sIT%20Business%20Incubator%2C%20CUET!5e1!3m2!1sen!2sbd!4v1744988521395!5m2!1sen!2sbd"
                    className="w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="space-y-4 text-gray-700  col-span-2 row-span-2 col-start-4 text-sm  md:text-xl">
                  <div className="flex items-center gap-2">
                    <Mail className="text-green-600" size={18} />
                    <a
                      href={`mailto:${data.contact.email}`}
                      className="hover:underline"
                    >
                      {data.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="text-green-600" size={18} />
                    <a
                      href={`tel:${data.contact.phone}`}
                      className="hover:underline"
                    >
                      {data.contact.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="text-green-600" size={18} />
                    <p>{data.contact.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* FAQ Section */}
            <div className="border-b border-gray-200 pb-10">
              <div className="text-center mb-4">
                <h3 className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl mb-3 font-bold text-gray-800">
                  FAQs
                </h3>
                <p className="text-gray-600">
                  Answers to common questions about our projects and operations.
                </p>
              </div>
              <ul className="space-y-4">
                {data.faq.map((item, idx) => (
                  <li
                    key={idx}
                    className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                      <input type="radio" name="my-accordion-2" />
                      <div className="collapse-title font-semibold">
                        {item.question}
                      </div>
                      <div className="collapse-content text-sm">
                        {item.answer}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Share Popup Modal */}
        <AnimatePresence>
          {showSharePopup && (
            <motion.div
              className="fixed inset-0  backdrop-blur-sm  bg-opacity-50 z-50 flex items-center justify-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-[#fdfdfd]  border-2 border-green-500 rounded-lg p-6 max-w-md w-full relative"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
              >
                <button
                  onClick={closeSharePopup}
                  className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition-colors"
                >
                  <X size={20} />
                </button>
                <h3 className="text-lg font-semibold mb-4">
                  Share this Project
                </h3>
                <p className="text-gray-600 mb-2">Share on social media:</p>
                <div className="flex gap-4 mb-4 justify-center">
                  <motion.a
                    href={`https://www.facebook.com/YourFacebookUsername/posts/create?url=${encodeURIComponent(
                      window.location.href
                    )}&text=Check out this amazing project!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#3B5A97] text-white px-3 py-3 rounded-full"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                      window.location.href
                    )}&text=Check out this amazing project on our platform!&via=YourTwitterHandle`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-black px-3 py-3 rounded-full"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      window.location.href
                    )}&title=Amazing Project on Our Platform&summary=Check out this innovative project that needs your support!&source=YourWebsiteName`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-900 text-white p-3 rounded-full"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href={`https://api.whatsapp.com/send?text=Check out this amazing project on our platform! ${encodeURIComponent(
                      window.location.href
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600  text-white p-3 rounded-full"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </motion.a>
                </div>
                <p className="text-gray-600 mb-2">Or copy the link below:</p>
                <motion.input
                  type="text"
                  value={window.location.href}
                  readOnly
                  className="w-full border px-3 py-2 rounded bg-gray-100"
                  onClick={(e) => e.target.select()}
                  whileTap={{ scale: 0.98 }}
                />
                <motion.button
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Link copied to clipboard!");
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Copy Link
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
};

export default ProjectDetailsPage;
