const projects = [
  {
    title: "KPI Trek",
    description:
      "A collaborative KPI tracking website to enter data, visualize metrics, track progress on a ticket-based platform. It allows efficient request management, sorting, filtering, and status updates. Utilized Nodemailer for notifications, Passport.js for authentication, Chart.js for data visualization, and Moment.js for date handling.",
    iconName: "kpiTrekIcon",
    stack: ["react", "sass", "mysql", "express", "node"],
    gitRepo: [
      "https://github.com/tavaresflavia/kpi-trek",
      "https://github.com/tavaresflavia/kpi-trek-api",
    ],
    liveSite: "https://kpi-trek.netlify.app",
    video:{origin: "youtube", url: "https://www.youtube.com/embed/Eu5hj1LfxmM?si=Dyl_KYN_fgrBXrgX"}, 
    images: [{url:"/images/kpitrek-home.png", title: "Home Page"},{url:"/images/kpitrek-1.png", title: "Request Page"}, {url:"/images/kpitrek-2.png", title: "KPI Page"}, {url:"/images/kpitrek-3.png", title: "Login (Google & JWT)"}, {url:"/images/kpitrek-2.png", title: "KPI Page"}, {url:"/images/kpitrek-4.png", title: "Request Email"}]
  },
  {
    title: "Seuphoria",
    description:
      "An makeup e-commerce with cool parallax effects built with TypeScript, React, Redux, Tailwind, Node, Express, Mongo and Mongoose.",
    stack: ["typescript", "react", "redux", "tailwind","express", "node", "mongodb"],
    video:{origin: "local", url: "/videos/seuphoria-demo.mp4"}, 
    gitRepo: ["https://github.com/tavaresflavia/seuphoria", "https://github.com/tavaresflavia/seuphoria-server"],
    images:[{url:"/images/seuphoria-1.png", title: "Home Page"}, {url:"/images/seuphoria-2.png", title: "Home Page Parallax"}, {url:"/images/seuphoria-3.png", title: "Shop Page"}, {url:"/images/seuphoria-4.png", title: "Cart Page"}]
  },
  {
    title: "BrainFlix",
    description:
      "A video streaming application that allows video uploading and adding comments.",
    stack: ["react", "sass", "express", "node"],
    gitRepo: "",
    images:[{url:"/images/brainflix-1.png", title: "Video Page"}, {url:"/images/brainflix-2.png", title: "Comment Section"}, {url:"/images/brainflix-3.png", title: "Video Upload"}]
  },
  {
    title: "TaskFusion",
    description:
      "An application designed to assist you in managing your daily to-do list and prioritizing tasks, created in just one day during a hackathon.",
    stack: ["react", "sass", "express", "node"],
    gitRepo: [
      "https://github.com/tavaresflavia/todo-list",
      "https://github.com/tavaresflavia/todo-list-api",
    ],
    images: [{url:"/images/todolist-1.png", title: "Daily Tasks"},{url:"/images/todolist-2.png", title: "Priority Tasks"}, {url:"/images/todolist-3.png", title: "Add Task"},]
  },
  {
    title: "CommuteCast",
    description:
      "An app designed for you to enter your commute duration, select your preferred podcast category, and receive three recommended podcasts, created in just one day during a hackathon.",
      stack: ["javascript","html", "sass"],
    gitRepo: ["https://github.com/tavaresflavia/commute-cast"],
    images: [{url:"/images/commutecast-1.png", title: "Podcast Page"},{url:"/images/commutecast-2.png", title: "Suggested Podcasts"},]
  },
];
export default projects;