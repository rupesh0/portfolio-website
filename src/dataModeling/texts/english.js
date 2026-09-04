
import resumePdf from "../../assets/resume.pdf";

/**
 * Header Component Texts in English
 */
const HEADER_TEXTS = {
    name: "Rupesh Prajapat",
    initials: "RP",
    roleBadge: "Senior Salesforce Developer",
    home: "Home",
    about: "About",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    achievements: "Achievements",
    credentials: "Certifications",
    contact: "Contact",
    resumeButton: "Resume",
};

/**
 * Hero Section Texts
 */
const HOME_TEXTS = {
    profilePicAlt: "Rupesh Prajapat - Senior Salesforce Developer & Certinia Specialist",
    statusBadge: "Available for Senior Salesforce & Certinia Roles",
    greeting: "Hello, I am",
    name: "Rupesh Prajapat",
    title: "Senior Salesforce Developer",
    subtitle: "Certinia (FinancialForce) Specialist",
    summary:
        "5+ years of experience architecting enterprise-scale applications across the Salesforce platform. Deep specialization in Certinia PSA product development, performant LWC/Apex solutions, and high-stakes production delivery for global clients like PwC.",
    resumeLink: resumePdf,
    ctaPrimary: "View Experience",
    ctaSecondary: "Explore Projects",
    ctaResume: "Download CV",
    metrics: [
        { value: "5+", label: "Years Experience", description: "Enterprise Salesforce & PSA" },
        { value: "4x", label: "Salesforce Certified", description: "Agentforce & PD2 Included" },
        { value: "30%", label: "UI Performance Boost", description: "Work Planner Load Time Reduction" },
        { value: "100%", label: "Go-Live Success", description: "CTFO Recognition for PwC Delivery" },
    ],
    quickSkills: [
        "Salesforce LWC",
        "Apex Patterns",
        "Certinia PSA",
        "Bryntum Grid & Scheduler",
        "Lightning Web Security (LWS)",
        "REST/SOAP APIs",
        "Salesforce CPQ",
        "Agentforce",
    ],
};

/**
 * About Me Section Texts
 */
const ABOUT_ME_TEXTS = {
    heading: "About Me",
    subheading: "Architecting performant, resilient, and human-centric enterprise solutions",
    paragraphs: [
        "I'm Rupesh Prajapat, a Senior Salesforce Developer with over 5 years of experience building scalable enterprise-grade applications on the Salesforce platform. My core expertise centers on Certinia (formerly FinancialForce) Professional Services Automation (PSA) product development, where I architect high-performance Lightning Web Components (LWC), robust Apex backends, and complex enterprise integrations.",
        "Currently at Zordial Technologies and previously at Metacube Software, I have spearheaded multi-sprint release planning, diagnosed critical Lightning Web Security (LWS) isolation bottlenecks, and led cross-team technical enablement. One of my proudest career milestones was resolving a production-blocking issue ahead of PwC's go-live deadline, which earned me formal recognition from the CTFO of Certinia.",
        "I hold four Salesforce certifications, including Platform Developer II and Agentforce Specialist. Beyond writing clean code following SOLID principles and Apex Enterprise Patterns (Service, Selector, Domain), I am passionate about mentoring engineers, driving governor limit optimization, and automating CI/CD pipelines.",
    ],
    pillars: [
        {
            icon: "architecture",
            title: "Enterprise Architecture",
            description:
                "Applying Apex Enterprise Patterns (Service, Selector, Domain), SOLID design principles, and multi-tenant governor limit optimizations.",
        },
        {
            icon: "certinia",
            title: "Certinia PSA Mastery",
            description:
                "Deep specialization in PSA Core, Services Estimator, Output Builder, Resource Management, Work Planner, and Billing packages.",
        },
        {
            icon: "performance",
            title: "UI Performance & LWS",
            description:
                "Building ultra-fast LWCs with Bryntum Grid & Scheduler, resolving complex Proxy wrapping bottlenecks in Lightning Web Security.",
        },
        {
            icon: "leadership",
            title: "Leadership & Enablement",
            description:
                "Leading release cycles, conducting rigorous architectural code reviews, and mentoring Graduate Engineer Trainees into productive contributors.",
        },
    ],
};

/**
 * Technical Skills Matrix
 */
