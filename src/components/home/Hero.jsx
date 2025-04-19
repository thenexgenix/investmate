import React from "react";
import Button from "../Button";
import { motion } from "motion/react";
import heroImage from "../../assets/images/investmate-hero.jpeg";
import Achievement from "./Achivement";

const Hero = () => {
  const heroStyle = {
    background: `
      radial-gradient(
        circle at 1px 1px,
        #bcf5e3 1px,
        transparent 2px
      )`,
    backgroundSize: "20px 20px",
    padding: "20px",
    backgroundAttachment: "fixed",

  };

  return (
    <>
      <main style={heroStyle} className="relative scrollbar   ">
        {/* Gradient bottom overlay */}
        <div className="absolute -bottom-20 md:-bottom-120 lg:-bottom-20 w-full h-[200px] lg:h-[250px] bg-gradient-to-t from-white to-transparent pointer-events-none"></div>

        {/* Main content */}
        <div className="w-full max-w-7xl xl:max-w-11/12 mx-auto mt-20 sm:mt-20 md:mt-24 lg:mt-28 flex flex-col-reverse lg:grid lg:grid-cols-2 grid-rows-5 gap-4 px-4 py-5 sm:px-6 lg:px-8 items-center">
          {/* Left section */}
          <div className="row-span-5">
            <div className="flex flex-col md:gap-3">
              {/* Animated Tagline */}
              <h2 className="md:mt-5 bg-green-100 text-[#4e5350] uppercase py-2 px-6 rounded-full hover:bg-green-200 transition w-fit h-fit text-sm font-semibold">
                {"Talk About Future Growth".split(" ").map((e, i) => {
                  return (
                    <motion.span
                      initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                      transition={{
                        duration: 1.2,
                        ease: "easeOut",
                        delay: 0.2 * i,
                      }}
                      viewport={{ once: true }}
                      key={i}
                    >
                      {" "}
                      {e}
                    </motion.span>
                  );
                })}
              </h2>

              {/* Heading */}
              <div>
                <motion.h1
                  initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="leading-12 md:leading-16 lg:leading-12 xl:leading-16 text-4xl lg:text-[45px] xl:text-6xl font-semibold  my-3 lg:my-4 xl:my-6 "
                >
                  Empower Your <br />
                  Investments with Our <br />
                  Platform
                </motion.h1>
              </div>

              {/* Subheading */}
              <div>
                <motion.h3
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
                  className="mb-6 bg-[#e9e9ec2c] py-4 pr-5 rounded-2xl text-gray-600 md:text-xl md:max-w-2xl"
                >
                  Discover a unique crowdfunding platform designed for ethical
                  investing. Explore Shariah-compliant projects that align with
                  your values and financial goals.
                </motion.h3>
              </div>

              {/* Button */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.6 }}
                className="flex gap-5"
              >
                <Button text={"Explore >"} />
              </motion.div>
            </div>
          </div>

          {/* Right section (Image) */}
          <div className="row-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.img
                src={heroImage}
                alt="Investmate"
                className="rounded-tl-[40%] rounded-tr-2xl rounded-br-[20%]"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 100 }}
              />
            </motion.div>
          </div>
        </div>

        {/* Achievement Component */}
        <div className="translate-y-20 md:mx-16 lg:mx-28">
          <Achievement />
        </div>
      </main>
    </>
  );
};

export default Hero;
