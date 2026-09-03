import { listProyek, listTools } from "./data";

function App() {
  return (
    <>
      <div className="pt-32"></div>
      <div className="hero grid grid-cols-1 md:grid-cols-2 items-center pt-10 gap-6 xl:gap-0">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-6 mb-6">
            <img src="/assets/hero-wika.webp" alt="Wika Romauli Siregar" className="w-20 rounded-md" loading="lazy" />
            <q className="text-2xl font-semibold mt-8 tracking-wide opacity-70">BUILDING A BRIGHT FUTURE</q>
          </div>
          <h1 className="text-4xl/tight font-bold mb-6">Hallo, I'am</h1>
          <h2 className="text-5xl/tight font-bold mb-6 neon-purple">Wika Romauli Siregar</h2>
          <p className="text-2xl/loose mb-6 opacity-80">Data Analysis, QA Engineer</p>
          <p className="text-2xl font-light mb-6 opacity-80">
            Building a comfortable experience while performing perfectly
          </p>

          <div className="flex items-center sm:gap-4 gap-2">
            
              <a href="/assets/CV/Wika-Romauli-Siregar-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600/70 hover:bg-blue-600 flex items-center gap-3 mb-6 w-fit p-4 rounded-2xl
                shadow-inner border border-blue-700/40 backdrop-blur
                shadow-[0_0_35px_rgba(59,130,246,0.25)]
                hover:shadow-[0_0_55px_rgba(59,130,246,0.45)] duration-300"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#proyek"
              className="bg-zinc-700/70 hover:bg-zinc-600 flex items-center gap-3 mb-6 w-fit p-4 rounded-2xl
                shadow-inner border border-blue-700/40 backdrop-blur
                shadow-[0_0_35px_rgba(59,130,246,0.25)]
                hover:shadow-[0_0_55px_rgba(59,130,246,0.45)] duration-300"
            >
              View project <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>

        {/* FOTO HERO FUTURISTIK */}
        <div className="flex justify-center md:justify-end -mt-10">
          <div className="relative w-[27rem] h-[27rem] flex justify-center items-center">
            {/* DOTTED RING */}
            <div className="absolute w-[30rem] h-[30rem] rounded-full border-2 border-dotted border-blue-500/40 animate-[rotate-rev_18s_linear_infinite]"></div>

            {/* FOTO */}
            <div className="w-102 h-102 rounded-full overflow-hidden border-4 border-blue-300 shadow-[0_0_95px_rgba(59,130,246,0.55)]">
              <img
                src="/assets/hero-wika.webp"
                alt="Wika Romauli Siregar"
                className="w-[40rem] h-[40rem] object-cover object-center -translate-y-40 animate__animated animate__fadeInUp animate__delay-3s"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="tentang mt-20 py-10 bg-[#FFFFFF]" id="tentang">
        <h2
          className="text-center text-4xl font-bold mb-4 neon-purple animate__animated animate__fadeInUp animate__delay-3s"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          About Me
        </h2>

        <div
          className="
            xl:w-2/3 lg:w-3/4 w-full mx-auto p-10 rounded-3xl
            bg-white/20 backdrop-blur-xl
            border border-blue-400/40
            shadow-[0_0_45px_rgba(59,130,246,0.35)]
            hover:shadow-[0_0_70px_rgba(59,130,246,0.55)]
            transition-all duration-500
            animate__animated animate__fadeInUp animate__delay-3s
          "
        >
          <div className="grid md:grid-cols-2 gap-10">
            {/* === KIRI: ABOUT === */}
            <div>
              <img
                src="/assets/hero-wika.webp"
                alt="Wika Romauli Siregar"
                className="w-14 rounded-md mb-6 sm:hidden"
                loading="lazy"
              />

              <p className="text-base/loose mb-10 text-gray-700 animate__animated animate__fadeInUp animate__delay-3s">
                Hello! I'm Wika Romauli Siregar, a D3 Information Technology student at IT Del who is
                committed and enthusiastic about the world of software development. My interests focus on
                Front-end, UI/UX Design, Quality Assurance, and Data Analysis. I have the ability to
                coordinate and manage a project, and am passionate about being involved in every stage of
                software development from planning, creation, to the testing process. I am known as a
                reliable individual, working efficiently, and able to complete tasks optimally. With
                perseverance, high motivation, and strong teamwork, I always strive to deliver maximum
                results.
              </p>

              <div className="flex items-center gap-10">
                <div>
                  <h1 className="text-4xl mb-1 text-black">
                    5<span className="text-blue-500">+</span>
                  </h1>
                  <p className="text-black">Project Completed</p>
                </div>

                <div>
                  <h1 className="text-4xl mb-1 text-black">
                    0<span className="text-blue-500">+</span>
                  </h1>
                  <p className="text-black">Years of Experience</p>
                </div>
              </div>
            </div>

            {/* === KANAN: KONTAK === */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4 bg-white border border-blue-700/40 rounded-xl p-5 transition-all duration-300 hover:scale-[1.01] hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/50 hover:border-blue-500">
                <div className="w-11 h-11 shrink-0 rounded-full bg-blue-100 flex items-center justify-center">
                  <i className="ri-mail-line text-xl text-blue-600"></i>
                </div>
                <div>
                  <p className="text-sm opacity-70 mb-1 text-black">EMAIL</p>
                  <p className="text-lg font-medium text-black">wikaromaulisiregar@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white border border-blue-700/40 rounded-xl p-5 transition-all duration-300 hover:scale-[1.01] hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/50 hover:border-blue-500">
                <div className="w-11 h-11 shrink-0 rounded-full bg-blue-100 flex items-center justify-center">
                  <i className="ri-links-line text-xl text-blue-600"></i>
                </div>
                <div>
                  <p className="text-sm opacity-70 mb-1 text-black">LINKEDIN</p>
                  <p className="text-lg font-medium text-black">linkedin.com/in/wika-romauli-siregar-446701331</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white border border-blue-700/40 rounded-xl p-5 transition-all duration-300 hover:scale-[1.01] hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/50 hover:border-blue-500">
                <div className="w-11 h-11 shrink-0 rounded-full bg-blue-100 flex items-center justify-center">
                  <i className="ri-map-pin-line text-xl text-blue-600"></i>
                </div>
                <div>
                  <p className="text-sm opacity-70 mb-1 text-black">LOCATION</p>
                  <p className="text-lg font-medium text-black">Toba, Sumatra Utara, Indonesia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
 </div>
{/* EDUCATION */}
        <div className="education mt-20 py-10 bg-[#18122B]" id="education">
          <h2
            className="text-center text-4xl font-bold mb-2 neon-purple"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Education
          </h2>

          <div className="xl:w-3/4 lg:w-4/5 w-full mx-auto mt-14 relative">
            {/* GARIS TIMELINE */}
            <div className="absolute left-8 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/60 via-blue-500/30 to-transparent"></div>

            {/* ITEM 1 — Institut Teknologi Del */}
            <div className="relative flex gap-6 mb-14">
              <div className="relative z-10 w-16 h-16 shrink-0 rounded-full bg-blue-600 flex items-center justify-center shadow-[0_0_25px_rgba(59,130,246,0.6)]">
                <i className="ri-graduation-cap-line text-2xl text-white"></i>
              </div>

              <div className="bg-zinc-800/70 p-6 rounded-xl w-full border border-blue-700/40 shadow-inner backdrop-blur shadow-[0_0_40px_rgba(59,130,246,0.25)] hover:shadow-[0_0_55px_rgba(59,130,246,0.45)] duration-300">
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 mb-2">
                  2023 — 2026 (Expected)
                </span>

                <div className="flex items-start gap-4 mt-3">
                  <img
                    src="/assets/education/logo-del.png"
                    alt="Institut Teknologi Del logo"
                    className="w-16 h-16 object-contain rounded-md shadow-[0_0_25px_rgba(59,130,246,0.35)] bg-zinc-900/60 p-2"
                    loading="lazy"
                  />

                  <div>
                    <h3 className="text-xl font-bold mb-1">Institut Teknologi Del</h3>
                    <p className="opacity-70 mb-3">Diploma 3 in Information Technology</p>

                    <ul className="space-y-2 opacity-80">
                      <li className="flex gap-2">
                        <i className="ri-checkbox-circle-fill text-blue-400 mt-1 shrink-0"></i>
                        <span>
                          Information Technology Student Association —{" "}
                          <b>Member of Public Relations & Design Division</b> (Dec 2025 – Present)
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <i className="ri-checkbox-circle-fill text-blue-400 mt-1 shrink-0"></i>
                        <span>Cadre Program Committee 2025 — <b>PIC (Person in Charge)</b> (Oct 2025)</span>
                      </li>
                      <li className="flex gap-2">
                        <i className="ri-checkbox-circle-fill text-blue-400 mt-1 shrink-0"></i>
                        <span>Del Dance Drama Club — <b>Member</b> (Aug 2024 – Present)</span>
                      </li>
                      <li className="flex gap-2">
                        <i className="ri-checkbox-circle-fill text-blue-400 mt-1 shrink-0"></i>
                        <span>Cadre Program Committee 2024 — <b>PIC (Person in Charge)</b> (Oct 2024)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* ITEM 2 — SMA */}
            <div className="relative flex gap-6">
              <div className="relative z-10 w-16 h-16 shrink-0 rounded-full bg-blue-600 flex items-center justify-center shadow-[0_0_25px_rgba(59,130,246,0.6)]">
                <i className="ri-school-line text-2xl text-white"></i>
              </div>

              <div className="bg-zinc-800/70 p-6 rounded-xl w-full border border-blue-700/40 shadow-inner backdrop-blur shadow-[0_0_40px_rgba(59,130,246,0.25)] hover:shadow-[0_0_55px_rgba(59,130,246,0.45)] duration-300">
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 mb-2">
                  2020 — 2023
                </span>

                <div className="flex items-start gap-4 mt-3">
                  <img
                    src="/assets/education/logo-parmaksian.png"
                    alt="SMA N 1 Parmaksian logo"
                    className="w-16 h-16 object-contain rounded-md shadow-[0_0_25px_rgba(59,130,246,0.35)] bg-zinc-900/60 p-2"
                    loading="lazy"
                  />

                  <div>
                    <h3 className="text-xl font-bold mb-1">SMA N 1 Parmaksian</h3>
                    <p className="opacity-70 mb-3">Science Major</p>

                    <ul className="space-y-2 opacity-80">
                      <li className="flex gap-2">
                        <i className="ri-checkbox-circle-fill text-blue-400 mt-1 shrink-0"></i>
                        <span>Focus: Mathematics & Natural Sciences</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SKILLS */}
          <div className="px-6 md:px-15 lg:px-20">
            <h2
              className="text-center text-4xl font-bold mb-2 mt-3 neon-purple"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              Skills
            </h2>
            <p
              className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose text-center mx-auto text-blue-100/60"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos-once="true"
            >
              The following are some of the tools that I usually use to create websites.
            </p>
            <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              {listTools.map((tool) => (
                <div
                  className="flex items-start gap-3 p-4 rounded-xl h-full hover:bg-zinc-800 group bg-zinc-800/60 border border-blue-700/40 backdrop-blur shadow-inner shadow-[0_0_25px_rgba(59,130,246,0.25)] hover:shadow-[0_0_45px_rgba(59,130,246,0.45)] hover:-translate-y-1 duration-300"
                  key={tool.id}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={tool.dad}
                  data-aos-once="true"
                >
                  <div className="w-12 h-12 shrink-0 rounded-lg bg-white p-2 flex items-center justify-center">
                    <img src={tool.gambar} alt={tool.nama} className="w-full h-full object-contain" loading="lazy" />
                  </div>
                  <div>
                    <h4 className="font-bold">{tool.nama}</h4>
                    <p className="text-sm opacity-50">{tool.ket}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PROYEK */}
        <div className="proyek mt-20 py-10 bg-[#221F35]" id="proyek">
          <h2
            className="text-center text-4xl font-bold mb-2 neon-purple"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Project
          </h2>
          <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            Here are some projects I have created
          </p>

          <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listProyek.map((proyek) => (
              <div
                key={proyek.id}
                className="p-4 bg-zinc-800/70 rounded-md border border-blue-700/40 backdrop-blur shadow-inner shadow-[0_0_30px_rgba(59,130,246,0.25)] hover:shadow-[0_0_50px_rgba(59,130,246,0.45)] duration-300 flex flex-col h-full"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={proyek.dad}
                data-aos-once="true"
              >
                <div className="w-full h-60 overflow-hidden rounded-md mb-4 group">
                  <img
                    src={proyek.gambar}
                    alt={proyek.nama}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold my-4">{proyek.nama}</h3>
                  <p className="text-base/loose mb-4 flex-grow">{proyek.desk}</p>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-10">
                      {proyek.tools.map((tool) => (
                        <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={tool}>
                          {tool}
                        </p>
                      ))}
                    </div>
                    {proyek.link ? (
                      <div className="text-center">
                        <a
                          href={proyek.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-700 p-3 rounded-lg border border-zinc-600 hover:bg-blue-600 inline-block"
                        >
                          View project
                        </a>
                      </div>
                    ) : (
                      <div className="text-center">
                        <span className="p-3 rounded-lg border border-zinc-600 opacity-50 inline-block cursor-not-allowed">
                          Private repository
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SERTIFIKAT */}
        <section id="certificates" className="py-16 bg-[#2A1E3E] animate__animated animate__fadeInUp animate__delay-3s">
          <h2 className="text-center text-4xl font-bold mb-4 neon-purple">Certifications</h2>

          <div className="flex flex-wrap justify-center gap-8 px-6 md:px-20">
            {[
              { img: "certified1.webp", title: "Data Science Professional", issuer: "Oracle University — September 26, 2025" },
              { img: "certified2.webp", title: "AI Foundations Associate", issuer: "Oracle University — September 26, 2025" },
              { img: "certified3.webp", title: "Data Analytics", issuer: "Digital Talent Scholarship — March 26, 2025" },
              { img: "certified4.webp", title: "Software Quality Assurance", issuer: "Digital Talent Scholarship — March 17, 2025" },
              { img: "certified5.webp", title: "Bootcamp QA Katalon Batch 2", issuer: "November 10, 2025" },
            ].map((cert) => (
              <div
                key={cert.img}
                className="group relative overflow-hidden rounded-xl shadow-md border border-blue-300 cursor-pointer transition bg-[#241834] w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.5rem)]"
              >
                <div className="overflow-hidden">
                  <img
                    src={`/assets/sertifikat/${cert.img}`}
                    alt={cert.title}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 text-white">
                  <h3 className="text-lg font-bold">{cert.title}</h3>
                  <p className="text-sm text-blue-300 mt-1">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

            {/* KONTAK */}
        <div className="kontak mt-20 py-20 sm:p-10 p-4 bg-white" id="kontak">
          <h2 className="text-4xl mb-2 font-bold text-center text-blue-600" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            Contact
          </h2>
          <p className="text-base/loose text-center mb-10 text-gray-500" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
            Let's connect with me
          </p>

          <form
            action="https://formsubmit.co/wikaromaulisiregar@gmail.com"
            method="POST"
            className="bg-blue-50/50 p-10 sm:w-[32rem] w-full mx-auto rounded-2xl border border-blue-200 shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:shadow-[0_0_55px_rgba(59,130,246,0.25)] duration-300"
            autoComplete="off"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-once="true"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="nama" className="font-semibold text-gray-700">Full name</label>
                <input id="nama" type="text" name="nama" placeholder="Enter Name..." className="border border-blue-200 bg-white p-3 rounded-lg outline-none focus:border-blue-500 transition" required />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-semibold text-gray-700">Email</label>
                <input id="email" type="email" name="email" placeholder="Enter Email..." className="border border-blue-200 bg-white p-3 rounded-lg outline-none focus:border-blue-500 transition" required />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="pesan" className="font-semibold text-gray-700">Message</label>
                <textarea name="pesan" id="pesan" cols="45" rows="6" placeholder="Message..." className="border border-blue-200 bg-white p-3 rounded-lg outline-none focus:border-blue-500 transition" required></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-blue-600 p-3 rounded-lg w-full cursor-pointer text-white font-semibold hover:bg-blue-700 transition shadow-[0_0_25px_rgba(59,130,246,0.35)]">
                  Send message
                </button>
              </div>
            </div>
          </form>

          <div className="mt-16 flex justify-center flex-wrap gap-6 px-4">
            <a href="mailto:wikaromaulisiregar@gmail.com" className="bg-white w-40 p-6 rounded-xl flex flex-col items-center gap-3 border border-blue-100 shadow-sm hover:border-blue-400 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                <i className="ri-mail-line text-2xl text-blue-600"></i>
              </div>
              <p className="text-gray-700 font-medium">Email</p>
            </a>

            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="bg-white w-40 p-6 rounded-xl flex flex-col items-center gap-3 border border-blue-100 shadow-sm hover:border-blue-400 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                <i className="ri-linkedin-fill text-2xl text-blue-600"></i>
              </div>
              <p className="text-gray-700 font-medium">LinkedIn</p>
            </a>

            <a href="https://github.com/WikaaSiregare" target="_blank" rel="noopener noreferrer" className="bg-white w-40 p-6 rounded-xl flex flex-col items-center gap-3 border border-blue-100 shadow-sm hover:border-blue-400 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                <i className="ri-github-fill text-2xl text-gray-800"></i>
              </div>
              <p className="text-gray-700 font-medium">GitHub</p>
            </a>

            <a href="https://www.instagram.com/wikaromauli?igsh=dG5hNzFja3FlZzR1" target="_blank" rel="noopener noreferrer" className="bg-white w-40 p-6 rounded-xl flex flex-col items-center gap-3 border border-blue-100 shadow-sm hover:border-blue-400 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center">
                <i className="ri-instagram-line text-2xl text-pink-500"></i>
              </div>
              <p className="text-gray-700 font-medium">Instagram</p>
            </a>
          </div>
        </div>
    </>
  );
}

export default App;