const SKILLS_TEXTS = {
    heading: "Technical Skills",
    subheading: "A comprehensive toolkit refined across 5+ years of enterprise engineering",
    categories: [
        {
            id: "salesforce",
            name: "Salesforce Platform",
            skills: [
                { name: "Apex", level: "Expert" },
                { name: "Lightning Web Components (LWC)", level: "Expert" },
                { name: "SOQL & SOSL", level: "Expert" },
                { name: "Triggers & Handler Patterns", level: "Expert" },
                { name: "Batch, Queueable & Schedulable Apex", level: "Expert" },
                { name: "Flows & Approval Processes", level: "Advanced" },
                { name: "Data Architecture & Modeling", level: "Expert" },
                { name: "Sales Cloud & Service Cloud", level: "Advanced" },
                { name: "Salesforce CPQ", level: "Advanced" },
                { name: "Experience Cloud", level: "Intermediate" },
                { name: "Visualforce (Migration to LWC)", level: "Advanced" },
            ],
        },
        {
            id: "certinia",
            name: "Certinia (FinancialForce) PSA",
            skills: [
                { name: "Professional Services Automation (PSA)", level: "Specialist" },
                { name: "PSA Core & Foundation", level: "Specialist" },
                { name: "Work Planner & Resource Management", level: "Specialist" },
                { name: "Services Estimator", level: "Specialist" },
                { name: "Output Builder", level: "Specialist" },
                { name: "PSA Workspace", level: "Specialist" },
                { name: "Billing & Invoicing", level: "Specialist" },
                { name: "Time & Expense Management", level: "Specialist" },
            ],
        },
        {
            id: "integrations",
            name: "Integrations & APIs",
            skills: [
                { name: "REST & SOAP APIs", level: "Expert" },
                { name: "Platform Events & CDC", level: "Advanced" },
                { name: "Salesforce Bulk API & Streaming API", level: "Advanced" },
                { name: "Named Credentials & External Services", level: "Expert" },
                { name: "OAuth 2.0 & JWT Authentication", level: "Advanced" },
                { name: "Event-Driven Architecture", level: "Advanced" },
                { name: "CPQ to NetSuite Integrations", level: "Advanced" },
            ],
        },
        {
            id: "frontend",
            name: "Frontend & UI Engineering",
            skills: [
                { name: "JavaScript (ES6+)", level: "Expert" },
                { name: "Lightning Design System (SLDS)", level: "Expert" },
                { name: "Bryntum Grid & Scheduler", level: "Expert" },
                { name: "Lightning Web Security (LWS) Polyfills", level: "Expert" },
                { name: "HTML5 & Modern CSS3", level: "Expert" },
                { name: "React.js", level: "Advanced" },
                { name: "Node.js", level: "Intermediate" },
                { name: "Jest & LWC Test Utilities", level: "Advanced" },
            ],
        },
        {
            id: "security",
            name: "Security, Governance & Architecture",
            skills: [
                { name: "Profiles, Permission Sets & PSG", level: "Expert" },
                { name: "Custom Permissions & Sharing Rules", level: "Expert" },
                { name: "Role Hierarchy & OWD", level: "Expert" },
                { name: "Field-Level Security (FLS)", level: "Expert" },
                { name: "Governor Limits Optimization", level: "Expert" },
                { name: "Apex Enterprise Patterns (fflib)", level: "Expert" },
                { name: "SOLID Principles & Clean Code", level: "Expert" },
                { name: "Multi-Tenant Architecture", level: "Advanced" },
            ],
        },
        {
            id: "devops",
            name: "DevOps, Tooling & Languages",
            skills: [
                { name: "Git & Bitbucket (Stash)", level: "Advanced" },
                { name: "SFDX & Salesforce CLI", level: "Advanced" },
                { name: "VS Code with Salesforce Extensions", level: "Expert" },
                { name: "Jenkins & Ant Build Automation", level: "Advanced" },
                { name: "JIRA, Confluence & Agile Scrum", level: "Expert" },
                { name: "Postman & Data Loader", level: "Expert" },
                { name: "Languages: Apex, JavaScript, HTML5, CSS3", level: "Expert" },
            ],
        },
    ],
};

/**
 * Work Experience Section Texts
 */
