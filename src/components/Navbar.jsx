import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const linkClass = `
    sm:text-2xl text-xl font-medium 
    text-blue-900
    relative
    transition duration-300
    hover:text-blue-600
    after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 after:w-0 group-hover:after:w-full
  `;

  return (
    <div
      className={`navbar fixed top-0 left-0 w-full py-5 z-50 border-b transition-all duration-300
      ${
        active
          ? "bg-white/85 backdrop-blur-xl shadow-[0_4px_30px_rgba(59,130,246,0.15)] border-blue-100 py-4"
          : "bg-white/60 backdrop-blur-md border-transparent py-7"
      }`}
    >
      <div className="flex items-center justify-between px-4 md:px-10 lg:px-20">
        <div className="logo">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-900 tracking-wide">
            Wika Romauli Siregar
          </h1>
        </div>

        <ul
          className={`menu flex items-center sm:gap-8 gap-4 md:static fixed left-1/2 -translate-x-1/2
         md:-translate-x-0 md:opacity-100 rounded-2xl md:bg-transparent bg-white/95 backdrop-blur-xl px-8 py-4 md:p-0 transition-all md:transition-none z-40
         ${active ? "top-3 opacity-100" : "-top-20 opacity-0"}`}
        >
          <li className="group">
            <a href="#beranda" className={linkClass}>
              Home page
            </a>
          </li>

          <li className="group">
            <a href="#tentang" className={linkClass}>
              About
            </a>
          </li>

          <li className="group">
            <a href="#proyek" className={linkClass}>
              Project
            </a>
          </li>

          <li className="group">
            <a href="#certificates" className={linkClass}>
              Certificates
            </a>
          </li>

          <li className="group">
            <a href="#kontak" className={linkClass}>
              Contact
            </a>
          </li>

          <li>
            
              <a href="/assets/CV/Wika-Romauli-Siregar-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white text-base sm:text-lg font-semibold px-5 py-2 rounded-full transition duration-300 shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;