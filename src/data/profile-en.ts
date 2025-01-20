import { profileData } from './profile'

export const profileDataEn = {
  name: profileData.name,
  title: "Software Developer",
  about: "I am a passionate software developer with expertise in web technologies. My focus is on creating modern, user-friendly applications using the latest technologies. I have experience in both frontend and backend development, with a particular interest in React and Next.js ecosystems.",
  socialLinks: {
    linkedin: profileData.socialLinks.linkedin,
    github: profileData.socialLinks.github,
    instagram: profileData.socialLinks.instagram,
  },
  skills: [
    {
      name: "React.js",
      level: "Advanced",
      type: "Frontend",
      color: "blue"
    },
    {
      name: "Next.js",
      level: "Intermediate",
      type: "Frontend Framework",
      color: "purple"
    },
    {
      name: "TypeScript",
      level: "Intermediate",
      type: "Programming Language",
      color: "blue"
    },
    {
      name: "Node.js",
      level: "Intermediate",
      type: "Backend",
      color: "green"
    },
    {
      name: "Tailwind CSS",
      level: "Advanced",
      type: "Styling",
      color: "teal"
    }
  ],
  experience: [
    {
      title: "Software Developer",
      company: "Tech Company",
      period: "2022 - Present",
      description: "Developing modern web applications using React and Next.js. Working with REST APIs and implementing responsive designs."
    },
    {
      title: "Frontend Developer Intern",
      company: "Digital Agency",
      period: "2021 - 2022",
      description: "Worked on various client projects, implementing UI designs and improving website performance."
    }
  ],
  education: [
    {
      school: "University Name",
      degree: "Bachelor's in Computer Engineering",
      period: "2018 - 2022",
      description: "Focus on software development and computer science fundamentals"
    }
  ]
} 