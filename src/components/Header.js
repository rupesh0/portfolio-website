import "./Header.css";
import { HEADER_TEXTS } from "../textHelper/i18n";

function Header() {
    const { name, home, about, work, credential, contact } = HEADER_TEXTS;

    return (
        <header>
            <a class="logo" href="#home">
                <span>{name}</span>
            </a>
            <a
                class="menu-icon"
                id="menuToggle"
                href="javascript:void(0);"
                aria-label="Open menu"
            >
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
            </a>
            <nav class="nav-links">
                <a class="nav-link" href="#home">
                    {home}
                </a>
                <a class="nav-link" href="#about">
                    {about}
                </a>
                <a class="nav-link" href="#work">
                    {work}
                </a>
                <a class="nav-link" href="#credential">
                    {credential}
                </a>
                <a class="nav-link" href="#contact">
                    {contact}
                </a>
            </nav>
        </header>
    );
}

export default Header;
