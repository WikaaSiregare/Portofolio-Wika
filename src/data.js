// =============================
// HERO IMAGE
// =============================
const HeroImage = "/assets/hero-wika.webp";

const Image = { HeroImage };
export default Image;

// =============================
// LIST TOOLS
// =============================
export const listTools = [
  {
    id: 1,
    gambar: "/assets/tools/vscode.png",
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: "/assets/tools/reactjs.png",
    nama: "React JS",
    ket: "Javascript Framework",
    dad: "200",
  },
  {
    id: 5,
    gambar: "/assets/tools/tailwind.png",
    nama: "Tailwind CSS",
    ket: "CSS Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: "/assets/tools/bootstrap.png",
    nama: "Bootstrap",
    ket: "CSS Framework",
    dad: "600",
  },
  {
    id: 7,
    gambar: "/assets/tools/js.png",
    nama: "Javascript",
    ket: "Programming Language",
    dad: "700",
  },
  {
    id: 8,
    gambar: "/assets/tools/nodejs.png",
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "800",
  },
  {
    id: 9,
    gambar: "/assets/tools/github.png",
    nama: "Github",
    ket: "Repository Hosting",
    dad: "900",
  },
  {
    id: 11,
    gambar: "/assets/tools/canva.png",
    nama: "Canva",
    ket: "Design Platform",
    dad: "1100",
  },
  {
    id: 12,
    gambar: "/assets/tools/figma.png",
    nama: "Figma",
    ket: "Design Tool",
    dad: "1200",
  },
    {
    id: 13,
    gambar: "/assets/tools/collab.png",
    nama: "collab",
    ket: "coding & data science too",
    dad: "1300",
  },
  {
    id: 14,
    gambar: "/assets/tools/balsamiq.png",
    nama: "Balsamiq",
    ket: "Wireframe",
    dad: "1400",
  },
    {
    id: 15,
    gambar: "/assets/tools/css.png",
    nama: "CSS",
    ket: "Javascript Runtime",
    dad: "1500",
  },
  {
    id: 9,
    gambar: "/assets/tools/html.png",
    nama: "HTML",
    ket: "Repository Hosting",
    dad: "1600",
  },
  {
    id: 11,
    gambar: "/assets/tools/selenium.png",
    nama: "Selenium",
    ket: "Design Platform",
    dad: "1700",
  },
 {
    id: 12,
    gambar: "/assets/tools/powerbi.png", // SEHARUSNYA SUDAH BENAR
    nama: "Power Bi",
    ket: "Design Tool",
    dad: "1800",
},
{
    id: 13,
    gambar: "/assets/tools/lookerstudio.png", // SEHARUSNYA SUDAH BENAR
    nama: "Looker Studio",
    ket: "coding & data science too",
    dad: "1900",
},
{
    id: 14,
    // INI PERUBAHANNYA: Mengubah postgresql.png menjadi postgree.png
    gambar: "/assets/tools/postgresql.png", 
    nama: "PostgreSQL", // Nama tetap bisa PostgreSQL
    ket: "Wireframe",
    dad: "2000",
},
];

// =============================
// LIST PROYEK
// =============================
export const listProyek = [
  {
    id: 1,
    gambar: "/assets/proyek/proyek1.webp",
    nama: "Dental Clinic Website",
    desk: "Building a clinic website with online appointment features, service management, gallery, and doctor information, equipped with a backend and structured database to support the clinic's operational processes.",
    tools: ["Laravel", "PHP", "Bootstrap", "MySQL"],
    link: "https://github.com/WikaaSiregare/Projek-PA-1.git", 
    dad: "200",
  },
  {
    id: 2,
    gambar: "/assets/proyek/proyek2.webp",
    nama: "School Website",
    desk: "Develop a web application for managing school schedules, assignments, materials, and announcements with a structured and easy-to-use admin, teacher, student system.",
    tools: ["PostgreSQLL","Laravel",],
    link: "https://github.com/WikaaSiregare/FinalProject-AKHIR-II-05.git",
    dad: "300",
  },
  {
    id: 3,
    gambar: "/assets/proyek/proyek3.webp",
    nama: "Mobile Application Recommendations for Handling Rice Leaf Diseases",
    desk: "Developing an AI-based mobile application for rice leaf disease classification using the EfficientNetV2 algorithm, equipped with automatic treatment recommendation features and implementation of the TFLite model that runs in real-time on Android devices.",
    tools: ["Python", "Flutter", "EfficientNetV2"],
    dad: "400",
  },
  {
    id: 4,
    gambar: "/assets/proyek/proyek4.webp",
    nama: "IT DEL Student Attendance Application",
    desk: "Developing the DelCheckIn mobile application to simplify the student attendance process and the management of attendance data by lecturers in real-time and more efficiently.",
    tools: ["Flutter", "Firebase"],
    link: "https://github.com/felixnatanaelbutarbutar/FLUTTER-ATTENDANCE-APP-USING-FIREBASE.git",
    dad: "500",
  },
  {
    id: 5,
    gambar: "/assets/proyek/proyek5.webp",
    nama: "Toura AI",
    desk: "Developing an AI-based tourism prototype for tourist travel assistants.",
    tools: ["Figma"],
    link: "https://www.figma.com/design/2RZe0QkXrhBdRNEBZQKjE2/PROTOTYPE_TEKNO_KEL_05?node-id=0-1&p=f&t=VVGJqDnMjJGCU7oH-0",
    dad: "600",
  },
  {
    id: 6,
    gambar: "/assets/proyek/proyek6.webp",
    nama: "Redesign Rumah Kreatif Toba",
    desk: "Developing the DelCheckIn mobile application to simplify the student attendance process and the management of attendance data by lecturers in real-time and more efficiently.",
    tools: ["Figma", "Heuristic Evaluation", "System Usability Scale"],
    link: "https://www.figma.com/design/vL3XOHxEGWmtClczALXZ3t/Untitled?node-id=37-45&t=wDTQc1PjJg5Dqk3u-1",
    dad: "700",
  },
];
