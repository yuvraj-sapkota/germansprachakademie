import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../Logo";
// import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", id: "hero" },
    { name: "About Us", id: "about" },
    { name: "Courses", id: "courses" },
    { name: "Contact Us", id: "contact" },
  ];

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setOpen(false); // mobile menu close
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          {/* LOGO */}
          <div onClick={() => handleScroll("hero")} className="cursor-pointer">
            <Logo />
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-10 text-lg font-medium">
            {links.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleScroll(link.id)}
                  className="text-gray-600 hover:text-red-500 transition duration-300 relative group "
                >
                  {link.name}

                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
            ))}
            <button className="bg-red-500 text-white rounded-lg font-medium px-4 py-2 text-base">
              Enroll Now
            </button>
          </ul>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setOpen(true)}
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={` md:hidden fixed top-0 right-0 h-full w-[260px] shadow-md  bg-white z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4 border-b border-gray-200">
          <button onClick={() => setOpen(false)}>
            <X size={28} />
          </button>
        </div>

        <ul className="flex flex-col gap-6 px-6 mt-10 text-lg">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleScroll(link.id)}
                className="text-gray-900 hover:text-yellow-400 transition text-left w-full"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        ></div>
      )}
    </>
  );
}
