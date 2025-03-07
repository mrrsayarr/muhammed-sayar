interface UsefulLink {
  title: string;
  description: string;
  url: string;
  category: 'security' | 'development' | 'learning' | 'tools';
  icon: '🔧';
}

export const usefulLinks: UsefulLink[] = [
  {
    title: "HackTheBox",
    description: "Siber güvenlik becerilerini geliştirmek için pratik platformu",
    url: "https://www.hackthebox.com",
    category: "security",
    icon: "🔧"
  },
  {
    title: "TryHackMe",
    description: "Siber güvenlik eğitimi ve CTF platformu",
    url: "https://tryhackme.com",
    category: "security",
    icon: "🔧"
  },
  {
    title: "React Docs",
    description: "React resmi dokümantasyonu",
    url: "https://react.dev",
    category: "development",
    icon: "🔧"
  },
  {
    title: "MDN Web Docs",
    description: "Web teknolojileri için kapsamlı dokümantasyon",
    url: "https://developer.mozilla.org",
    category: "development",
    icon: "🔧"
  },
  {
    title: "PortSwigger Web Security Academy",
    description: "Web güvenliği öğrenmek için ücretsiz eğitim platformu",
    url: "https://portswigger.net/web-security",
    category: "security",
    icon: "🔧"
  },
  {
    title: "OWASP",
    description: "Web uygulama güvenliği için en iyi uygulamalar ve kaynaklar",
    url: "https://owasp.org",
    category: "security",
    icon: "🔧"
  },
  {
    title: "Codecademy",
    description: "İnteraktif programlama öğrenme platformu",
    url: "https://www.codecademy.com",
    category: "learning",
    icon: "🔧"
  },
  {
    title: "freeCodeCamp",
    description: "Ücretsiz kodlama eğitimi ve sertifikalar",
    url: "https://www.freecodecamp.org",
    category: "learning",
    icon: "🔧"
  },
  {
    title: "GitHub",
    description: "Kod paylaşımı ve versiyon kontrol platformu",
    url: "https://github.com",
    category: "tools",
    icon: "🔧"
  },
  {
    title: "Stack Overflow",
    description: "Programlama soruları ve cevapları için topluluk platformu",
    url: "https://stackoverflow.com",
    category: "tools",
    icon: "🔧"
  }
];