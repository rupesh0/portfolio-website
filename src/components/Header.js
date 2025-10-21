import "./Header.css";

function Header() {
    return (
        <header>
            <a class="logo" href="#home">
                <span>RUPESH</span>
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
                    Home
                </a>
                <a class="nav-link" href="#about">
                    About
                </a>
                <a class="nav-link" href="#work">
                    Work
                </a>
                <a class="nav-link" href="#credential">
                    Credential
                </a>
                <a class="nav-link" href="#contact">
                    Contact
                </a>
            </nav>
        </header>
    );
}

export default Header;
