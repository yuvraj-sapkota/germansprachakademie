import { useState } from "react";
import Badge from "../../components/Badge";
import SectionHeader from "../../components/SectionHeader";
import { Check } from "lucide-react";
import Button from "../../components/Button";
import { motion } from "framer-motion";
const languageCourses = {
  german: [
    {
      id: 1,
      level: "Beginner",
      title: "A1 German",
      description:
        "Beginner foundation for daily communication & basic vocabulary.",

      features: [
        " Full Grammar: A-Z, der/die/das, Akkusativ, Präsens",
        "Real Talks: Name, Einkaufen, Uhrzeit, Termine",
        ,
        "  Goethe A1 Prep: Hören/Lesen/Schreiben/Sprechen + Mocks",
      ],

      // features: ["Goethe A1 Prep", "Grammar Basics", "Spoken Practice"],
    },
    {
      id: 2,
      level: "Elementary",
      title: "A2 German",
      description:
        "Elementary level covering past tense, travel & social interactions.",
      features: [
        "Key Grammar: Perfekt, Präteritum, Dativ, Modalverben",
        " Real Talks: Weg fragen, Arzt, Wohnung, Reisen",
        " Goethe A2 Prep: Brief schreiben + Alle Teile + Mocks",
      ],
    },
    {
      id: 3,
      level: "Intermediate",
      title: "B1 German",
      description:
        "Intermediate fluency for work, study, and integration in Germany.",
      features: [
        " Core Grammar: Nebensätze, Adjektive, Konjunktiv II",
        " Real Talks: Job Interview, Behörden, Meinung sagen",
        " Goethe/ÖSD B1 Prep: E-Mail, Präsentation, Diskussion + Mocks",
      ],
    },
    {
      id: 4,
      level: "Upper-Intermediate",
      title: "B2 German",
      description:
        "Upper-intermediate level required for Ausbildung & universities.",
      features: [
        " Advanced Grammar: Passiv, Konjunktiv I, N-Deklination",
        " Real Talks: Uni Bewerbung, Argumentieren, Vortrag halten",
        " Goethe/ÖSD B2 Prep: Diagramm, Textanalyse, Alle Teile + Mocks",
      ],
    },
    {
      id: 5,
      level: " A1-B2",
      title: "Goethe/ÖSD Exam Prep",
      description:
        "Intensive preparation for official Goethe-Institut examinations.",
      features: [
        "  Alle Module: Hören, Lesen, Schreiben, Sprechen Training",
        "Mock Tests + Past Papers + Speaking Drills",
        "Latest Exam Strategy 2025 + Full Prüfungssimulation",
      ],
    },
    // {
    //   id: 6,
    //   level: "A2–B2",
    //   title: "ÖSD Prep",
    //   description:
    //     "Austrian language exam preparation — widely accepted across Europe.",
    //   features: ["ÖSD Format", "Listening Skills", "Exam Strategy"],
    // },
  ],

  english: [
    {
      id: 1,
      level: "All Levels",
      title: "General English",
      description:
        "Comprehensive English communication for daily and professional use.",
      features: [
        " EU Work Visa Prep: Common Interview Questions + Answer Drills",
        " Real-Life Conversations: Redemittel for Shopping, Office, Doctor, Housing",
        "Essential Grammar + Vocab: Core Concepts for Real Communication",
      ],
    },
    {
      id: 2,
      level: "Intermediate+",
      title: "IELTS Prep",
      description:
        "Targeted IELTS preparation with band-score improvement strategies.",
      features: ["Band 6.5+ Focus", "Mock Tests", "Speaking Practice"],
    },
    {
      id: 3,
      level: "Intermediate+",
      title: "PTE Prep",
      description:
        "Computer-based PTE Academic exam coaching with AI practice tools.",
      features: ["PTE Format", "Scoring Tips", "Practice Tests"],
    },
  ],

  japanese: [
    {
      id: 1,
      level: "Beginner",
      title: "Japanese N5",
      description:
        "Hiragana, Katakana, and basic kanji for absolute beginners.",
      features: ["JLPT N5 Prep", "Script Mastery", "Basic Grammar"],
    },
    {
      id: 2,
      level: "Elementary",
      title: "Japanese N4",
      description:
        "Elementary Japanese with 300 kanji and conversational skills.",
      features: ["JLPT N4 Prep", "Kanji Training", "Listening Skills"],
    },
  ],

  korean: [
    {
      id: 1,
      level: "Beginner–Intermediate",
      title: "EPS-TOPIK Prep",
      description:
        "Employment Permit System exam prep for Korean work visa aspirants.",
      features: ["EPS Exam Format", "Workplace Korean", "Mock Tests"],
    },
    {
      id: 2,
      level: "All Levels",
      title: "TOPIK I & II",
      description:
        "Test of Proficiency in Korean for study visa and university entry.",
      features: ["TOPIK Format", "Writing Skills", "Vocab Building"],
    },
  ],
};

const OurCourses = () => {
  const [language, setLanguage] = useState("german");

  return (
    <section id="courses" className="scroll-mt-20 bg-gray-200 py-14">
      <div className="max-w-7xl mx-auto px-4">
        <Badge
          text="OUR PROGRAMS"
          className="justify-start md:justify-center"
        />

        <SectionHeader
          title="Language Courses"
          highlight="We Offer"
          description="Choose from expertly designed courses across four international languages, all tailored for exam success and real-world fluency."
        />

        {/* Language Tabs */}
        <div className="mt-8 flex items-center justify-start md:justify-center gap-3 overflow-x-auto scrollbar-hide">
          {Object.keys(languageCourses).map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`px-6 py-2 rounded-full border font-medium transition-all duration-300 whitespace-nowrap ${
                language === lang
                  ? "bg-red-500 text-white border-red-500"
                  : "bg-white text-black border-gray-300 hover:bg-red-50"
              }`}
            >
              {lang.charAt(0).toUpperCase() + lang.slice(1)}
            </button>
          ))}
        </div>

        {/* Courses */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {languageCourses[language].map((course, index) => (
            <div
              key={course.id}
              className="bg-white border border-gray-300 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col gap-2"
            >
              <Badge text={course.level} className="justify-end" />

              <h3 className="text-xl md:text-2xl font-bold mt-4">
                {course.title}
              </h3>

              <p className="text-gray-500 tracking-tight mt-3 leading-relaxed">
                {course.description}
              </p>

              <ul className="space-y-3 mt-5 ">
                {course.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-gray-600"
                  >
                    <Check className="text-red-500" size={18} />
                    <p>{feature}</p>
                  </li>
                ))}
              </ul>

              <Button
                text="Enroll Now"
                className="border border-red-500  hover:bg-red-600 hover:text-white text-red-500 mt-auto w-full "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCourses;
