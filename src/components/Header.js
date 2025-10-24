import { useState } from "react";

import "./Header.css";
import { HEADER_TEXTS } from "../textHelper/i18n";

const LOCAL_STORAGE_BUCKET = "portfolio-website-theme";

function Header() {
    const { name, home, about, work, credential, contact } = HEADER_TEXTS;

    const [menuOpen, setMenuOpen] = useState(false);
    const [theme, setTheme] = useState(() => {
        return (
            localStorage.getItem(LOCAL_STORAGE_BUCKET) ||
            window.matchMedia("(prefers-color-scheme: dark)").matches
        );
    });

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_BUCKET, newTheme);
        document.documentElement.classList.remove(
            "prettier-dark",
            "prettier-light"
        );
        document.documentElement.classList.add(`prettier-${newTheme}`);
    };

    return (
        <header>
            <div className="header-content">
                <a className="logo" href="#home">
                    <span>{name}</span>
                </a>
                <button className="theme-toggle-button" onClick={toggleTheme}>
                    {theme === "dark" ? "🌞" : "🌙"}
                </button>
            </div>
            <button className="menu-icon" id="menuToggle" onClick={toggleMenu}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect y="7" width="32" height="3" rx="1.5" fill="#b366f6" />
                    <rect
                        y="15"
                        width="32"
                        height="3"
                        rx="1.5"
                        fill="#b366f6"
                    />
                    <rect
                        y="23"
                        width="32"
                        height="3"
                        rx="1.5"
                        fill="#b366f6"
                    />
                </svg>
            </button>
            <nav className={menuOpen ? "nav-links show" : "nav-links"}>
                <a className="nav-link" href="#home" onClick={closeMenu}>
                    {home}
                </a>
                <a className="nav-link" href="#about" onClick={closeMenu}>
                    {about}
                </a>
                <a className="nav-link" href="#work" onClick={closeMenu}>
                    {work}
                </a>
                <a className="nav-link" href="#credential" onClick={closeMenu}>
                    {credential}
                </a>
                <a className="nav-link" href="#contact" onClick={closeMenu}>
                    {contact}
                </a>
            </nav>
        </header>
    );
}

export default Header;
