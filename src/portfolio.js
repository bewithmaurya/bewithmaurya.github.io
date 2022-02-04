/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "नमस्ते 🙏🏻,",
  title2: "Shubham Kumar",
  logo_name: "BeWithMaurya",
  nickname: "Shubham ",
  full_name: "Shubham Kumar",
  subTitle:
    "Upcoming Software Developer, Open Source Enthusiast 🔥. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1b-o-r-xyvaTJT2tXAVN6ZYUboG2D0Grm/view",
  mail: "mailto:bewithmaurya@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/bewithmaurya",
  linkedin: "https://www.linkedin.com/in/itsshubh/",
  gmail: "bewithmaurya@gmail.com",
  gitlab: "https://gitlab.com/bewithmaurya",
  facebook: "https://www.facebook.com/bewithmaurya/",
  twitter: "https://twitter.com/bewithmaurya",
  instagram: "https://www.instagram.com/bewithmaurya/",
};

const skills = {
  data: [
    {
      title: "Software Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly system software for system using Java",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Developing mobile applications using Java and Android",
        "⚡ Integration of third party services such as Firebase"
      ],
      softwareSkills: [
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: " College of Engineering, Guindy Anna University",
      subtitle: "Masters of Computer Application",
      logo_path: "ssec.png",
      alt_name: "CEG",
      duration: "2019 - Present",
      descriptions: [
        "⚡ I'm currently pursuing my master in Computer Application.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
      ],
      website_link: "https://ceg.annauniv.edu/",
    },
    {
      title: "Cybotech Campus, Patna Magadh University",
      subtitle: "Bachelors of Computer Application",
      logo_path: "cybo.png",
      alt_name: "CC",
      duration: "2015 - 2018",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have implemented several projects based on what I've leart under my BCA course. ",
      ],
      website_link: "#",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "ISRO",
      subtitle: "Overview of Geoprocessing Using Python",
      logo_path: "isro.png",
      certificate_link:
        "https://drive.google.com/file/d/1WoKMueVgKDfGKaLS-1Bvt3qfMNWgnQDv/view?usp=sharing",
      alt_name: "isro",
      color_code: "#dcdcdc",
    },
    {
      title: "ShapeAI",
      subtitle: "Python and Deep learning Bootcamp",
      logo_path: "shapeai.png",
      certificate_link:
        "https://drive.google.com/file/d/1gPMz9cwx8jB-dJ5R2fO_LaheXdY88z3M/view?usp=sharing",
      alt_name: "shapeai",
      color_code: "#ccccff",
    },
    {
      title: "Career Foresight",
      subtitle: "Conducted an Exam with CDAC Team As Team Leader",
      logo_path: "cf.png",
      certificate_link:
        "#",
      alt_name: "cdacatc",
      color_code: "#d0f0c0",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed one internship. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Java Developer (Intern)",
          company: "iPixxel",
          company_url: "https://ipixxel.com",
          logo_path: "ipixxel.png",
          duration: "June 2021 - Aug 2021",
          location: "Work From Home",
          description:
          `Work closely with the Project Manager and Team Leads on change request functions.
          Develops new and maintains existing applications.
          Increased productivity and problem-solving technics by 20%.`,
          color: "#0071C5",
        },
        {
          title: "Full Stack Developer (Freelancer)",
          company: "Eduventa",
          company_url: "https://eduventa.com/",
          logo_path: "Eduventa.png",
          duration: "Sep 2021 - Dec 2021",
          location: "Work From Home",
          description:
          `Developed the full stack website having Admin and Learning Portal, and User Dashboard using Bootstrap, CSS
          framework, Core PHP and MySQL Database`,
          color: "#ee3c26",
        }
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Team Leader At AFCAT",
          company: "Career Foresight (CDAC)",
          company_url: "https://careerforesightatc.in/home",
          logo_path: "cf.png",
          duration: "March 2018",
          location: "Centre",
          description:
            "Responsibilities were to conduct exam, run and maintain the server with CDAC Team and AirForce Team",
          color: "#4285F4",
        },
        {
          title: "Team Leader At IAF Star",
          company: "Career Foresight (CDAC)",
          company_url: "https://careerforesightatc.in/home",
          logo_path: "cf.png",
          duration: "March 2019, July 2021",
          location: "Centre",
          description: "Responsibilities were to conduct exam, run and maintain the server with CDAC Team and AirForce Team",
          color: "#196acf",
        },
        {
          title: "Team Leader At ICG",
          company: "Career Foresight (CDAC)",
          company_url: "https://careerforesightatc.in/home",
          logo_path: "cf.png",
          duration: "March 2021",
          location: "Centre",
          description:
          "Responsibilities were to conduct exam, run and maintain the server with CDAC Team and Coast Guard Team",
          color: "#040f26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create Java Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile3.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "https://twitter.com/bewithmaurya",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Bookshop Management",
      url: "https://github.com/bewithmaurya/bookshopmanagement",
      description: "It is the management of the book shop having different kinds of works such as generate a receipt for Customer.",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "SQL",
          iconifyClass: "logos-mysql",
        },
      ],
    },
    {
      id: "1",
      name: "WithU",
      url: "https://github.com/bewithmaurya/withu",
      description:
        "It allows you to know the exact location and keep track of the whereabouts of your family members or friends are in real-time.",
      languages: [
        {
          name: "Android",
          iconifyClass: "logos-android-icon",
        },
        {
          name: "XML",
          iconifyClass: "vscode-icons:file-type-xml",
        },
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      id: "2",
      name: "Electronic Medical Record",
      url: "https://github.com/bewithmaurya/electronimedicalrecord",
      description:"The basic idea is to use Blockchain for storing patient records. The medical records of a patient will be accessible from any hospital.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Ethereum",
          iconifyClass: "logos-ethereum",
        },
        {
          name: "Metamask",
          iconifyClass: "logos-metamask-icon",
        },
        {
          name: "Ganache",
          iconifyClass: "logos-ganache-icon",
        },
      ],
    },
    {
      id: "3",
      name: "Ecommerce Web App",
      url: "https://github.com/bewithmaurya/ecommerce",
      description:
        "It provides all the facility and placed multiple order at same time and in admin end there is option for tracking the order",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Php",
          iconifyClass: "logos-php",
        },
        {
          name: "MySQL",
          iconifyClass: "logos-mysql",
        },
      ],
    },
    {
      id: "4",
      name: "Chat App",
      url: "https://github.com/bewithmaurya/letschat",
      description:
        "A simple android application in which user can interect with other user.",
      languages: [
        {
          name: "Android",
          iconifyClass: "logos-android-icon",
        },
        {
          name: "XML",
          iconifyClass: "vscode-icons:file-type-xml",
        },
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      id: "3",
      name: "Veterinary Mnagement System",
      url: "https://github.com/bewithmaurya/vetclinicmanagementsystem",
      description:
        "Creation of Pet Record for these problem that is being checked in clinic keeping in view of all the basic area that concerned for a Clinic.",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "SQL",
          iconifyClass: "logos-mysql",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
