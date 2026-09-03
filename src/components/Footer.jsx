const Footer = () => {
  return (
    <footer className="mt-32 py-6 text-white bg-blue-700">
      {/* MENU FOOTER */}
      <div className="flex justify-center">
        <div className="flex gap-10 text-lg font-bold">
          <a href="#beranda" className="hover:text-blue-200 transition">Home Page</a>
          <a href="#tentang" className="hover:text-blue-200 transition">About</a>
          <a href="#Education" className="hover:text-blue-200 transition">Education</a>
          <a href="#Skills" className="hover:text-blue-200 transition">Skills</a>
          <a href="#proyek" className="hover:text-blue-200 transition">Project</a>
          <a href="#Certifications" className="hover:text-blue-200 transition">Certifications</a>
          <a href="#Contact" className="hover:text-blue-200 transition">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;