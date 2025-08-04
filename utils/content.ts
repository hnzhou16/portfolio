export const skillGroups = [
  {
    category: "Frontend Development:",
    skills: ["Next.js", "React", "JavaScript", "TypeScript", "Redux", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Backend Development:",
    skills: ["Go", "Node.js", "Express.js", "Python", "Java", "C++",  "TypeORM", "REST API", "Postman"],
  },
  {
    category: "Database:",
    skills: ["MySQL", "MongoDB"],
  },
  {
    category: "UI/UX Design:",
    skills: ["Figma", "Adobe Suite", "Prototyping", "User Research", "Responsive Design"],
  },
  {
    category: "Computational Design & BIM:",
    skills: ["Revit", "Dynamo", "Rhino", "Grasshopper", "Ladybug", "Sunflower", "ClimateStudio"],
  },
  {
    category: "Product Management:",
    skills: ["Agile",  "Scrum", "SDLC", "GitHub"],
  },
];

export const projects = [
  {
    summary: "Design Better Homes Together",
    title: "CoCraft",
    description: "A live platform that connects homeowners, designers, and contractors to visualize, share, and collaborate on home design. " +
      "Users can create posts, generate AI design visuals, comment, follow others, and explore personalized feeds. " +
      "Featuring secure login, user roles, cloud storage, and a responsive, dark-mode-ready UI. " +
      "CoCraft makes creating beautiful spaces together seamless and inspiring.",
    image: "/intro_cocraft.png",
    tools: ["Next.js", "React", "TypeScript", "Redux Toolkit", "TailwindCSS", "Go", "MongoDB", "AWS S3", "OpenAI API", "JWT", "HTTP-only cookies"],
    frontend: "https://github.com/hnzhou16/project-cocraft-client",
    backend: "https://github.com/hnzhou16/project-cocraft-server",
    live: "https://www.cocrafthome.com/",
    showWebsite: true,
  },
  {
    summary: "Smarter Shopping with AI",
    title: "Hugzest",
    description: " A modern e-commerce platform built with React, featuring AI-powered product recommendations, dynamic product filtering, " +
      "address autocomplete, interactive image galleries, and real-time persistent cart updates. Users enjoy a streamlined shopping experience " +
      "with secure PayPal checkout. It demonstrates scalable backend/frontend integration and real-world deployment.",
    image: "/intro_hugzest.png",
    tools: ["Node.js", "React", "TypeScript", "Redux", "CSS", "Express.js", "SQLite", "TypeORM", "OpenAI API", "PayPal API", "Google Maps API", "JWT"],
    frontend: "https://github.com/hnzhou16/project-ecommerce",
    backend: "https://github.com/hnzhou16/project-ecommerce-backend",
    live: "https://hugzest.com",
    showWebsite: true,
  },
  {
    summary: "Adaptive Architecture",
    title: "Data-Driven Design",
    description: "Design studies that explore data-informed facade systems that adapt to sunlight, context, and function. " +
      "From a forest tree house to an urban tower, each design uses solar analysis and parametric logic to optimize comfort, energy performance, and visual expression - demonstrating " +
      "how passive strategies and responsive skins can shape sustainable, site-specific, and resilient architecture.",
    image: "/intro_design.jpg",
    tools: ["Rhino", "Grasshopper", "Ladybug", "Sunflower"],
    showWebsite: false,
  }
]