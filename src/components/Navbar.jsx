import { useState, useEffect } from "react";

const Navbar = () => {
const [active, setActive] =useState(false);

useEffect(() =>{
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


  return (
  <div className={`navbar fixed top-0 left-0 w-full py-7 z-50 
  ${active ? "bg-black/90 backdrop-blur-xl shadow-lg" : "bg-transparent"}`}>
    
    <div className="flex items-center justify-between px-4 md:px-10 lg:px-20"> 
        <div className="logo">
        <h1 className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white">Wika Romauli Siregar</h1>
        </div>
        
        <ul className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2
         md:-translate-x-0 md:opacity-100 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none z-40
         ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}>
        
        {/* BERANDA */}
        <li className="group">
            <a 
      href="#beranda"
      className="
        sm:text-2xl text-xl font-medium 
        text-white
        relative
        transition duration-300
        hover:text-violet-400
        hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]
        active:drop-shadow-[0_0_14px_rgba(139,92,246,1)]
        
        /* === KELAS GARIS BAWAH === */
        after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-violet-300 after:transition-all after:duration-300 after:w-0 group-hover:after:w-full
      "
    >
      Beranda
    </a>
          </li>
          
        {/* TENTANG */}
         <li className="group">
      <a
        href="#tentang"
        className="
          sm:text-2xl text-xl font-medium 
          text-white
          relative
          transition duration-300
          hover:text-violet-400
          hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]
          active:drop-shadow-[0_0_14px_rgba(139,92,246,1)]
          
          /* === KELAS GARIS BAWAH === */
          after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-violet-300 after:transition-all after:duration-300 after:w-0 group-hover:after:w-full
        "
      >
        Tentang
      </a>
    </li>
    
        {/* PROYEK */}
          <li className="group">
            <a href="#proyek" className="
        sm:text-2xl text-xl font-medium  
        text-white
        relative
        transition duration-300
        hover:text-violet-400
        hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]
        active:drop-shadow-[0_0_14px_rgba(139,92,246,1)]
        
        /* === KELAS GARIS BAWAH === */
        after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-violet-300 after:transition-all after:duration-300 after:w-0 group-hover:after:w-full
      ">Proyek</a>
          </li>
          
        {/* KONTAK */}
          <li className="group">
            <a href="#kontak" className="
        sm:text-2xl text-xl font-medium 
        text-white
        relative
        transition duration-300
        hover:text-violet-400
        hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]
        active:drop-shadow-[0_0_14px_rgba(139,92,246,1)]
        
        /* === KELAS GARIS BAWAH === */
        after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-violet-300 after:transition-all after:duration-300 after:w-0 group-hover:after:w-full
      ">Kontak</a>
          </li>
          </ul>
    </div>
  </div>
  );
};

export default Navbar