const WORK_EXPERIENCES = [
    {
        company: "Zordial Technologies",
        location: "Jaipur, India",
        role: "Senior Salesforce Developer",
        duration: "July 2024 – Present",
        isCurrent: true,
        projectTitle: "Certinia Implementation",
        responsibilities: [
            "Architecting and delivering end-to-end Certinia onboarding strategies and tailored business process implementations for enterprise clients.",
            "Analyzing and mapping client business processes into Certinia PSA and Services Estimator product capabilities, ensuring high user adoption and seamless workflows.",
            "Designing scalable customization blueprints adhering to Salesforce best practices and multi-tenant governor limits.",
        ],
        tags: ["Certinia PSA", "Services Estimator", "Implementation Architecture", "Salesforce Consulting"],
    },
    {
        company: "Metacube Software Pvt. Ltd.",
        location: "Jaipur, India",
        role: "Senior Software Engineer",
        duration: "April 2024 – Jun 2026",
        isCurrent: false,
        projectTitle: "ContinuousTech & Certinia PSA",
        responsibilities: [
            "Developed core asynchronous REST API integrations between Salesforce CPQ and NetSuite, automating long-running complex billing calculations and eliminating manual reconciliation.",
            "Diagnosed and resolved a critical performance bottleneck in Bryntum Scheduler running under Lightning Web Security (LWS): discovered that LWS Proxy wrappers were intercepting deep object mutations, and eliminated root cause by engineering custom Map and Set polyfills.",
            "Achieved ~30% performance improvement in the Work Planner UI, a flagship Certinia module for global resource scheduling and staffing.",
            "Resolved a production-blocking issue for PwC ahead of their critical go-live deadline, preventing deployment failure and earning formal commendation from the CTFO of Certinia.",
            "Spearheaded end-to-end release planning for multiple PSA product packages across multi-sprint cycles, evaluating architectural trade-offs and ensuring predictable on-time deliveries.",
            "Led cross-team technical enablement and mentored Graduate Engineer Trainees through structured Salesforce development sessions.",
        ],
        tags: ["Certinia PSA", "LWS Security", "Bryntum Scheduler", "Salesforce CPQ", "NetSuite Integration", "Apex Patterns"],
    },
    {
        company: "Metacube Software Pvt. Ltd.",
        location: "Jaipur, India",
        role: "Software Engineer",
        duration: "January 2021 – March 2024",
        isCurrent: false,
        projectTitle: "Certinia PSA Managed Packages",
        responsibilities: [
            "Contributed to core development of PSA Core, Output Builder, Services Estimator, and PSA Workspace managed packages deployed across global professional services verticals.",
            "Led Visualforce-to-LWC migration for multiple critical legacy pages, re-architecting UIs to modern, high-performance Lightning Web Components.",
            "Authored enterprise-grade Apex classes, Triggers, and Batch jobs following Apex Enterprise Patterns (Service, Selector, Domain) with 95%+ unit test coverage.",
            "Built and tuned high-performance LWC components utilizing Bryntum Grid & Scheduler capable of smoothly rendering and editing massive scheduling datasets.",
            "Automated developer deployment cycles by implementing custom Ant build targets inside VS Code, significantly boosting developer iteration speed.",
            "Coached and guided Graduate Engineer Trainees in daily technical coaching, code reviews, and Salesforce platform standards.",
        ],
        tags: ["PSA Core", "Output Builder", "Visualforce-to-LWC", "Bryntum Grid", "Ant Automation", "Test Coverage"],
    },
    {
        company: "Metacube Software Pvt. Ltd.",
        location: "Jaipur, India",
        role: "Graduate Engineer Trainee",
        duration: "November 2020 – December 2020",
        isCurrent: false,
        projectTitle: "Salesforce Intensive Onboarding & Training",
        responsibilities: [
            "Completed an intensive 2-month Salesforce development bootcamp covering Apex, LWC, SOQL, security architecture, and best practices.",
            "Delivered internal development assignments and onboarding tools with immediate promotion into client production projects.",
        ],
        tags: ["Apex Fundamentals", "SOQL", "Security Models", "LWC Basics"],
    },
    {
        company: "Remotasks & Outlier",
        location: "Remote",
        role: "AI Prompt Engineer",
        duration: "October 2023 – January 2024",
        isCurrent: false,
        projectTitle: "LLM Code & Reasoning Optimization",
        responsibilities: [
            "Crafted targeted, nuanced programming and coding prompts to evaluate and optimize large language model code generation capabilities.",
            "Performed data-driven evaluations of AI responses across diverse programming tasks, formulating structured alternatives to improve model accuracy.",
        ],
        tags: ["Prompt Engineering", "LLM Evaluation", "AI Code Generation", "Data Optimization"],
    },
];

const WORK_EXPERIENCE_TEXTS = {
    heading: "Professional Experience",
    subheading: "A proven track record of architecting mission-critical enterprise Salesforce solutions",
    workExperiences: WORK_EXPERIENCES,
};

/**
 * Projects Section Texts
 */
