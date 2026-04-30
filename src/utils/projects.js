const projects = [
  {
    title: "KPI Trek",
    featured: true,
    problem:
      "Built a KPI tracking platform to help teams manage requests, track progress, and visualize performance in one workflow.",
    description:
      "A KPI tracking and dashboard platform built to improve real-world team workflows. It supports request management, metric visualization, progress tracking, sorting, filtering, status updates, notifications, authentication, and data-driven decision-making.",
    impact: [
      "Designed workflow tracking system with status and filtering",
      "Built dashboard-style data visualization for KPIs",
      "Implemented authentication and notifications",
    ],
    stack: ["react", "sass", "mysql", "express", "node"],
    gitRepo: [
      "https://github.com/tavaresflavia/kpi-trek",
      "https://github.com/tavaresflavia/kpi-trek-api",
    ],
    liveSite: "https://kpi-trek.netlify.app",
    video: {
      origin: "youtube",
      url: "https://www.youtube.com/embed/Eu5hj1LfxmM?si=Dyl_KYN_fgrBXrgX",
    },
    images: [
      { url: "/images/kpitrek-home.png", title: "Home Page" },
      { url: "/images/kpitrek-1.png", title: "Request Page" },
      { url: "/images/kpitrek-2.png", title: "KPI Page" },
      { url: "/images/kpitrek-3.png", title: "Login (Google & JWT)" },
      { url: "/images/kpitrek-2.png", title: "KPI Page" },
      { url: "/images/kpitrek-4.png", title: "Request Email" },
    ],
  },
  {
    title: "Seuphoria",
    problem:
      "Shoppers needed a polished e-commerce experience with clear browsing, cart, and checkout flows.",
    description:
      "A makeup e-commerce experience built with TypeScript, React, Redux, Tailwind, Node, Express, MongoDB, and Mongoose.",
    impact: [
      "Developed product browsing and cart functionality",
      "Used TypeScript and Redux to keep state predictable across the shopping flow",
      "Created a responsive interface with focused visual hierarchy",
    ],
    stack: [
      "typescript",
      "react",
      "redux",
      "tailwind",
      "express",
      "node",
      "mongodb",
    ],
    video: { origin: "local", url: "/videos/seuphoria-demo.mp4" },
    gitRepo: [
      "https://github.com/tavaresflavia/seuphoria",
      "https://github.com/tavaresflavia/seuphoria-server",
    ],
    images: [
      { url: "/images/seuphoria-1.png", title: "Home Page" },
      { url: "/images/seuphoria-2.png", title: "Home Page Parallax" },
      { url: "/images/seuphoria-3.png", title: "Shop Page" },
      { url: "/images/seuphoria-4.png", title: "Cart Page" },
    ],
  },
  {
    title: "Portfolio",
    problem:
      "Recruiters need to understand my product development value quickly and clearly.",
    description:
      "A focused portfolio website built with React, SASS, and Framer Motion to present product-minded full stack work, technical skills, and project impact.",
    impact: [
      "Designed a concise personal site around product value and technical range",
      "Built responsive sections for work, skills, and project case studies",
      "Used motion selectively to support clarity without slowing the experience",
    ],
    stack: ["react", "sass"],
    gitRepo: [
      "https://github.com/tavaresflavia/portfolio"
    ]
  },
  {
    title: "BrainFlix",
    problem:
      "Users needed a video interface for browsing content, uploading videos, and adding comments.",
    description:
      "A video streaming application that allows video uploading and adding comments.",
    impact: [
      "Built a responsive video detail and upload experience",
      "Developed API-backed comment and video interactions",
      "Structured reusable React components for repeatable UI patterns",
    ],
    stack: ["react", "sass", "express", "node"],
    gitRepo: "",
    images: [
      { url: "/images/brainflix-1.png", title: "Video Page" },
      { url: "/images/brainflix-2.png", title: "Comment Section" },
      { url: "/images/brainflix-3.png", title: "Video Upload" },
    ],
  },
  {
    title: "TaskFusion",
    problem:
      "Users needed a simple way to organize daily tasks and make priorities visible.",
    description:
      "A task management tool for organizing daily work and prioritizing what matters most.",
    impact: [
      "Built task creation and priority views for faster planning",
      "Created a clear interface for daily workflow organization",
      "Connected the React front end to a Node and Express API",
    ],
    stack: ["react", "sass", "express", "node"],
    gitRepo: [
      "https://github.com/tavaresflavia/todo-list",
      "https://github.com/tavaresflavia/todo-list-api",
    ],
    images: [
      { url: "/images/todolist-1.png", title: "Daily Tasks" },
      { url: "/images/todolist-2.png", title: "Priority Tasks" },
      { url: "/images/todolist-3.png", title: "Add Task" },
    ],
  },
  {
    title: "CommuteCast",
    problem:
      "Commuters needed quick podcast recommendations matched to commute length and interests.",
    description:
      "A recommendation tool that matches podcast suggestions to commute duration and preferred category.",
    impact: [
      "Designed a focused input flow for commute length and listening preferences",
      "Generated concise podcast recommendations for quick decision-making",
      "Built a lightweight responsive interface with JavaScript, HTML, and SASS",
    ],
    stack: ["javascript", "html", "sass"],
    gitRepo: ["https://github.com/tavaresflavia/commute-cast"],
    images: [
      { url: "/images/commutecast-1.png", title: "Podcast Page" },
      { url: "/images/commutecast-2.png", title: "Suggested Podcasts" },
    ],
  },
];
export default projects;
