/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // You can replace with your own Lottie

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000,
};

// Summary And Greeting Section
const illustration = {
  animated: true,
};

const greeting = {
  username: "Mahmoud Tarraf",
  title: "Hi all, I'm Mahmoud",
  subTitle: emoji(
  "🚀 Flutter Frontend & Node/Django Backend Developer,   \tcrafting full-stack apps with passion."
  ),

  resumeLink:
    "https://drive.google.com/file/d/1WrHKPBb4DCyDfBp_HDJqo0u6vzpjf7PZ/view", // <-- Replace with your resume link
  displayGreeting: true,
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/MahmoudTarraf",
  linkedin: "https://www.linkedin.com/in/mahmoud-tarraf/",
  gmail: "mahmoudtarraf77@gmail.com",
  facebook: "https://www.facebook.com/share/153i3Qbi8i/",
  medium: "https://medium.com/@mahmoudtarraf77", // if you publish there
  stackoverflow: "", // optional
  display: true,
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "FULL-STACK DEVELOPER | BUILDING MODERN APPS FRONTEND & BACKEND",
  skills: [
    emoji("⚡ Develop cross-platform mobile apps with Flutter & Dart"),
    emoji("⚡ Build RESTful APIs and backends with Node.js, Django & Firebase"),
    emoji("⚡ Integrate payments, notifications, and third-party services"),
    emoji("⚡ Design scalable databases and server-side logic"),
    emoji("⚡ Learn and implement new technologies quickly"),
  ],

  softwareSkills: [
    { skillName: "flutter", fontAwesomeClassname: "fab fa-android" },
    { skillName: "dart", fontAwesomeClassname: "fas fa-code" },
    { skillName: "firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "django", fontAwesomeClassname: "fas fa-server" },
    { skillName: "node.js", fontAwesomeClassname: "fab fa-node-js" }, // Added Node.js
    { skillName: "javascript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "html-5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "git", fontAwesomeClassname: "fab fa-git-alt" },
  ],
  display: true,
};


// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Tishreen University",
      logo: require("./assets/images/Latakia_University_logo.png"), // add your own logo file
      subHeader: "Bachelor of Informatics Engineering",
      duration: "2019 – 2024",
      desc: "Graduated with a strong background in software engineering, algorithms, and application development.",
    },
    {
      schoolName: "Syrian Virtual University",
      logo: require("./assets/images/Latakia_University_logo.png"),
      subHeader: "Master’s in Web Science (Ongoing)",
      duration: "2024 – Present",
      desc: "Focusing on modern web technologies, data science, and AI applications.",
    },
  ],
};

// Tech Stack
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Flutter/Dart", progressPercentage: "90%" },
    { Stack: "Firebase/Django", progressPercentage: "80%" },
    { Stack: "Node.js/Express", progressPercentage: "75%" }, // Added Node.js
    { Stack: "Python/Backend", progressPercentage: "70%" },
    { Stack: "JavaScript/Frontend", progressPercentage: "85%" }, // optional for completeness
    { Stack: "HTML/CSS", progressPercentage: "85%" },
  ],
  displayCodersrank: true,
};


// Work experience section
const workExperiences = {
  display: true,
  experience: [
  {
    role: "Flutter Intern Developer",
    company: "Focal_X",
    companylogo: require("./assets/images/focal_x_logo.avif"),
    date: "2025 – Present",
    desc: "Developing, testing, and validating Flutter applications to ensure performance, reliability, and   seamless user experience.",
  },

    {
      role: "Flutter Developer (Freelance)",
      company: "Multiple Clients",
      companylogo: require("./assets/images/mostaql_logo.jpg"),
      date: "2022 – Present",
      desc: "Built apps like task management, hotel booking, and chess game with Firebase/Django backend.",
    },
  ],
};

// GitHub Open Source Section
const openSource = {
  showGithubProfile: "true",
  display: true,
};

// Big Projects
const bigProjects = {
  title: "Projects",
  subtitle: "Some apps and systems I have developed",
  projects: [
    {
      image: require("./assets/images/tasker_logo.png"),
      projectName: "Tasker App",
      projectDesc:
        "A Flutter task management app with scheduling, notifications, and AI-powered verification of completed tasks for improved productivity.",
      footerLink: [
        { name: "GitHub Repo", url: "https://github.com/MahmoudTarraf/todo_app_with_notifications" }
      ],
    },
    {
      image: require("./assets/images/chess_back.jpeg"),
      projectName: "Chess App",
      projectDesc:
        "Flutter-based Chess League app featuring multiplayer gameplay, real-time match tracking, and a sleek interactive UI.",
      footerLink: [
        { name: "GitHub Repo", url: "https://github.com/MahmoudTarraf/Chess-League/tree/master" }
      ],
    },
    {
      image: require("./assets/images/icy_delights_logo.png"),
      projectName: "Ice Cream App",
      projectDesc:
        "A Flutter user-friendly app for browsing and ordering ice cream flavors with interactive menus and smooth animations.",
      footerLink: [
        { name: "GitHub Repo", url: "https://github.com/MahmoudTarraf/Ice_Cream_User" }
      ],
    },
    {
      image: require("./assets/images/disease_analysis.png"),
      projectName: "Disease Analysis App",
      projectDesc:
        "Flutter app that analyzes a database of diseases using Frequent Patterns and K-Nearest Neighbors algorithms to provide insights and predictions.",
      footerLink: [
        { name: "GitHub Repo", url: "https://github.com/MahmoudTarraf/Disease-Analysis" }
      ],
    },
  ],
  display: true,
};


// Achievements Section
const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Certificates and milestones I have achieved",
  achievementsCards: [
    {
      title: "Google IT Support Certificate",
      subtitle: "Completed on Coursera.",
      image: require("./assets/images/Google-IT-Professional-Certificate-Logo.png"),
      imageAlt: "Google IT Support",
      footerLink: [],
    },
  ],
  display: true,
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle: "I share my knowledge on software development and learning",
  displayMediumBlogs: "true",
  blogs: ["https://medium.com/@mahmoudtarraf77/a-beginners-guide-to-writing-unit-tests-in-flutter-b2bc5ed65abe"],
  display: false, // set true if you want to add blogs
};

// Talks Section
const talkSection = {
  title: "Talks",
  subtitle: emoji("Sharing knowledge with peers"),
  talks: [],
  display: false,
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I occasionally speak about tech",
  podcast: [],
  display: false,
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Download my resume",
  display: true,
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just say hi!",
  number: "+963 0939672432",
  email_address: "mahmoudtarraf77@gmail.com",
};

// Twitter Section
const twitterDetails = {
  userName: "MahmoudTarraf", // replace with your Twitter/X username if any
  display: false,
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
};