const PROJECTS = [
    {
        id: "salesforce-permissions",
        name: "Salesforce Permission Visualizer",
        tagline: "Unified Object & Field Permission Admin Utility",
        description:
            "A high-impact utility app that solves a major Salesforce administrator pain point: consolidating disparate object-level and field-level permissions across Permission Sets and Profiles into a single, intuitive, high-speed UI.",
        metrics: "Consolidates Profiles + Permission Sets in 1 View",
        technologies: ["Apex", "LWC", "SOQL", "JavaScript (ES6+)", "SLDS"],
        github: "https://github.com/rupesh0/salesforce-permissions",
        featured: true,
        type: "Enterprise Utility",
    },
    {
        id: "shopping-app",
        name: "Shopping App in Salesforce",
        tagline: "Dual Architecture: Visualforce vs. Modern LWC",
        description:
            "A full e-commerce application built on the Salesforce platform twice — first using legacy Visualforce, then completely re-architected into modern Lightning Web Components. Features dynamic product catalog, reactive cart state, and Apex/SOQL order execution.",
        metrics: "Demonstrates Modern UI Migration & Re-architecture",
        technologies: ["LWC", "Visualforce", "Apex", "Node.js", "SOQL"],
        github: "https://github.com/rupesh0/shopping-app",
        featured: true,
        type: "Architecture Showcase",
    },
    {
        id: "portfolio-website",
        name: "Personal Brand Portfolio",
        tagline: "High-Performance Modern Web Portfolio",
        description:
            "A production-ready, mobile-first personal portfolio showcasing enterprise Salesforce architecture, Certinia solutions, and certifications. Built with Vanilla CSS design tokens, glassmorphic themes, and dynamic interactivity.",
        metrics: "100% Responsive & Zero External CSS Dependencies",
        technologies: ["React", "Vanilla CSS", "JavaScript", "GitHub Pages"],
        github: "https://github.com/rupesh0/portfolio-website",
        live: "https://rupesh0.github.io/portfolio-website",
        featured: true,
        type: "Personal Brand",
    },
];

const PROJECTS_TEXTS = {
    heading: "Featured Projects",
    subheading: "Open-source tools, enterprise utilities, and architectural demonstrations",
    projects: PROJECTS,
};

/**
 * Achievements & Recognition Section Texts
 */
const ACHIEVEMENTS = [
    {
        id: "pwc-golive",
        badge: "Executive Commendation",
        title: "PwC Go-Live Critical Fix",
        issuer: "CTFO of Certinia",
        description:
            "Received formal executive recognition from the Chief Technology and Financial Officer (CTFO) of Certinia for resolving a production-blocking issue ahead of PwC's go-live deadline, preventing a high-stakes deployment catastrophe.",
        highlight: "Prevented deployment failure for global client PwC",
        icon: "trophy",
    },
    {
        id: "star-innovator",
        badge: "Company-Wide Award",
        title: "Metacube Star Innovator",
        issuer: "Metacube Software | Q1 2025",
        description:
            "Recognised company-wide for outstanding technical innovation and contribution in optimizing large-scale Certinia PSA components and Lightning Web Security compatibility.",
        highlight: "Awarded for pioneering technical innovation",
        icon: "star",
    },
    {
        id: "hero-in-rank",
        badge: "Excellence Award",
        title: "Metacube Hero in the Rank",
        issuer: "Metacube Software | Q1 2024",
        description:
            "Awarded for exceptional engineering performance, high velocity, and consistent delivery excellence across multi-sprint product package releases.",
        highlight: "Honored for exceptional delivery excellence",
        icon: "award",
    },
];

const ACHIEVEMENTS_TEXTS = {
    heading: "Achievements & Recognition",
    subheading: "Honored by industry executives and peers for high-stakes problem solving and technical leadership",
    achievements: ACHIEVEMENTS,
};

/**
 * Certifications & Education Texts
 */
