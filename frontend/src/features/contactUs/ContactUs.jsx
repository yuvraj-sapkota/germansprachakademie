import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Badge from "../../components/Badge";
import SectionHeader from "../../components/SectionHeader";

const ContactUs = () => {
  return (
    <>
      <section id="contact" className="scroll-mt-20 py-14 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <Badge
            text="get in touch"
            className="justify-start md:justify-center"
          />

          <SectionHeader
            title="Start Your "
            highlight="Language Journey Today"
            description="Contact us for a free consultation. Our team will help you choose the right course and guide you toward your international goals."
          />

          <div className="grid lg:grid-cols-2 gap-12 mt-10">
            {/* right  */}
            <div className="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <form className="flex flex-col gap-5">
                {/* Full Name */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Write your message..."
                    className="border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* left  */}
            <div className="flex flex-col gap-8  justify-center">
              {/* Find Us */}
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold text-gray-900">Find Us</h3>

                <div className="flex flex-col gap-3 text-gray-600 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-red-500 mt-1" />
                    <p>Butwal, Nepal</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock size={18} className="text-red-500 mt-1" />
                    <p>Sun - Fri: 7:00 AM - 7:00 PM</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone size={18} className="text-red-500 mt-1" />
                    <a href="tel:071536000" className="hover:text-gray-900">
                      071536000 |
                    </a>
                    <a
                      href="tel:+9779766701845"
                      className="hover:text-gray-900"
                    >
                      9766701845 |
                    </a>
                    <a
                      href="tel:+9779714192782"
                      className="hover:text-gray-900"
                    >
                      9714192782 |
                    </a>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail size={18} className="text-red-500 mt-1" />
                    <a
                      href="mailto:germansprachakademie@gmail.com"
                      className="break-words hover:text-gray-900"
                    >
                      germansprachakademie@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Quick Contact
                </h3>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/9766701845"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-green-500 text-white py-2.5 rounded-lg font-medium hover:bg-green-600 transition"
                  >
                    Chat on WhatsApp
                  </a>

                  <a
                    href="tel:+9779766701845"
                    className="flex-1 text-center border border-gray-300 py-2.5 rounded-lg font-medium hover:bg-gray-100 transition"
                  >
                    Call Now
                  </a>
                </div>
              </div>

              {/* MAP */}
              <div className="rounded-xl overflow-hidden border border-gray-200 h-64 shadow-sm">
                <iframe
                  title="map"
                  src="https://www.google.com/maps?q=Butwal-09,Tinkune-Milan%20Chowk,Nepal&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
