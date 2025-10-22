/**
 * Header Component Texts in English
 */

const HEADER_TEXTS = {
    name: "Rupesh",
    home: "Home",
    about: "About",
    work: "Work",
    credential: "Credential",
    contact: "Contact",
};

/**
 * Home page texts in English
 */

const SKILLS = [
    "Salesforce",
    "Lightning Web Components",
    "Bryntum Grid",
    "Bryntum Scheduler",
    "Apex",
    "SOQL",
    "SOSL",
    "HTML",
    "CSS",
    "JavaScript",
    "Jest",
    "Git",
    "Jenkins",
    "JIRA",
];

const HOME_TEXTS = {
    profilePicAlt: "Rupesh Prajapat Pic.",
    greeting: "HI THERE!",
    intro1: "I'M",
    intro2: "RUPESH",
    role: "Senior Software Engineer / Salesforce Developer / PSA Consultant",
    description:
        "I’m a Salesforce Developer and Full-Stack Engineer passionate about building scalable applications and seamless user experiences.",
    technicalSkills: "Technical Skills",
    skills: SKILLS,
};

/**
 * About Me section texts in English
 */

const ABOUT_ME = [
    "I'm Rupesh Prajapat, a Senior Salesforce Developer with over 4 years of experience designing and developing robust solutions on the Salesforce platform. I specialize in Lightning Web Components (LWC), Apex, and building high-performance UIs using Bryntum Grid and Scheduler. My work focuses on creating user-friendly interfaces and scalable backend logic aligned with business needs.",
    "Currently at Metacube, I contribute to the development of the Professional Services Automation (PSA) product by Certinia (formerly FinancialForce). I’ve taken on key responsibilities like managing release cycles, mentoring team members, and solving complex technical challenges.",
    "I'm certified in Salesforce PD1, PD2, and JD1, and have hands-on experience with tools like VS Code, Git, Jenkins, and JIRA. My journey started with core programming in C++ and evolved into building enterprise-grade Salesforce applications, including internal tools like a Permission Visualizer App.",
    "Outside of work, I enjoy mentoring new developers, staying up-to-date with emerging technologies, and contributing to team growth.",
];

const ABOUT_ME_TEXTS = {
    aboutMeHeading: "About Me",
    aboutMeParagraphs: ABOUT_ME,
};

/**
 * Work Experience section texts in English
 */

const WORK_EXPERIENCES = [
    {
        company: "Metacube Software",
        role: "Senior Software Engineer | Client – Certinia (Formerly FinancialForce)",
        duration: "April 2024 - Present",
        responsibilities: [
            "Manages team activities, release planning, and project execution for the Professional Services Automation (PSA) product.",
            "Identifies technical requirements, risks, and complexities for upcoming releases.",
            "Optimized performance of existing LWC UI components built with Bryntum Grid and Scheduler.",
            "Delivers Salesforce training sessions and provides technical guidance to other development teams.",
        ],
    },

    {
        company: "Metacube Software",
        role: "Software Engineer | Client – Certinia (Formerly FinancialForce)",
        duration: "Jan 2021 - March 2024",
        responsibilities: [
            "Specialized in end-to-end UI development in an Agile team, from requirement analysis to quality assurance.",
            "Developed reusable LWC components and Apex code to enhance efficiency.",
            "Migrated multiple Visualforce pages to modern Lightning Web Components (LWC).",
            "Contributed to the development of PSA Core and PSA Workspace packages.",
            "Mentored new Graduate Engineer Trainees (GETs).",
        ],
    },

    {
        company: "Metacube Software",
        role: "Graduate Engineer Trainee",
        duration: "Oct 2020 - Dec 2020",
        responsibilities: [
            "Started a career in Salesforce with a foundational 2-month crash course on development fundamentals and standards.",
            "Contributed to internal development tasks and onboarding processes for new hires.",
        ],
    },
];

const WORK_EXPERIENCE_TEXTS = {
    workExperienceHeading: "Work Experience",
    workExperiences: WORK_EXPERIENCES,
};

/**
 * Credential section texts in English
 */

const CERTIFICATIONS = [
    "Salesforce Platform Developer I",
    "Salesforce Platform Developer II",
    "Salesforce JavaScript Developer I",
];

const EDUCATIONS = [
    {
        degree: "Bachelor of Technology in Information Technology",
        additionalInfo: "2016-2020 | CTAE Udaipur",
    },
    {
        degree: "Senior Secondary, PCM with Computer Science",
        additionalInfo: "2015 | JNV Tonk",
    },
];

const PROJECTS = [
    {
        name: "My Portfolio Website",
        description:
            "A personal portfolio website to showcase my skills, work experience, and projects. Built using React.js and hosted on GitHub Pages.",
        skills: "HTML5 | CSS3 | JavaScript | React.js",
    },
    {
        name: "Salesforce Permission App",
        description:
            "A Salesforce application designed to visualize a user's object and field-level permissions in a single location by leveraging permission sets and profiles.",
        skills: "Salesforce | LWC | Apex | HTML5 | CSS3 | JavaScript",
    },
    {
        name: "Shopping App in Salesforce",
        description:
            "Created a shopping application using a Visualforce page and developed a quick action for the app with Aura and LWC components.",
        skills: "Salesforce | LWC | Apex | HTML5 | CSS3 | JavaScript",
    },
    {
        name: "Snake Game",
        description:
            "A game created in 2017 using the graphics library in C++, which managed a 2D array of X,Y coordinates.",
        skills: "C++ | C++ Graphics Library",
    },
];

const CREDENTIAL_TEXTS = {
    credentialHeading: "Credentials",
    certificationsHeading: "Certifications",
    educationsHeading: "Education",
    projectsHeading: "Projects",
    certifications: CERTIFICATIONS,
    educations: EDUCATIONS,
    projects: PROJECTS,
};

/**
 * Contact section texts in English
 */

const CONTACT_TEXTS = {
    contactHeading: "Get in Touch",
    contactDescription:
        "I'm currently open to new opportunities and collaborations. Whether you have a question, a project idea, or just want to connect, feel free to reach out!",
    email: "Email",
    emailAddress: "rupesh.p9696@gmail.com",
    socialProfiles: "Social Profiles",
    githubLink: "https://github.com/rupesh0",
    linkedInLink: "https://www.linkedin.com/in/rupesh-prajapat/",
    trailheadLink: "https://trailhead.salesforce.com/en/me/rupesh.prajapat",
    emailMe: "Email Me",
    linkedIn: "LinkedIn",
    downloadResume: "Download Resume",
};

/**
 * Footer Component Texts in English
 */

const FOOTER_TEXTS = {
    copyright: "© 2025 Rupesh Prajapat. All rights reserved.",
};

export {
    HEADER_TEXTS,
    HOME_TEXTS,
    ABOUT_ME_TEXTS,
    WORK_EXPERIENCE_TEXTS,
    CREDENTIAL_TEXTS,
    CONTACT_TEXTS,
    FOOTER_TEXTS,
};
