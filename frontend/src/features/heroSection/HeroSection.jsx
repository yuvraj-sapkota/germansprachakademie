import { ArrowBigDown, MoveRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import Button from "../../components/Button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="scroll-mt-20 w-full h-[90vh] bg-cover bg-center relative flex mt-20 mb-10 pt-14 md:pt-20"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-white">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-white font-semibold text-sm md:text-base">
            German Sprach <span className="text-yellow-500">Akademie</span>
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold md:leading-tight">
            Learn Languages <br />
            Build your International future
          </h1>

          <p className="mt-6 text-base md:text-lg lg:text-xl max-w-2xl text-gray-200">
            Professional German, English, Japanese & Korean language classes
            with international exam preparation and abroad career guidance.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {["German", "English", "Japanese", "Korean"].map((item) => (
              <span
                key={item}
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full text-sm  transition-all duration-300 cursor-pointer "
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Button text="Enroll Now" className="bg-red-500 hover:bg-red-600" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 110 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Button
              text="Book Free Counseling"
              className="border border-white hover:bg-white hover:text-black"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
