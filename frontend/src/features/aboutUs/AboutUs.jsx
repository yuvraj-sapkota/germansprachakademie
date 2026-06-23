import { GraduationCap, Globe, Users, Award } from "lucide-react";

import InformationCard from "../../components/InformationCard";
import Badge from "../../components/Badge";
import about from "../../assets/gsa_about.jpeg";

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

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-28 py-10 bg-white overflow-hidden mb-14"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Top label */}
        <div>
          <Badge text="About our institute" className="justify-start" />
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          {/* ── Left column ── */}
          <div>
            <div className="space-y-5">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-gray-900">
                Nepal's Trusted Gateway to&nbsp;
                <span className="relative inline-block">
                  <span className="relative z-10 text-red-500">
                    International
                  </span>
                </span>{" "}
                Languages
              </h2>

              <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-xl">
                Located in the heart of Butwal, we are a government-registered
                language institute dedicated to providing world-class language
                education. Our expert instructors bring real-world experience
                and exam-focused training methodologies.
              </p>

              <p className="text-gray-500 text-base md:text-lg leading-relaxed w-full lg:max-w-xl">
                Whether you're aiming for Germany's Ausbildung programs,
                international universities, or work opportunities in Japan &
                Korea — we provide the language foundation you need to succeed.
              </p>
            </div>

            {/* Feature cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((item) => (
                <div key={item.title}>
                  <InformationCard
                    Icon={item.icon}
                    title={item.title}
                    description={item.description}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column — image stack ── */}
          <div className="relative hidden lg:block">
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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                src={about}
                alt="Students learning German at German Sprach Akademie"
                className="w-full h-full object-cover object-center"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Floating badge card */}
            <div className=" absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl px-6 py-5 flex items-center gap-4 border border-gray-200">
              <div className="bg-red-500 rounded-xl h-12 w-12 flex-shrink-0 flex items-center justify-center shadow-md">
                <GraduationCap size={22} className="text-white" />
              </div>

              <div>
                <p className="text-gray-400 text-xs mt-1">
                  All proficiency levels
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile image */}
        <div className="mt-10 lg:hidden rounded-lg overflow-hidden shadow-lg aspect-video h-96 md:h-[600px] w-full">
          <img
            src={about}
            alt="Students learning German at German Sprach Akademie"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
