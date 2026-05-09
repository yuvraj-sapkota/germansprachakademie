import React from "react";
import Badge from "../../components/Badge";
import SectionHeader from "../../components/SectionHeader";

import {
  Award,
  Users,
  FileText,
  MonitorSmartphone,
  Globe,
  Clock3,
  Smartphone,
  Smile,
  Wallet,
  Target,
} from "lucide-react";
import InformationCard from "../../components/InformationCard";

const features = [
  {
    id: 1,
    icon: Award,
    title: "Certified Trainers",
    description:
      "All instructors hold internationally recognized language certifications.",
  },
  {
    id: 2,
    icon: Users,
    title: "Small Batch Sizes",
    description: "Maximum 12 students per batch for personalized attention.",
  },
  {
    id: 3,
    icon: FileText,
    title: "Exam Preparation",
    description: "Structured mock tests and past papers for every major exam.",
  },
  {
    id: 4,
    icon: MonitorSmartphone,
    title: "Interactive Classes",
    description:
      "Audio-visual learning tools and communicative teaching methods.",
  },
  {
    id: 5,
    icon: Globe,
    title: "Career Guidance",
    description:
      "Counseling for Ausbildung, study visas, and work permits abroad.",
  },
  {
    id: 6,
    icon: Clock3,
    title: "Flexible Timings",
    description: "Morning, evening, and weekend batch options available.",
  },
  {
    id: 7,
    icon: Smartphone,
    title: "Modern Methods",
    description: "Up-to-date curriculum aligned with current exam formats.",
  },
  {
    id: 8,
    icon: Smile,
    title: "Friendly Environment",
    description: "Supportive, encouraging classroom culture for all learners.",
  },
  {
    id: 9,
    icon: Wallet,
    title: "Affordable Fees",
    description: "Competitive pricing with no compromise on quality.",
  },
  {
    id: 10,
    icon: Target,
    title: "Personalized Attention",
    description: "Individual progress tracking and feedback sessions.",
  },
];
const ChooseUs = () => {
  return (
    <>
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4">
          <Badge
            text="Our advantage"
            className="justify-start md:justify-center"
          />

          <SectionHeader
            title="Why Choose "
            highlight="German Sprach Akademie?"
            description="We don't just teach languages — we build careers. Here's what sets us apart from other institutes."
          />
          <div className="mt-8 grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {features.map((feature) => (
              <InformationCard
                key={feature.title}
                Icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseUs;