const CERTIFICATIONS = [
    {
        id: "agentforce",
        name: "Salesforce Agentforce Specialist",
        issuer: "Salesforce",
        year: "2025",
        badgeColor: "#00A1E0",
        link: "https://www.salesforce.com/trailblazer/rprajapat29",
        isNew: true,
        description: "Specialist credential demonstrating expertise in Salesforce Agentforce AI agents, autonomous actions, and generative workflows.",
    },
    {
        id: "pd2",
        name: "Salesforce Platform Developer II (PD2)",
        issuer: "Salesforce",
        year: "2024",
        badgeColor: "#7C3AED",
        link: "https://www.salesforce.com/trailblazer/rprajapat29",
        description: "Advanced Apex programming, complex integration patterns, enterprise data modeling, and performance optimization at scale.",
    },
    {
        id: "jd1",
        name: "Salesforce JavaScript Developer I (JD1)",
        issuer: "Salesforce",
        year: "2023",
        badgeColor: "#F59E0B",
        link: "https://www.salesforce.com/trailblazer/rprajapat29",
        description: "Modern JavaScript (ES6+), asynchronous design patterns, DOM manipulation, and frontend architecture for Lightning Web Components.",
    },
    {
        id: "pd1",
        name: "Salesforce Platform Developer I (PD1)",
        issuer: "Salesforce",
        year: "2021",
        badgeColor: "#10B981",
        link: "https://www.salesforce.com/trailblazer/rprajapat29",
        description: "Foundational mastery of programmatic customization on the Salesforce platform, including Apex triggers, SOQL/SOSL, and basic components.",
    },
    {
        id: "hackerrank-js",
        name: "HackerRank JavaScript (Basic & Intermediate)",
        issuer: "HackerRank",
        badgeColor: "#00EA64",
        link: "https://www.hackerrank.com/profile/rp15498",
        description: "Demonstrated intermediate proficiency in core JavaScript data structures, closures, event loop, and algorithmic problem solving.",
    },
    {
        id: "hackerrank-ps",
        name: "HackerRank Problem Solving (Basic & Intermediate)",
        issuer: "HackerRank",
        badgeColor: "#00EA64",
        link: "https://www.hackerrank.com/profile/rp15498",
        description: "Validated algorithmic reasoning, data structures (stacks, queues, trees), dynamic programming, and computational problem solving.",
    },
    {
        id: "hackerrank-java",
        name: "HackerRank Java (Basic)",
        issuer: "HackerRank",
        badgeColor: "#00EA64",
        link: "https://www.hackerrank.com/profile/rp15498",
        description: "Core object-oriented programming in Java, inheritance, polymorphism, and Java standard library mastery.",
    },
];

const EDUCATIONS = [
    {
        degree: "Bachelor of Technology (B.Tech) — Information Technology",
        institution: "College of Technology and Engineering (CTAE), Udaipur (MPUAT)",
        period: "2016 – 2020",
        score: "CGPA: 7.58",
        highlights: [
            "Specialized in Software Engineering, Algorithms, Database Systems, and Object-Oriented Architecture.",
            "GATE 2020 Qualified: Cleared the prestigious Graduate Aptitude Test in Engineering in the Information Technology stream.",
        ],
    },
];

const CREDENTIAL_TEXTS = {
    heading: "Certifications & Education",
    subheading: "Verified industry credentials and formal academic foundation",
    certificationsHeading: "Salesforce & Technical Certifications",
    educationsHeading: "Academic Education",
    certifications: CERTIFICATIONS,
    educations: EDUCATIONS,
    trailblazerUrl: "https://www.salesforce.com/trailblazer/rprajapat29",
};

/**
 * Contact Section Texts
 */
const CONTACT_TEXTS = {
    heading: "Let's Connect",
    subheading: "Open for senior Salesforce engineering positions, Certinia consulting, and enterprise technical collaborations",
    location: "Jaipur, Rajasthan, India",
    phone: "+91 8005586696",
    rawPhone: "+918005586696",
    email: "rupesh.p9696@gmail.com",
    githubUrl: "https://github.com/rupesh0",
    linkedinUrl: "https://www.linkedin.com/in/rupesh-prajapat/",
    trailblazerUrl: "https://www.salesforce.com/trailblazer/rprajapat29",
    resumeUrl: resumePdf,
    formHeading: "Send a Message",
    formName: "Your Name",
    formEmail: "Your Email Address",
    formSubject: "Subject / Role Opportunity",
    formMessage: "Tell me about your project or opportunity...",
    formSubmit: "Send Message",
    formSuccess: "Thank you! Your message has been prepared.",
    copyEmailToast: "Email copied to clipboard!",
    copyPhoneToast: "Phone number copied to clipboard!",
};

/**
 * Footer Component Texts
 */
const FOOTER_TEXTS = {
    brand: "Rupesh Prajapat",
    tagline: "Senior Salesforce Developer | Certinia PSA Specialist",
    copyright: "© 2026 Rupesh Prajapat. All rights reserved.",
};

export {
    HEADER_TEXTS,
    HOME_TEXTS,
    ABOUT_ME_TEXTS,
    SKILLS_TEXTS,
    WORK_EXPERIENCE_TEXTS,
    PROJECTS_TEXTS,
    ACHIEVEMENTS_TEXTS,
    CREDENTIAL_TEXTS,
    CONTACT_TEXTS,
    FOOTER_TEXTS,
};
