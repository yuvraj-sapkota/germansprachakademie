import { Clock, Mail, MapPin, Minus, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import Logo from "./Logo";

// ✅ Data (clean & scalable)
const quickLinks = [
  { name: "Home", id: "hero" },
  { name: "About Us", id: "about" },
  { name: "Courses", id: "courses" },
  { name: "Why Choose Us", id: "why-choose-us" },
  { name: "Contact", id: "contact" },
];

const courses = [
  { name: "German A1/A2/B1/B2" },

  { name: "Goethe/ÖSD Prep" },
  { name: "IELTS/PTE Prep" },
  { name: "Japanese N4/N5" },
  { name: "EPS-TOPIK/TOPIK" },
];

const contactInfo = [
  {
    icon: MapPin,
    text: "Butwal",
  },
  {
    icon: Phone,
    numbers: ["071536000", "+977 9766701845", "+977 9714192782"],
  },
  {
    icon: Mail,
    text: "germansprachakademie@gmail.com",
    href: "mailto:germansprachakademie@gmail.com",
  },
  {
    icon: Clock,
    text: "Sun-Fri: 7AM-7PM",
  },
];

const socialLinks = [
  {
    icon: FaFacebookF,
    link: "https://www.facebook.com/share/18ZaGMBvpy/?mibextid=wwXIfr",
  },
  {
    icon: FaInstagram,
    link:
      "https://www.instagram.com/germansprachakademie?igsh=MTgyMXhpNTdzZHQ3dQ%3D%3D&utm_source=qr",
  },
  {
    icon: FaTiktok,
    link: "https://www.tiktok.com/@german_sprach?_r=1&_t=ZS-964zR2uRY7p",
  },
];

// ✅ Reusable Section Component
const FooterSection = ({ title, children }) => (
  <div className="flex flex-col gap-6">
    <h3 className="uppercase font-medium text-white text-sm md:text-base">
      {title}
    </h3>
    <div className="flex flex-col gap-2">{children}</div>
  </div>
);

export default function Footer() {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo Section */}
          <div className="flex flex-col gap-3">
            <Logo />
            <p className="text-gray-400 text-sm md:text-base font-medium">
              Nepal's premier German language institute, helping students
              achieve fluency and build futures in Germany
            </p>
            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-2">
              {socialLinks.map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-500 p-2 rounded-lg hover:bg-red-600 hover:text-white transition"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <FooterSection title="Quick Links">
            {quickLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className="text-gray-400 font-medium text-sm md:text-base tracking-tight text-left hover:text-yellow-400 transition duration-300 hover:cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </FooterSection>

          {/* Courses */}
          <FooterSection title="Courses">
            {courses.map((course, i) => (
              <p
                key={i}
                className="text-gray-400 font-medium text-sm md:text-base flex items-center gap-2 tracking-tight"
              >
                {course.level && (
                  <>
                    {course.level} <Minus size={14} />
                  </>
                )}
                {course.name}
              </p>
            ))}
          </FooterSection>

          {/* Contact */}
          <FooterSection title="Contact">
            {contactInfo.map((item, i) => {
              const Icon = item.icon;

              // PHONE NUMBERS
              if (item.numbers) {
                return (
                  <div
                    key={i}
                    className="flex gap-2 text-gray-400 font-medium text-sm md:text-base tracking-tight "
                  >
                    <Icon size={18} className="flex-shrink-0 mt-1" />

                    <div className="flex flex-col">
                      {item.numbers.map((number, idx) => (
                        <a
                          key={idx}
                          href={`tel:${number}`}
                          className="hover:text-white transition"
                        >
                          {number}
                        </a>
                      ))}
                    </div>
                  </div>
                );
              }

              const content = (
                <div className="flex gap-2 items-center text-gray-400 font-medium text-sm md:text-base tracking-tight ">
                  <Icon size={18} className="flex-shrink-0" />
                  {item.text}
                </div>
              );

              return item.href ? (
                <a
                  key={i}
                  href={item.href}
                  className="hover:text-white transition"
                >
                  {content}
                </a>
              ) : (
                <div key={i}>{content}</div>
              );
            })}
          </FooterSection>
        </div>
      <div className="border-t border-gray-800 mt-12 pt-6 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} German Sprach Akademie. All Rights
          Reserved.
        </p>
      </div>
      </div>

    </footer>
  );
}
