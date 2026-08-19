// ============================================================
//  portfolioData.ts — Tüm site verilerini burada
// ============================================================

// ─── Kişisel Bilgiler ───────────────────────────────────────
export const personal = {
  name: "Muhammed Sayar",
  title: "Bilgisayar Mühendisi",
  email: "mrsayarr@protonmail.com",
  location: "İstanbul, Türkiye",
  githubUsername: "mrrsayarr",
  githubUrl: "https://github.com/mrrsayarr",
  linkedinUrl: "https://www.linkedin.com/in/muhammed-sayar/",
  instagramUrl: "https://instagram.com/mrrsayarr",
  statusBadge: "Aktif İş Arayışında",
  bio: "GNU/Linux sistem yönetimi, Siber Güvenlik ve Ağ (Network) teknolojilerine odaklanmış Bilgisayar Mühendisiyim. Askerlik hizmetimi tamamladım; Sistem, Network veya Siber Güvenlik pozisyonlarında sorumluluk almaya hazırım.",
}

// ─── Hakkımda Metni ─────────────────────────────────────────
export const about: string[] = [
  "Bilgisayar Mühendisliği yeni mezunuyum. Kariyerime, sahip olduğum teknik bilgileri gerçek projelerde geliştirerek ve yeni teknolojileri sürekli öğrenerek ilerlemeyi hedefliyorum.",
  "Yaptığım işi yalnızca tamamlamak yerine, en doğru ve verimli şekilde gerçekleştirmeye önem veriyorum. Güncel teknolojileri takip ederek uygun oldukları noktalarda çalışmalarına dahil etmeyi ve her projede kendimi bir adım daha geliştirmeyi amaçlıyorum.",
  "Öğrenmeye açık, çalışkan ve sorumluluk almaktan çekinmeyen biriyim. Uzun vadede hem kendime hem de çalıştığım ekibe değer katan bir mühendis olmayı hedefliyorum.",
]

// ─── Yetenekler & Odak Alanları ─────────────────────────────
export const skills: string[] = [
  "GNU/Linux Sistem Yönetimi",
  "Siber Güvenlik Temelleri",
  "Network & Ağ Yapılandırması",
  "Python Scripting",
  "Windows Server",
  "Veri Tabanı Yönetimi (SQL)",
  "C# / ASP.NET MVC",
  "Web Geliştirme",
  "Teknik Araştırma & Problem Çözme",
]

// ─── İş & Staj Deneyimleri ──────────────────────────────────
export interface Experience {
  title: string
  period: string
  description: string
  color: "blue" | "emerald"
}

export const experiences: Experience[] = [
  {
    title: "WGuard - Sistem Mühendisi Stajyeri",
    period: "Temmuz 2023 - Ocak 2024",
    description:
      "Sistem mühendisliği, Linux sunucu yapılandırmaları ve sistem operasyonları üzerine staj deneyimi.",
    color: "blue",
  },
  {
    title: "Bordo - Frontend Developer Stajyeri",
    period: "Haziran 2022 - Eylül 2022",
    description:
      "Web kullanıcı arayüzü geliştirme, responsive tasarım ve dinamik web bileşenleri üzerine staj çalışması.",
    color: "emerald",
  },
]

// ─── Eğitim ─────────────────────────────────────────────────
export interface Education {
  school: string
  period: string
  department: string
  color: "purple" | "gray"
}

export const educations: Education[] = [
  {
    school: "Amasya Üniversitesi",
    period: "2020 - 2025 • Mezun",
    department: "Bilgisayar Mühendisliği (Lisans)",
    color: "purple",
  },
  {
    school: "Hüseyin Kalkavan Lisesi",
    period: "2014 - 2019 • Mezun",
    department: "Sağlık Meslek Lisesi",
    color: "gray",
  },
]

// ─── Teknolojiler & Araçlar ──────────────────────────────────
// iconKey değerleri App.tsx'teki ikonlarla eşleşir — değiştirmeyin
export interface Technology {
  name: string
  iconKey: string
  colorClass: string
}

export const technologies: Technology[] = [
  { name: "Linux", iconKey: "linux", colorClass: "text-yellow-400" },
  { name: "Python", iconKey: "python", colorClass: "text-yellow-300" },
  { name: "C#", iconKey: "csharp", colorClass: "text-purple-400" },
  { name: ".NET", iconKey: "dotnet", colorClass: "text-blue-400" },
  { name: "MSSQL", iconKey: "mssql", colorClass: "text-red-400" },
  { name: "Git", iconKey: "git", colorClass: "text-orange-400" },
  { name: "GitHub", iconKey: "github", colorClass: "text-gray-300" },
  { name: "React", iconKey: "react", colorClass: "text-cyan-400" },
  { name: "TypeScript", iconKey: "typescript", colorClass: "text-blue-400" },
  { name: "Tailwind", iconKey: "tailwind", colorClass: "text-teal-400" },
  { name: "JavaScript", iconKey: "javascript", colorClass: "text-yellow-400" },
  { name: "HTML5", iconKey: "html5", colorClass: "text-orange-500" },
  { name: "CSS3", iconKey: "css3", colorClass: "text-blue-500" },
  { name: "Jupyter", iconKey: "jupyter", colorClass: "text-orange-600" },
  { name: "Node.js", iconKey: "nodejs", colorClass: "text-green-400" }
]


