import type { Dict } from "./types";

export const en: Dict = {
  nav: {
    items: [
      { label: "About", href: "#about" },
      { label: "Stack", href: "#stack" },
      { label: "Experience", href: "#experience" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
    cvLabel: "Resume",
    ariaLabelOpenMenu: "Open menu",
    ariaLabelCloseMenu: "Close menu",
  },

  hero: {
    greeting: "Hi, my name is",
    description:
      "I'm a <highlight>Full Stack Engineer</highlight> with 5+ years of experience building web and mobile products with React, React Native, Next.js, Node.js, NestJS and TypeScript.",
    cta: "Contact me",
    ctaSecondary: "Learn more",
  },

  about: {
    sectionNumber: "01.",
    title: "About Me",
    paragraphs: [
      "I'm a Full Stack Engineer with 5+ years of experience building web and mobile products with <highlight>React, React Native, Next.js, Node.js, NestJS and TypeScript</highlight>. I graduated as a Systems Engineer in 2023 from Universidad Tecnológica Nacional, which strengthened my foundations in software design and systems thinking.",
      "Most of my career has been in startup environments, where I had the opportunity to work closely with the product, take ownership of important features, and think not just about implementation but also about architecture, performance and long-term maintainability.",
      "I've worked in industries like <highlight>EdTech, tourism and fintech</highlight>, building products used by real customers and solving real problems. I enjoy working in complex flows, turning unclear requirements into solid solutions, and helping teams make technical decisions with product impact in mind.",
    ],
  },

  techStack: {
    sectionNumber: "02.",
    title: "Tech Stack",
    categories: [
      {
        category: "Frontend",
        items: [
          {
            name: "React",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          },
          {
            name: "Next.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
            invert: true,
          },
          {
            name: "TypeScript",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          },
        ],
      },
      {
        category: "Mobile",
        items: [
          {
            name: "React Native",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          },
          {
            name: "Expo",
            icon: "https://cdn.simpleicons.org/expo",
            invert: true,
          },
        ],
      },
      {
        category: "Backend",
        items: [
          {
            name: "Node.js",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          },
          {
            name: "NestJS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
          },
          {
            name: "PostgreSQL",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
          },
          {
            name: "MongoDB",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          },
        ],
      },
      {
        category: "Tooling",
        items: [
          {
            name: "Docker",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
          },
          {
            name: "Git",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          },
          {
            name: "Jest",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
          },
          {
            name: "Vercel",
            icon: "https://cdn.simpleicons.org/vercel",
            invert: true,
          },
          {
            name: "GCP",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
          },
          {
            name: "Bitbucket",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg",
          },
        ],
      },
    ],
    secondaryLabel: "Also worked with",
    secondaryStack: [
      "Tailwind CSS",
      "Astro",
      "TanStack Query",
      "Prisma",
      "Apollo",
      "GraphQL",
      "Redux Toolkit",
      "WatermelonDB",
      "BullMQ",
      "Redis",
      "Cloudinary",
      "GitHub Actions",
    ],
  },

  experience: {
    sectionNumber: "03.",
    title: "Experience",
    ariaLabelPrev: "Previous experience",
    ariaLabelNext: "Next experience",
    ariaLabelGoto: "Go to",
    entries: [
      {
        company: "Plannery",
        role: "Full Stack Engineer",
        period: "Dec 2024 - Present",
        summary:
          "At Plannery I work as a Full Stack Engineer building and maintaining features across loan and financial checkup products with React and Node.js. I also led the architecture and development of a budgeting app in Expo and React Native.",
        bullets: [
          "Implemented A/B tests in the loan application flow that increased the average amount per customer",
          "Built an interactive dashboard for potential clients that contributed to a 10% increase in retention and conversion",
          // "Implemented a Redis-based queue processor for payment webhooks with automatic retries and exponential backoff",
          "Developed a React Native app with Expo, TypeScript and Unistyles for expense tracking with a strong performance focus",
          "Improved mobile performance by moving real-time UI updates off the JS thread, achieving consistent 60 FPS",
        ],
        technologies: [
          "React",
          "React Native",
          "Node.js",
          "TypeScript",
          "Redis",
          "Expo",
        ],
      },
      {
        company: "Patagonia Chic",
        role: "Frontend Lead",
        period: "Dec 2023 - Dec 2024",
        summary:
          "Led the development of the tour marketplace in El Calafate using Next.js, React, Apollo and TypeScript. Responsible for building and improving the booking, cart and checkout experiences, with a focus on performance, scalability and UX.",
        bullets: [
          "Built a booking module with a 4-step flow for dates, shifts, passengers and optional services",
          "Developed cart and checkout experiences to manage reservations, update details and complete payments",
          "Reduced code duplication by extracting shared logic across modules",
          "Improved initial load time from 5s to 1.5s through code splitting, lazy loading and query/image optimization",
          "Reduced initial app size by 80% with bundle optimization and Cloudinary",
          "Implemented CI/CD with Jest and Lighthouse CI to maintain quality and performance",
        ],
        technologies: [
          "Next.js",
          "React",
          "TypeScript",
          "Apollo",
          "Cloudinary",
        ],
      },
      {
        company: "Evaluados",
        role: "Full Stack Developer",
        period: "Dec 2021 - Dec 2023",
        summary:
          "Worked across multiple EdTech products: a mobile app for students in React Native, a backoffice in React for teachers, and a backend in NestJS. Contributed to development and maintenance of the full stack.",
        bullets: [
          "Reduced university onboarding time from ~1 month to 1 day with an AI-powered syllabus parsing system using Redis and BullMQ",
          "Led the integration of the OpenAI API so teachers can automatically generate quizzes with AI",
          "Accelerated mobile release cycles from days to minutes with OTA updates using Microsoft App Center and CodePush",
          "Took ownership of the teacher backoffice development, mentoring 2 junior developers",
          "Developed and maintained full-stack features across React, React Native and NestJS",
        ],
        technologies: [
          "React",
          "React Native",
          "NestJS",
          "TypeScript",
          "OpenAI",
          "Redis",
          "BullMQ",
        ],
      },
      {
        company: "Freelance",
        role: "Software Developer",
        period: "Jan 2020 - Present",
        summary:
          "As a Freelance Full Stack Developer I built custom web and mobile solutions. The highest-impact project was modernizing a legacy VB6 system for sales representatives, rebuilt as a mobile app with React Native and Expo.",
        bullets: [
          "Built an offline-first mobile app with local persistence and background synchronization for reliable operation in low connectivity",
          "Designed a multi-tenant architecture where each client configures business rules that dynamically adapt the UI, supporting multiple clients with a single codebase",
          "Developed and maintained the Node.js and TypeScript backend API for mobile support and synchronization with the legacy system",
          "Implemented state management, navigation and local database with Redux Toolkit, React Navigation and WatermelonDB",
        ],
        technologies: [
          "React Native",
          "Expo",
          "Node.js",
          "TypeScript",
          "WatermelonDB",
          "Redux Toolkit",
        ],
      },
      {
        company: "UTN",
        role: "Graduate Teaching Assistant",
        period: "Mar 2022 - Dec 2023",
        summary:
          "Supported students in mastering software design and domain modeling, bridging the gap between theoretical requirements and technical implementation.",
        bullets: [
          "Facilitated teaching of OOAD, domain modeling and architectural patterns",
          "Mentored students in translating requirements into UML, ERD and functional/non-functional specifications",
          "Guided final projects (Web, Mobile, Desktop) ensuring alignment with architectural design and SOLID principles",
          "Evaluated technical deliverables with feedback on model consistency, decoupling and maintainability",
        ],
        technologies: ["UML", "OOAD", "SOLID", "Java"],
      },
    ],
  },

  testimonials: {
    sectionNumber: "04.",
    title: "Recommendations",
    entries: [
      {
        name: "Maru Ibanez",
        role: "Founder @ Evaluados AI | EdTech | Global Shaper Davos",
        relationship: "Maru was Agustin's direct manager",
        excerpt:
          "A great professional and a great person. Agustin stood out by combining very good technical skills with a product and business vision that is rare in the role. Since he joined Evaluados, he quickly became a key player in the team.",
        fullContent:
          "A great professional and a great person. Agustin stood out by combining very good technical skills with a product and business vision that is rare in the role. Since he joined Evaluados, he quickly became a key player in the team.\n\n- He led several internal automation proposals. One of the most significant in the implementation team was the course loading process: what used to take 1 to 2 months with two dedicated people, today is resolved in just 2 days.\n\n- He integrated CodePush into our mobile app to accelerate deployments bypassing the app store cycle.\n\n- He worked on optimizing the onboarding of new universities and massive user uploads (we are talking about thousands of university users).\n\n- He worked side by side with the CTO in the complete migration of our software, among many other things.\n\nHe is a very proactive person: facing every challenge, he always brings solutions to the table. He has great sensitivity to understand the impact of his work on the rest of the team and add value where it is most needed.\n\nAny team that brings him on will gain not only a very good professional, but also a strategic partner for product and operations thinking. I recommend him without hesitation.",
        initials: "MI",
      },
    ],
    readMore: "Read more",
    readLess: "Read less",
  },

  contact: {
    sectionNumber: "05.",
    tagline: "Contact",
    title: "Let's Talk",
    description:
      "I'm currently open to new opportunities in Buenos Aires or remote. If you're building a product where engineers are expected to think deeply, move fast and generate real impact, we'll probably get along.",
    emailLabel: "Send Email",
    calendlyLabel: "Schedule a call",
  },

  footer: {
    credit: "Designed and developed by Agustin Mariscotti",
  },
};
