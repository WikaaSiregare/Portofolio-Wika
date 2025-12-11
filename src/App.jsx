  import DataImage, { listProyek } from "./data";
  import { listTools } from "./data";

  function App() {
    return (
      <>
      <div className="pt-32 "></div>
  <div className="hero grid grid-cols-1 md:grid-cols-2 items-center pt-10 gap-6 xl:gap-0 ">
    <div className="animate__animated animate__fadeInUp animate__delay-3s">
      <div className="flex items-center gap-6 mb-6 ">

            <img src="/assets/hero-wika.webp" alt="Hero" className="w-20 rounded-md" loading="lazy" />
            <q className="text-2xl font-semibold mt-8 tracking-wide opacity-70">BUILDING A BRIGHT FUTURE</q>
          </div>
          <h1 className="text-4xl/tight font-bold mb-6">Hallo, I'am</h1>
          <h2 className="text-5xl/tight font-bold mb-6  neon-purple">Wika Romauli Siregar</h2>
          <p className="text-2xl/loose mb-6 opacity-80">UI/UX designer, QA Engineer & Data Analysis</p>
          <p className="text-2xl font-light mb-6 opacity-80">
  Building a comfortable experience while performing perfectly</p>

          <div className="flex items-center sm:gap-4 gap-2" >
          <a
          href="/assets/CV/Wika-Romauli-Siregar-CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600 flex items-center gap-3 mb-6 bg-violet-600/70 w-fit p-4 rounded-2xl 
            shadow-inner border border-violet-700/40 backdrop-blur
            shadow-[0_0_35px_rgba(139,92,246,0.25)]
            hover:shadow-[0_0_55px_rgba(139,92,246,0.45)] duration-300"
        >
          Download CV <i className="ri-download-line ri-lg"></i>
        </a>
            <a href="#proyek" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600 flex items-center gap-3 mb-6 bg-violet-600/70 w-fit p-4 rounded-2xl 
          shadow-inner border border-violet-700/40 backdrop-blur
          shadow-[0_0_35px_rgba(139,92,246,0.25)]
          hover:shadow-[0_0_55px_rgba(139,92,246,0.45)] duration-300">Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i></a>
          </div>
        </div>
  {/* FOTO HERO FUTURISTIK */}
  <div className="flex justify-center md:justify-end -mt-10"> 
    <div className="relative w-[27rem] h-[27rem] flex justify-center items-center">

      {/* DOTTED RING */}
      <div
        className="
          absolute w-[30rem] h-[30rem] rounded-full border-2 border-dotted border-violet-500/40
          animate-[rotate-rev_18s_linear_infinite]
        "
      ></div>

      {/* FOTO */}
      <div
        className="
          w-102 h-102 rounded-full overflow-hidden border-4 border-violet-300
          shadow-[0_0_95px_rgba(139,92,246,0.55)]
        "
      >
    <img
    src="/assets/hero-wika.webp"
    alt="Hero"
    className="w-[40rem] h-[40rem] object-cover object-center -translate-y-40 animate__animated animate__fadeInUp animate__delay-3s" 
  />


      </div>
    </div>
  </div>

  </div>

      <div className="tentang mt-32 py-10 bg-[#FFFFFF]" id="tentang">
         <h1 
      className="text-center text-4xl font-bold mb-4 neon-purple animate__animated animate__fadeInUp animate__delay-3s" 
      data-aos="fade-up" 
      data-aos-duration="100"
    >
      About Me
    </h1>
  <div
  className="
    xl:w-2/3 lg:w-3/4 w-full mx-auto p-10 rounded-3xl
    bg-white/20 backdrop-blur-xl 
    border border-violet-400/40
    shadow-[0_0_45px_rgba(139,92,246,0.35)]
    hover:shadow-[0_0_70px_rgba(139,92,246,0.55)] 
    transition-all duration-500
    animate__animated animate__fadeInUp animate__delay-3s
  "
>

    {/* Grid 2 kolom */}
    <div className="grid md:grid-cols-2 gap-10">

      {/* === KIRI: ABOUT === */}
      <div>
        <img
          src="/assets/hero-wika.webp"
          alt="Hero"
          className="w-14 rounded-md mb-6 sm:hidden"
          loading="lazy"
        />

        <p className="text-base/loose mb-10 text-gray-700 text-justify font-bold mb-1 animate__animated animate__fadeInUp animate__delay-3s">
          Halo! Saya Wika Romauli Siregar, mahasiswa D3 Teknologi Informasi di IT Del yang berkomitmen dan antusias dalam dunia pengembangan perangkat lunak. Ketertarikan saya berfokus pada Front-end, UI/UX Design, Quality
Assurance, serta Data Analysis. Saya memiliki kemampuan dalam mengoordinasikan, dan mengelola suatu proyek, serta bersemangat terlibat di setiap tahap pengembangan perangkat lunak mulai dari perencanaan, pembuatan, hingga proses pengujian. Saya dikenal sebagai individu yang dapat diandalkan, bekerja secara efisien, dan mampu menyelesaikan tugas secara optimal. Dengan ketekunan, motivasi tinggi, dan kerjasama kerja yang kuat, saya selalu berupaya memberikan hasil yang maksimal.

        </p>

        <div className="flex items-center gap-10">
          <div>
            <h1 className="text-4xl mb-1 text-black">
              5<span className="text-violet-500">+</span>
            </h1>
            <p className="text-black">Proyek Selesai</p>
          </div>

          <div>
            <h1 className="text-4xl mb-1 text-black">
              4<span className="text-violet-500">+</span>
            </h1>
            <p className="text-black">Tahun Pengalaman</p>
          </div>
        </div>
      </div>

      {/* === KANAN: KONTAK === */}
      <div className="flex flex-col gap-5">

        {/* TELEPON */}
        <div className="bg-#fffff border border-violet-700/40 rounded-xl p-5 transition-all duration-300 hover:scale-[1.01] hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-500/50 hover:border-violet-500
        ">
          <p className="text-sm opacity-70 mb-1  text-black">TELEPON</p>
          <p className="text-lg font-medium  text-black">+62 812-6517-4861</p>
        </div>

        {/* EMAIL */}
        <div className="bg-#fffff border border-violet-700/40 rounded-xl p-5 transition-all duration-300 hover:scale-[1.01] hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-500/50 hover:border-violet-500
        ">
          <p className="text-sm opacity-70 mb-1 text-black">EMAIL</p>
          <p className="text-lg font-medium text-black">wikaromaulisiregar@gmail.com</p>
        </div>

        {/* PORTOFOLIO */}
        <div className="bg-#fffff border border-violet-700/40 rounded-xl p-5 transition-all duration-300 hover:scale-[1.01] hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-500/50 hover:border-violet-500
        ">
          <p className="text-sm opacity-70 mb-1 text-black">PORTOFOLIO</p>
          <p className="text-lg font-medium text-black">wika.my.id</p>
        </div>

        {/* LOKASI */}
        <div className="bg-#fffff border border-violet-700/40 rounded-xl p-5 transition-all duration-300 hover:scale-[1.01] hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-500/50 hover:border-violet-500
        ">
          <p className="text-sm opacity-70 mb-1 text-black">LOKASI</p>
          <p className="text-lg font-medium text-black">Toba, Sumatra Utara, Indonesia</p>
        </div>

      </div>
    </div>
    </div> 



  {/* education */}
  <div className="education mt-32 py-10 bg-[#18122B]" id="education">
    <h1 
      className="text-center text-4xl font-bold mb-2 neon-purple" 
      data-aos="fade-up" 
      data-aos-duration="1000"
    >
      Education
    </h1>

    <div className="xl:w-3/4 lg:w-4/5 w-full mx-auto mt-14 relative">

      {/* ITEM 1 — Institut Teknologi Del */}
      <div className="relative flex gap-6 mb-14">

        <div
          className="
            bg-zinc-800/70
            p-6 
            rounded-xl 
            w-full 
            border border-violet-700/40 
            shadow-inner 
            backdrop-blur 
            shadow-[0_0_40px_rgba(139,92,246,0.25)]
            hover:shadow-[0_0_55px_rgba(139,92,246,0.45)]
            duration-300
          "
        >
          <p className="text-sm opacity-60">2023 — 2026 (Expected)</p>

          <div className="flex items-start gap-4 mt-3">
            <img 
              src="/assets/education/logo-del.png"
              className="w-16 h-16 object-contain rounded-md 
                shadow-[0_0_25px_rgba(139,92,246,0.35)] 
                bg-zinc-900/60 p-2"
              loading="lazy"
            />

            <div>
              <h2 className="text-xl font-bold mb-1">Institut Teknologi Del</h2>
              <p className="opacity-70 mb-3">Diploma 3 in Information Technology</p>

              <ul className="list-disc ml-5 leading-relaxed opacity-80">
                <li>
                  Information Technology Student Association — 
                  <b> Member of Public Relations & Design Division</b> (Dec 2025 – Present)
                </li>
                <li>
                  Cadre Program Committee 2025 — 
                  <b> PIC (Person in Charge)</b> (Oct 2025)
                </li>
                <li>
                  Del Dance Drama Club — 
                  <b> Member</b> (Aug 2024 – Present)
                </li>
                <li>
                  Cadre Program Committee 2024 — 
                  <b> PIC (Person in Charge)</b> (Oct 2024)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ITEM 2 — SMA */}
      <div className="relative flex gap-6">

        <div
          className="
            bg-zinc-800/70
            p-6 
            rounded-xl 
            w-full 
            border border-violet-700/40 
            shadow-inner 
            backdrop-blur 
            shadow-[0_0_40px_rgba(139,92,246,0.25)]
            hover:shadow-[0_0_55px_rgba(139,92,246,0.45)]
            duration-300
          "
        >
          <p className="text-sm opacity-60">2020 — 2023</p>

          <div className="flex items-start gap-4 mt-3">
            <img 
              src="/assets/education/logo-parmaksian.png"
              className="w-16 h-16 object-contain rounded-md 
                shadow-[0_0_25px_rgba(139,92,246,0.35)]
                bg-zinc-900/60 p-2"
              loading="lazy"
            />

            <div>
              <h2 className="text-xl font-bold mb-1">SMA N 1 Parmaksian</h2>
              <p className="opacity-70 mb-3">Science Major</p>

              <ul className="list-disc ml-5 leading-relaxed opacity-80">
                <li> Focus: Mathematics & Natural Sciences </li>
              </ul>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>

    {/* tools yang dipakai */}

  <div className="px-68md:px-15 lg:px-20">
    <h1 className="text-center text-4xl font-bold mb-2 mt-3 neon-purple" 
      data-aos="fade-up" 
      data-aos-duration="1000" data-aos-once="true">
    Skills</h1>
    <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose text-center opacity-50 mx-auto text-black" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true"> 
    Berikut ini adalah beberapa tools yang biasa saya pakai untuk  pembuatan website</p>
    <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

      {listTools.map(tool => (
          <div className="flex items-center gap-2 p-3 rounded-md hover:bg-zinc-800 group
          bg-zinc-800/60 border border-violet-700/40 backdrop-blur
          shadow-inner shadow-[0_0_25px_rgba(139,92,246,0.25)]
          hover:shadow-[0_0_45px_rgba(139,92,246,0.45)] duration-300" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
        <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy"/>
      <div>
      <h4 className="font-bold">{tool.nama}</h4>
      <p className="opacity-50">{tool.ket}</p>
    </div>
  </div>
      ))}
    </div>
  </div>
  </div>


 {/* proyek */}
<div className="proyek mt-32 py-10 bg-[#221F35]" id="proyek">
  <h1 className="text-center text-4xl font-bold mb-2 neon-purple" 
    data-aos="fade-up" 
    data-aos-duration="1000">Proyek</h1>
  <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Berikut ini beberapa proyek yang telah saya buat</p>
  
  {/* 👇 PERHATIKAN: Menambahkan kelas untuk tinggi baris yang seragam */}
  {/* Gunakan 'grid-rows-2' atau 'grid-rows-3' jika Anda memiliki jumlah baris tetap, 
     tetapi karena ini loop, kita akan fokus pada tinggi card secara individual. */}
  <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
    {listProyek.map((proyek) => (
      // 👇 Perbaikan pada Card (Tambahkan 'flex flex-col' dan 'h-full')
      <div 
        key={proyek.id} 
        className="
          p-4 bg-zinc-800/70 rounded-md border border-violet-700/40 backdrop-blur
          shadow-inner shadow-[0_0_30px_rgba(139,92,246,0.25)]
          hover:shadow-[0_0_50px_rgba(139,92,246,0.45)] duration-300
          
          /* KUNCI 1: Membuat semua card setinggi mungkin */
          flex flex-col h-full 
        " 
        data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once="true"
      >
        {/* 👇 Perbaikan pada Gambar */}
        <div className="w-full h-120 overflow-hidden rounded-md mb-4">
          <img 
            src={proyek.gambar} 
            alt="Proyek Image" 
            loading="lazy"
            
            /* KUNCI 2: Atur agar gambar selalu mengisi ruang dan tidak terdistorsi */
            className="w-full h-120 object-cover" 
          />
        </div>

        {/* 👇 Konten Card */}
        <div className="flex flex-col flex-grow">
          <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
          <p className="text-base/loose mb-4 flex-grow">{proyek.desk}</p>
          
          {/* 👇 Tools dan Tombol */}
          <div className="mt-auto"> {/* Menggunakan mt-auto untuk dorong ke bawah */}
            <div className="flex flex-wrap gap-2 mb-10">
              {proyek.tools.map((tool, index) => (
                <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
              ))}
            </div>
            <div className="text-center">
              <a href={proyek.link} target="_blank" rel="noopener noreferrer" className="bg-violet-700 p-3 rounded-lg blog border border-zinc-600 hover:bg-violet-600"
            >Lihat Proyek
            </a>
            </div>
          </div>
        </div>
      </div>
    ))} 
  </div>
</div>

{/* {Sertifikat } */}

  <section id="certificates" className="py-16 bg-[#2A1E3E] animate__animated animate__fadeInUp animate__delay-3s">
  <h2 className="text-center text-4xl font-bold mb-4 neon-purple">
    Certifications
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-20">

    {/* ITEM 1 */}
    <div className="group relative overflow-hidden rounded-xl shadow-md border border-violet-300 cursor-pointer transition hover:scale-[1.03] bg-[#241834]">
      <img src="/assets/sertifikat/certified1.webp" className="w-full h-72 object-cover" />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white">
      </div>
      <div className="p-4 text-white">
        <h3 className="text-lg font-bold">Data Science Professional</h3>
        <p className="text-sm text-violet-300 mt-1">Oracle University — September 26, 2025</p>
      </div>
    </div>

    {/* ITEM 2 */}
    <div className="group relative overflow-hidden rounded-xl shadow-md border border-violet-300 cursor-pointer transition hover:scale-[1.03] bg-[#241834]">
      <img src="/assets/sertifikat/certified2.webp" className="w-full h-72 object-cover" />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white">
      </div>
      <div className="p-4 text-white">
        <h3 className="text-lg font-bold">AI Foundations Associate</h3>
        <p className="text-sm text-violet-300 mt-1">Oracle University — September 26, 2025</p>
      </div>
    </div>

    {/* ITEM 3 */}
    <div className="group relative overflow-hidden rounded-xl shadow-md border border-violet-300 cursor-pointer transition hover:scale-[1.03] bg-[#241834]">
      <img src="/assets/sertifikat/certified3.webp" className="w-full h-72 object-cover" />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white">
      </div>
      <div className="p-4 text-white">
        <h3 className="text-lg font-bold">Data Analytics</h3>
        <p className="text-sm text-violet-300 mt-1">Digital Talent Scholarship — 26 Maret 2025</p>
      </div>
    </div>

    {/* ITEM 4 */}
    <div className="group relative overflow-hidden rounded-xl shadow-md border border-violet-300 cursor-pointer transition hover:scale-[1.03] bg-[#241834]">
      <img src="/assets/sertifikat/certified4.webp" className="w-full h-72 object-cover" />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white">
      </div>
      <div className="p-4 text-white">
        <h3 className="text-lg font-bold">SOFTWARE QUALITY ASSURANCE</h3>
        <p className="text-sm text-violet-300 mt-1">Digital Talent Scholarship - March 17, 2025</p>
      </div>
    </div>

     {/* ITEM 5 */}
    <div className="group relative overflow-hidden rounded-xl shadow-md border border-violet-300 cursor-pointer transition hover:scale-[1.03] bg-[#241834]">
      <img src="/assets/sertifikat/certified5.webp" className="w-full h-72 object-cover" />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white">
      </div>
      <div className="p-4 text-white">
        <h3 className="text-lg font-bold">Bootcamp QA Katalon Batch 2</h3>
        <p className="text-sm text-violet-300 mt-1">November 10, 2025</p>
      </div>
    </div>

  </div>
</section>




  {/* {Kontak} */}
  <div className="kontak mt-32 sm:p-10 p-0 bg-[#1F1A25]" id="kontak">
    <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Kontak</h1>
      <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Mari terhubung dengan saya
      </p>

      <form action="https://formsubmit.co/wikaromaulisiregar@gmail.com" method="POST" className="bg-zinc-800/70 p-10 sm:w-fit w:full mx-auto rounded-md 
  border border-violet-700/40 backdrop-blur shadow-inner
  shadow-[0_0_40px_rgba(139,92,246,0.25)]
  hover:shadow-[0_0_55px_rgba(139,92,246,0.45)] duration-300" autoComplete="off"
      data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Nama Lengkap</label>
            <input type="text" name="nama" placeholder="Masukkan Nama..." className="border border-zinc-500 p-2 rounded-md" required/>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Email</label>
            <input type="email" name="email" placeholder="Masukkan Email..." className="border border-zinc-500 p-2 rounded-md" required></input>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="pesan" className="font-semibold">Pesan</label>
            <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Pesan..." className="border border-zinc-500 p-2 rounded-md" required></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600">Kirim Pesan</button>
          </div>
        </div>
      </form>



        {/* CONTACT PLATFORM — ADA DI BAWAH FORM */}
<div className="mt-16 flex justify-center flex-wrap gap-6 px-4">

  {/* EMAIL */}
  <a
    href="mailto:wikaromaulisiregar@gmail.com"
    className="
      bg-[#1E2130] w-52 p-6 rounded-xl 
      flex flex-col items-center gap-3
      border border-violet-700/40
      hover:border-violet-500 hover:scale-[1.03]
      transition-all duration-300
    "
  >
    <i className="ri-mail-line text-4xl text-violet-300"></i>
    <p className="text-white font-medium">Email</p>
  </a>

  {/* LINKEDIN */}
  <a
    href="https://www.linkedin.com/feed/"
    target="_blank"
    className="
      bg-[#1E2130] w-52 p-6 rounded-xl 
      flex flex-col items-center gap-3
      border border-violet-700/40
      hover:border-violet-500 hover:scale-[1.03]
      transition-all duration-300
    "
  >
    <i className="ri-linkedin-fill text-4xl text-blue-400"></i>
    <p className="text-white font-medium">LinkedIn</p>
  </a>

  {/* GITHUB */}
  <a
    href="https://github.com/WikaaSiregare"
    target="_blank"
    className="
      bg-[#1E2130] w-52 p-6 rounded-xl 
      flex flex-col items-center gap-3
      border border-violet-700/40
      hover:border-violet-500 hover:scale-[1.03]
      transition-all duration-300
    "
  >
    <i className="ri-github-fill text-4xl text-white"></i>
    <p className="text-white font-medium">GitHub</p>
  </a>

  {/* INSTAGRAM */}
  <a
    href="https://www.instagram.com/wikaromauli?igsh=dG5hNzFja3FlZzR1"
    target="_blank"
    className="
      bg-[#1E2130] w-52 p-6 rounded-xl 
      flex flex-col items-center gap-3
      border border-violet-700/40
      hover:border-violet-500 hover:scale-[1.03]
      transition-all duration-300
    "
  >
    <i className="ri-instagram-line text-4xl text-pink-400"></i>
    <p className="text-white font-medium">Instagram</p>
  </a>
</div>

  </div>
  
      </>
    );
  };


  export default App
