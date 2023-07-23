import {
  organization,
  training,
  github,
  linkedin,
  youtube,
  gmail,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
];

export const experience = [
  {
    id: "experience-1",
    icon: training,
    title: "Mobile Development Cohort, Bangkit Academy",
    content:
      "Training about how coding the Android application should be made using Kotlin Programming Language and learning through the capstone project",
  },
  {
    id: "experience-2",
    icon: training,
    title: "Women In Tech: Python and Cybersecurity",
    content:
      "Training about how coding a website application using Python and its cyber security",
  },
  {
    id: "experience-3",
    icon: organization,  
    title: "Graphic Design Division, SurabayaDev Community",
    content:
      "Planning design contents, brainstorming new design ideas, and designing Instagram Feeds, posters, and satisfy the design needs of the SurabayaDev Community",
  },
  {
    id: "experience-4",
    icon: training,  
    title: "Android Engineering, Binar Academy",
    content:
      "Studying how to code an Android application with Kotlin Programming Language and implementing it on the final project by creating an application to support online flight ticketing",
  },
  {
    id: "experience-5",
    icon: organization,  
    title: "Secretary of the Research and Strategy Division, Reasoning and Creativity Student Unit Activity",
    content:
      "Planning and implementing the programs of Research and Strategy Division, and coordinating members and responsible persons in the organization of Reasoning and Creativity Student Unit",
  },
];

export const projects = [
  {
    id: "projects-1",
    content:
      "Throughout my participation in MBKM at Bangkit Academy, there are plenty of submissions with various case studies. One of them is an application using Jetpack Compose. This application is still in the development stage so there are still many things haven't been done, such as connecting to API, etc",
    name: "Trale (Travel and Learn) Application",
    title: "Kotlin, Jetpack Compose, Teamwork",
    link: "https://github.com/C23-PR510-Trale/MD",
  },
  {
    id: "projects-2",
    content:
      "Management is one of undergraduate study program in Economy and Business Faculty, UPN Veteran Jawa Timur. Their current website uses Wordpress as their basis but they got some reviews from accreditation assessor to renew their website UI. So, my role here is redesigning the pre-existing UI using Wordpress plugin extension such as Elementor, GTranslate, etc.",
    name: "Management Undergraduate Study Program Website",
    title: "Wordpress, CMS, Elementor, Presentation Skills",
    link:"http://manajemen.upnjatim.ac.id/",
  },
];

export const socmed = [
  {
    id: "socmed-1",
    username: "github.com/aghniqisthi",
    link: "https://github.com/aghniqisthi",
    logo: github,
  },
  {
    id: "socmed-2",
    username: "Aghni Qisthina Al Rahma",
    link: "https://www.linkedin.com/in/aghni-qisthina-al-rahma",
    logo: linkedin,
  },
  {
    id: "socmed-3",
    username: "aghniqisthi@gmail.com",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=aghniqisthi@gmail.com",
    logo: gmail,
  },
  {
    id: "socmed-4",
    username: "Aghni Qisthina Al Rahma",
    link: "https://www.youtube.com/@aghniqisthi",
    logo: youtube,
  },
];
