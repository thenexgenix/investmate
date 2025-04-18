import { motion } from "motion/react";
import { Users, HandCoins } from "lucide-react";
import joinusimg from "../../assets/images/join-us.png";

const JoinUsSection = () => {
  return (
    <section className="w-full px-4 py-10  md:px-16 lg:px-32 xl:px-[10%] ">
      <div className="mx-auto flex flex-col md:flex-row justify-around items-center gap-10 lg:gap-16 xl:gap-24 rounded-2xl  p-6 ">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl lg:text-4xl font-semibold text-gray-900"
          >
            Almost Is Never Enough <br />
            <span className="text-green-500">Unless</span> You Act{" "}
            <span className="text-blue-500">Today!</span>
          </motion.h2>
          <div className="w-full h-[3px] bg-gray-400"></div>

          <div className="space-y-4 flex flex-col gap-4 mt-5">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-green-100 text-green-600 rounded-full">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-base md:text-lg">
                  Global Community
                </h4>
                <p className="text-sm text-gray-600">
                  Reach a community that can make us strong and useful
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-full">
                <HandCoins className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-base md:text-lg">
                  Crowdfunding
                </h4>
                <p className="text-sm text-gray-600">
                  Empowering Founders, Engaging Communities.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full w-[70%] bg-blue-600"></div>
          </div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/2 max-w-sm"
        >
          <img
            src={joinusimg}
            alt="Join Us"
            className="w-full h-auto rounded-xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default JoinUsSection;
