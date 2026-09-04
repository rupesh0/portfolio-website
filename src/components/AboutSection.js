import "./AboutSection.css";
import { ABOUT_ME_TEXTS } from "../dataModeling/i18n";

function AboutSection() {
    const { heading, subheading, paragraphs, pillars } = ABOUT_ME_TEXTS;

    const renderIcon = (type) => {
        switch (type) {
            case "architecture":
                return (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                        <polyline points="2 17 12 22 22 17"></polyline>
                        <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                );
            case "certinia":
                return (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                );
            case "performance":
                return (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                    </svg>
                );
            case "leadership":
                return (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                );
            default:
                return (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                );
        }
    };

    return (
        <section id="about" className="about-section">
            <div className="section-wrapper">
                <div className="section-header">
                    <span className="kicker">Background & Approach</span>
                    <h2 className="section-title">{heading}</h2>
                    <p className="section-subtitle">{subheading}</p>
                </div>

                <div className="about-grid">
                    {/* Left Column: Narrative */}
                    <div className="about-text-content">
                        {paragraphs.map((p, idx) => (
                            <p key={idx} className="about-paragraph">
                                {p}
                            </p>
                        ))}

                        <div className="about-highlight-box">
                            <strong>Key Career Milestone:</strong> Resolved a high-stakes production-blocking issue ahead of PwC's go-live, earning formal executive commendation from the CTFO of Certinia.
                        </div>
                    </div>

                    {/* Right Column: 4 Core Engineering Pillars */}
                    <div className="about-pillars-grid">
                        {pillars.map((pillar, idx) => (
                            <div key={idx} className="glass-card pillar-card">
                                <div className="pillar-icon-box">
                                    {renderIcon(pillar.icon)}
                                </div>
                                <h3 className="pillar-title">{pillar.title}</h3>
                                <p className="pillar-desc">{pillar.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
