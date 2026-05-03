import type { Dict } from "./types";

export const es: Dict = {
  nav: {
    items: [
      { label: "Sobre Mí", href: "#about" },
      { label: "Stack", href: "#stack" },
      { label: "Experiencia", href: "#experience" },
      { label: "Referencias", href: "#testimonials" },
      { label: "Contacto", href: "#contact" },
    ],
    cvLabel: "Currículum",
    ariaLabelOpenMenu: "Abrir menú",
    ariaLabelCloseMenu: "Cerrar menú",
  },

  hero: {
    greeting: "Hola, mi nombre es",
    description:
      "Soy un <highlight>Full Stack Engineer</highlight> con más de 5 años de experiencia construyendo productos web y mobile con React, React Native, Next.js, Node.js, NestJS y TypeScript.",
    cta: "Contactame",
    ctaSecondary: "Conoceme más",
  },

  about: {
    sectionNumber: "01.",
    title: "Sobre Mí",
    paragraphs: [
      "Soy Full Stack Engineer con más de 5 años de experiencia construyendo productos web y mobile con <highlight>React, React Native, Next.js, Node.js, NestJS y TypeScript</highlight>. Me gradué como Ingeniero en Sistemas en 2023 en la Universidad Tecnológica Nacional, lo que fortaleció mis fundamentos en diseño de software y pensamiento sistémico.",
      "La mayor parte de mi carrera ha sido en entornos de startups, donde tuve la oportunidad de trabajar muy cerca del producto, tomar ownership de features importantes, y pensar no solo en implementación sino también en arquitectura, performance y mantenibilidad a largo plazo.",
      "He trabajado en industrias como <highlight>EdTech, turismo y fintech</highlight>, construyendo productos usados por clientes reales y resolviendo problemas reales. Disfruto trabajar en flujos complejos, transformar requerimientos poco claros en soluciones sólidas, y ayudar a los equipos a tomar decisiones técnicas con el impacto del producto en mente.",
    ],
  },

  techStack: {
    sectionNumber: "02.",
    title: "Stack Tecnológico",
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
    secondaryLabel: "También he trabajado con",
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
    title: "Experiencia",
    ariaLabelPrev: "Experiencia anterior",
    ariaLabelNext: "Siguiente experiencia",
    ariaLabelGoto: "Ir a",
    entries: [
      {
        company: "Plannery",
        role: "Full Stack Engineer",
        period: "Dic 2024 - Presente",
        summary:
          "En Plannery trabajo como Full Stack Engineer construyendo y manteniendo features en los productos de préstamos y chequeo financiero con React y Node.js. También lideré la arquitectura y desarrollo de una app de presupuesto en Expo y React Native.",
        bullets: [
          "Implementé A/B tests en el flujo de solicitud de préstamos que incrementaron el monto promedio por cliente",
          "Construí un dashboard interactivo para clientes potenciales que contribuyó a un aumento del 10% en retención y conversión",
          // "Implementé un procesador de colas basado en Redis para webhooks de pagos con reintentos automáticos y exponential backoff",
          "Desarrollé una app en React Native con Expo, TypeScript y Unistyles para seguimiento de gastos con fuerte foco en performance",
          "Mejoré el performance mobile moviendo actualizaciones de UI en tiempo real fuera del JS thread, logrando 60 FPS constantes",
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
        period: "Dic 2023 - Dic 2024",
        summary:
          "Lideré el desarrollo del marketplace de tours en El Calafate usando Next.js, React, Apollo y TypeScript. Responsable de construir y mejorar las experiencias de booking, carrito y checkout, con foco en performance, escalabilidad y UX.",
        bullets: [
          "Construí un módulo de booking con flujo de 4 pasos para fechas, turnos, pasajeros y servicios opcionales",
          "Desarrollé las experiencias de cart y checkout para gestionar reservas, actualizar detalles y completar pagos",
          "Reduje duplicación de código extrayendo lógica compartida entre módulos",
          "Mejoré el tiempo de carga inicial de 5s a 1.5s mediante code splitting, lazy loading y optimización de queries e imágenes",
          "Reduje el tamaño inicial de la app en 80% con bundle optimization y Cloudinary",
          "Implementé CI/CD con Jest y Lighthouse CI para mantener calidad y performance",
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
        period: "Dic 2021 - Dic 2023",
        summary:
          "Trabajé en múltiples productos del ecosistema EdTech: app mobile para estudiantes en React Native, backoffice en React para profesores, y backend en NestJS. Contribuí al desarrollo y mantenimiento del stack completo.",
        bullets: [
          "Reduje el tiempo de onboarding de universidades de ~1 mes a 1 día con un sistema de AI-powered syllabus parsing usando Redis y BullMQ",
          "Lideré la integración de la API de OpenAI para que profesores generen cuestionarios con IA automáticamente",
          "Aceleré los ciclos de release mobile de días a minutos con OTA updates usando Microsoft App Center y CodePush",
          "Tuve ownership del desarrollo del backoffice para profesores, mentoreando a 2 developers junior",
          "Desarrollé y mantuve features full-stack en React, React Native y NestJS",
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
        period: "Ene 2020 - Presente",
        summary:
          "Como Freelance Full Stack Developer trabajé en soluciones web y mobile a medida. El proyecto de mayor impacto fue la modernización de un sistema legacy en VB6 para representantes de ventas, reconstruido como app mobile con React Native y Expo.",
        bullets: [
          "Construí una app mobile offline-first con persistencia local y background synchronization para operación confiable en baja conectividad",
          "Diseñé arquitectura multi-tenant donde cada cliente configura reglas de negocio que adaptan dinámicamente la UI, soportando múltiples clientes con un único codebase",
          "Desarrollé y mantuve la API backend en Node.js y TypeScript para soporte mobile y sincronización con el sistema legacy",
          "Implementé state management, navegación y base de datos local con Redux Toolkit, React Navigation y WatermelonDB",
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
        role: "Ayudante Graduado",
        period: "Mar 2022 - Dic 2023",
        summary:
          "Brindé apoyo a estudiantes en el dominio de diseño de software y modelado de dominio, acortando la brecha entre requerimientos teóricos e implementación técnica.",
        bullets: [
          "Facilité la enseñanza de OOAD, modelado de dominio y patrones de arquitectura",
          "Mentoreé a estudiantes en la traducción de requerimientos a UML, ERD y especificaciones funcionales y no-funcionales",
          "Guié proyectos finales (Web, Mobile, Desktop) asegurando alineación con el diseño arquitectónico y principios SOLID",
          "Evalué entregables técnicos con feedback sobre consistencia del modelo, desacoplamiento y mantenibilidad",
        ],
        technologies: ["UML", "OOAD", "SOLID", "Java"],
      },
    ],
  },

  testimonials: {
    sectionNumber: "04.",
    title: "Recomendaciones",
    entries: [
      {
        name: "Maru Ibanez",
        role: "Founder @ Evaluados AI | EdTech | Global Shaper Davos",
        relationship: "Maru fue manager directa de Agustin",
        excerpt:
          "Un gran profesional y una gran persona. Agustin se destaco por combinar muy buena capacidad tecnica con una vision de producto y de negocio poco comun en el rol. Desde que entro a Evaluados se convirtio rapidamente en un actor clave del equipo.",
        fullContent:
          "Un gran profesional y una gran persona. Agustin se destaco por combinar muy buena capacidad tecnica con una vision de producto y de negocio poco comun en el rol. Desde que entro a Evaluados se convirtio rapidamente en un actor clave del equipo.\n\n- Lidero varias propuestas de automatizacion interna. Una de las mas significativas en el equipo de implementacion fue el proceso de carga de asignaturas: lo que antes tomaba entre 1 y 2 meses con dos personas dedicadas, hoy se resuelve en apenas 2 dias.\n\n- Integro CodePush en nuestra app mobile para acelerar los deploys evitando el ciclo de las tiendas.\n\n- Trabajo en optimizar el onboarding de nuevas universidades y la carga masiva de usuarios (hablamos de miles de usuarios universitarios).\n\n- Acompano al CTO codo a codo en la migracion completa de nuestro software, entre muchas otras cosas.\n\nEs una persona muy proactiva: frente a cada desafio, siempre trae soluciones a la mesa. Tiene una gran sensibilidad para entender el impacto de su trabajo en el resto del equipo y aportar valor donde mas se necesita.\n\nCualquier equipo que lo sume va a ganar no solo un muy buen profesional, sino tambien un partner estrategico para pensar producto y operacion. Lo recomiendo sin dudarlo.",
        initials: "MI",
      },
    ],
    readMore: "Leer más",
    readLess: "Leer menos",
  },

  contact: {
    sectionNumber: "05.",
    tagline: "Contacto",
    title: "Hablemos",
    description:
      "Actualmente estoy abierto a nuevas oportunidades en Buenos Aires o remoto. Si estás construyendo un producto donde se espera que los ingenieros piensen profundamente, se muevan rápido y tengan un impacto real, probablemente nos llevemos muy bien.",
    emailLabel: "Enviar Email",
    calendlyLabel: "Agendar llamada",
  },

  footer: {
    credit: "Diseñado y desarrollado por Agustin Mariscotti",
  },
};
