// ============================================================
//  portfolioData.ts — Tüm site verilerini buradan yönetin
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
  "Amasya Üniversitesi Bilgisayar Mühendisliği bölümünden mezun oldum. Öğrenim hayatım boyunca ve sonrasında GNU/Linux sistemler, Siber Güvenlik, Ağ Yapılandırmaları ve Yazılım Geliştirme konularında kendimi sürekli yeniledim.",
  "C#, ASP.NET MVC ve Python ile geliştirme deneyimimin yanı sıra sistem güvenliği, ağ altyapıları ve sunucu yönetimi alanlarında pratik tecrübelere sahibim. Askerlik görevimi tamamlamış olup, analitik düşünce yapımla ekibinize değer katacak bir pozisyonda çalışmayı hedefliyorum.",
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
    period: "2014 - 2019",
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
]

// ─── Faydalı Linkler ─────────────────────────────────────────
export type LinkCategory = "security" | "development" | "learning" | "tools"

export interface UsefulLink {
  title: string
  description: string
  url: string
  category: LinkCategory
  icon: string
}

export const usefulLinks: UsefulLink[] = [
  {
    title: "HackTheBox",
    description: "Siber güvenlik becerilerini geliştirmek için pratik platformu",
    url: "https://www.hackthebox.com",
    category: "security",
    icon: "🛡️",
  },
  {
    title: "TryHackMe",
    description: "Siber güvenlik eğitimi ve CTF platformu",
    url: "https://tryhackme.com",
    category: "security",
    icon: "🎯",
  },
  {
    title: "React Docs",
    description: "React resmi dokümantasyonu",
    url: "https://react.dev",
    category: "development",
    icon: "⚛️",
  },
  {
    title: "MDN Web Docs",
    description: "Web teknolojileri için kapsamlı dokümantasyon",
    url: "https://developer.mozilla.org",
    category: "development",
    icon: "📖",
  },
  {
    title: "PortSwigger Web Security Academy",
    description: "Web güvenliği öğrenmek için ücretsiz eğitim platformu",
    url: "https://portswigger.net/web-security",
    category: "security",
    icon: "🔐",
  },
  {
    title: "OWASP",
    description: "Web uygulama güvenliği için en iyi uygulamalar ve kaynaklar",
    url: "https://owasp.org",
    category: "security",
    icon: "🔒",
  },
  {
    title: "Codecademy",
    description: "İnteraktif programlama öğrenme platformu",
    url: "https://www.codecademy.com",
    category: "learning",
    icon: "📚",
  },
  {
    title: "freeCodeCamp",
    description: "Ücretsiz kodlama eğitimi ve sertifikalar",
    url: "https://www.freecodecamp.org",
    category: "learning",
    icon: "🎓",
  },
  {
    title: "GitHub",
    description: "Kod paylaşımı ve versiyon kontrol platformu",
    url: "https://github.com",
    category: "tools",
    icon: "🐙",
  },
  {
    title: "Stack Overflow",
    description: "Programlama soruları ve cevapları için topluluk platformu",
    url: "https://stackoverflow.com",
    category: "tools",
    icon: "💬",
  },
]
