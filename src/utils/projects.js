const projects = [
  {
    title: "KPI Trek",
    description:
      "A collaborative KPI tracking website to enter data, visualize metrics, track progress on a ticket-based platform by assigning, sorting and filtering requests. Also add comments and change the request status.",
    iconName: "kpiTrekIcon",
    stack: ["react", "sass", "mysql", "express", "node"],
    gitRepo: [
      "https://github.com/tavaresflavia/kpi-trek",
      "https://github.com/tavaresflavia/kpi-trek-api",
    ],
    liveSite: "",
    video:"https://www.youtube.com/embed/Eu5hj1LfxmM?si=Dyl_KYN_fgrBXrgX", 
    images: [{url:"/images/kpitrek-home.png", title: "Home Page"},{url:"/images/kpitrek-1.png", title: "Request Page"}, {url:"/images/kpitrek-2.png", title: "KPI Page"}, {url:"/images/kpitrek-3.png", title: "Login (Google & JWT)"}]
  },
  {
    title: "Todo List",
    description:
      "An application designed to assist you in managing your daily to-do list and prioritizing tasks, created in just one day during a hackathon.",
    stack: ["react", "sass", "express", "node"],
    gitRepo: [
      "https://github.com/tavaresflavia/todo-list",
      "https://github.com/tavaresflavia/todo-list-api",
    ],
    images: [{url:"/images/kpitrek-home.png", title: "Home Page"},{url:"/images/kpitrek-1.png", title: "Request Page"}, {url:"/images/kpitrek-2.png", title: "KPI Page"}, {url:"/images/kpitrek-3.png", title: "Login (Google & JWT)"}]
  },
  {
    title: "BrainFlix",
    description:
      "A video streaming application that allows video uploading and adding comments.",
    stack: ["react", "sass", "express", "node"],
    gitRepo: [
      "https://github.com/tavaresflavia/brainflix",
      "https://github.com/tavaresflavia/flavia-tavares-brainflix-api",
    ],
  },
  {
    title: "CommuteCast",
    description:
      "An app designed for you to enter your commute duration, select your preferred podcast category, and receive three recommended podcasts, created in just one day during a hackathon.",
      stack: ["js","html", "sass"],
    gitRepo: ["https://github.com/tavaresflavia/commute-cast"],
  },
];
export default projects;