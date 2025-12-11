const Footer = () => {
  return (
    <footer className="mt-32 py-6 text-white">
      {/* MENU FOOTER */}
      <div className="flex justify-center">
        <div className="flex gap-10 text-lg font-bold">
          <a href="#beranda" className="hover:text-violet-400 transition">Beranda</a>
          <a href="#tentang" className="hover:text-violet-400 transition">Tentang</a>
          <a href="#proyek" className="hover:text-violet-400 transition">Proyek</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
