import { useState, useEffect } from "react";
import "./Header.css";
import rupeshLogo from "../assets/images/rupesh_logo.png";
import { HEADER_TEXTS, HOME_TEXTS } from "../dataModeling/i18n";

const THEME_KEY = "rupesh-portfolio-theme";

function Header() {
    const {
        home,
        about,
        skills,
        experience,
        projects,
        achievements,
        credentials,
        contact,
        resumeButton,
    } = HEADER_TEXTS;


    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [theme, setTheme] = useState(() => {
        try {
            const savedTheme = localStorage.getItem(THEME_KEY);
            if (savedTheme) {
                document.documentElement.setAttribute("data-theme", savedTheme);
                return savedTheme;
            }
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            const initial = prefersDark ? "dark" : "light";
            document.documentElement.setAttribute("data-theme", initial);
            return initial;
        } catch (e) {
            return "dark";
        }
    });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);

            // Determine active section
            const sections = [
                "home",
                "about",
                "skills",
                "experience",
                "projects",
                "achievements",
                "credentials",
                "contact",
            ];

            const scrollPosition = window.scrollY + 120;

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const top = element.offsetTop;
                    const height = element.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        try {
            localStorage.setItem(THEME_KEY, newTheme);
            document.documentElement.setAttribute("data-theme", newTheme);
        } catch (e) {
            // handle private mode error
        }
    };

    const handleNavClick = (sectionId) => {
        setMobileMenuOpen(false);
        setActiveSection(sectionId);
    };

    const navItems = [
        { id: "home", label: home },
        { id: "about", label: about },
        { id: "skills", label: skills },
        { id: "experience", label: experience },
        { id: "projects", label: projects },
        { id: "achievements", label: achievements },
        { id: "credentials", label: credentials },
        { id: "contact", label: contact },
    ];

    return (
        <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
            <div className="header-inner">
                {/* Brand Logo Image */}
                <a href="#home" className="brand-logo" onClick={() => handleNavClick("home")} aria-label="Rupesh Prajapat - Home">
                    <img
                        src={rupeshLogo}
                        alt="Rupesh"
                        className="brand-logo-img"
                    />
                </a>


                {/* Desktop Navigation */}
                <nav className="nav-desktop" aria-label="Main Navigation">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                            onClick={() => handleNavClick(item.id)}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Header Actions */}
                <div className="header-actions">
                    {/* Theme Toggle Button */}
                    <button
                        className="theme-toggle-btn"
                        onClick={toggleTheme}
                        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                        title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                    >
                        {theme === "dark" ? (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5"></circle>
                                <line x1="12" y1="1" x2="12" y2="3"></line>
                                <line x1="12" y1="21" x2="12" y2="23"></line>
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                <line x1="1" y1="12" x2="3" y2="12"></line>
                                <line x1="21" y1="12" x2="23" y2="12"></line>
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                            </svg>
                        ) : (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                        )}
                    </button>

                    {/* Resume CTA */}
                    <a
                        href={HOME_TEXTS.resumeLink}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary nav-resume-btn"
                        download="Rupesh_Prajapat_Resume.pdf"
                    >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        <span>{resumeButton}</span>
                    </a>

                    {/* Mobile Hamburger Toggle */}
                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle Navigation Menu"
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            <div className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
                {navItems.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="mobile-nav-link"
                        onClick={() => handleNavClick(item.id)}
                    >
                        <span>{item.label}</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </a>
                ))}
            </div>
        </header>
    );
}

export default Header;
