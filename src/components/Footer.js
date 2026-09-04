import "./Footer.css";
import { FOOTER_TEXTS } from "../dataModeling/i18n";

function Footer() {
    const { copyright, tagline } = FOOTER_TEXTS;

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <div className="footer-content">
                    <span className="footer-copyright">{copyright}</span>
                    {tagline && (
                        <>
                            <span className="footer-divider">•</span>
                            <span className="footer-tagline">{tagline}</span>
                        </>
                    )}
                </div>

                <button className="back-to-top-btn" onClick={scrollToTop} aria-label="Back to top">
                    <span>Back to top</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                </button>
            </div>
        </footer>
    );
}

export default Footer;
