import { GraduationCap, Globe, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

import InformationCard from "../../components/InformationCard";
import Badge from "../../components/Badge";

const features = [
  {
    icon: GraduationCap,
    title: "Certified Instruction",
    description:
      "All instructors are Goethe-Institut certified with years of professional teaching experience.",
  },
  {
    icon: Globe,
    title: "Practical Learning",
    description:
      "Real-life conversation practice from day one — structured for confident, everyday fluency.",
  },
  {
    icon: Users,
    title: "Small Batch Classes",
    description:
      "Intimate class sizes ensure every student receives focused, personalised attention.",
  },
  {
    icon: Award,
    title: "Recognised Certification",
    description:
      "Exam preparation for A1 through C2 levels, fully aligned with European language standards.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: "easeOut",
    },
  }),
};

export default function About() {
  return (
    <div>
      <section
        id="about"
        className="scroll-mt-30 py-10 bg-white overflow-hidden mb-14"
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Top label */}
          <motion.div
            className="mb-2"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <Badge text="About our institute" className="justify-start" />
          </motion.div>

          {/* Main grid */}
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">
            {/* ── Left column ── */}
            <motion.div
              className="flex flex-col gap-10"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.2}
            >
              <div className="space-y-5">
                <motion.h2
                  className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-gray-900"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={0.3}
                >
                  Nepal's Trusted Gateway to&nbsp;
                  <span className="relative inline-block">
                    <span className="relative z-10 text-red-500">
                      International
                    </span>
                  </span>{" "}
                  Languages
                </motion.h2>

                <motion.p
                  className="text-gray-500 text-base md:text-lg leading-relaxed max-w-xl"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={0.4}
                >
                  Located in the heart of Butwal, we are a government-registered
                  language institute dedicated to providing world-class language
                  education. Our expert instructor bring real-world experience
                  and exam-focused training methodologies.
                </motion.p>

                <motion.p
                  className="text-gray-500 text-base md:text-lg leading-relaxed w-full lg:max-w-xl"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={0.5}
                >
                  Whether you're aiming for Germany's Ausbildung programs,
                  international universities, or work opportunities in Japan &
                  Korea — we provide the language foundation you need to
                  succeed.
                </motion.p>
              </div>

              {/* Feature cards */}
              <motion.div
                className="grid sm:grid-cols-2 gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.15,
                    },
                  },
                }}
              >
                {features.map((item) => (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <InformationCard
                      Icon={item.icon}
                      title={item.title}
                      description={item.description}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* ── Right column — image stack ── */}
            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Decorative background blob */}
              <div
                className="absolute -top-8 -right-8 w-72 h-72 bg-red-50 rounded-full -z-10"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-8 -left-8 w-48 h-48 bg-gray-100 rounded-full -z-10"
                aria-hidden="true"
              />

              {/* Main image */}
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src="https://plus.unsplash.com/premium_photo-1671070687988-b2d6805ea896?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Students learning German at German Sprach Akademie"
                  className="w-full h-full object-cover object-center"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </motion.div>

              {/* Floating badge card */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl px-6 py-5 flex items-center gap-4 border border-gray-100"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.7 }}
                whileHover={{ y: -4 }}
              >
                <div className="bg-red-500 rounded-xl h-12 w-12 flex-shrink-0 flex items-center justify-center shadow-md">
                  <GraduationCap size={22} className="text-white" />
                </div>

                <div>
                  <p className="text-gray-400 text-xs mt-1">
                    All proficiency levels
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile image */}
          <motion.div
            className="mt-10 lg:hidden rounded-lg overflow-hidden shadow-lg aspect-video"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1671070687988-b2d6805ea896?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Students learning German at German Sprach Akademie"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
