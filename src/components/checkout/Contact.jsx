import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

const Contact = () => {
  return (
    <>
      <section className="mt-10 md:mt-20 px-10 md:px-14 lg:px-32">
        <motion.div
          className="border-b border-gray-200 pb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="space-y-2 mb-6 text-center flex flex-col  gap-2 md:gap-4">
        
            <h3 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-gray-800">
              Get in Touch
            </h3>
            <h4 className="text-gray-600">
              We're here to answer your questions and provide more information
              about our projects
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
                  href={`mailto:investmate.info@gmail.com`}
                  className="hover:underline"
                >
                  investmate.info@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="text-green-600" size={18} />
                <a href={`tel:+880-987-654-321`} className="hover:underline">
                  +880-987-654-321
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-green-600" size={18} />
                <p>ITBI CUET,Chittagong, Bangladesh</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
