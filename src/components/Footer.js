import "./Footer.css";
import { FOOTER_TEXTS, CONTACT_TEXTS } from "../dataModeling/i18n";

function Footer() {
    const { brand, tagline, copyright, craftedWith } = FOOTER_TEXTS;
    const { githubUrl, linkedinUrl, trailblazerUrl } = CONTACT_TEXTS;

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <div className="footer-top-row">
                    <div className="footer-brand-box">
                        <span className="footer-brand-name">{brand}</span>
                        <p className="footer-tagline">{tagline}</p>
                        <div className="footer-social-row">
                            <a
                                href={linkedinUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="footer-social-icon-btn"
                                aria-label="LinkedIn"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                                </svg>
                            </a>

                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="footer-social-icon-btn"
                                aria-label="GitHub"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                                </svg>
                            </a>

                            <a
                                href={trailblazerUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="footer-social-icon-btn"
                                aria-label="Trailhead"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer-nav-links">
                        <a href="#home" className="footer-link">Home</a>
                        <a href="#about" className="footer-link">About</a>
                        <a href="#skills" className="footer-link">Skills</a>
                        <a href="#experience" className="footer-link">Experience</a>
                        <a href="#projects" className="footer-link">Projects</a>
                        <a href="#achievements" className="footer-link">Achievements</a>
                        <a href="#credentials" className="footer-link">Certifications</a>
                        <a href="#contact" className="footer-link">Contact</a>
                    </div>
                </div>

                <div className="footer-bottom-row">
                    <div>
                        <span>{copyright}</span> • <span style={{ marginLeft: "4px" }}>{craftedWith}</span>
                    </div>

                    <button className="back-to-top-btn" onClick={scrollToTop}>
                        <span>Back to top</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
