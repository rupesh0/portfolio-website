import "./HomeSection.css";
import rupeshPic from "../assets/images/rupesh.jpg";
import { HOME_TEXTS } from "../dataModeling/i18n";

function HomeSection() {
    const {
        profilePicAlt,
        statusBadge,
        greeting,
        name,
        title,
        subtitle,
        summary,
        resumeLink,
        ctaPrimary,
        ctaSecondary,
        ctaResume,
        metrics,
        quickSkills,
    } = HOME_TEXTS;

    return (
        <section id="home" className="hero-section">
            <div className="hero-glow-bg"></div>

            <div className="section-wrapper">
                <div className="hero-content">
                    {/* Left Column: Introductions & CTAs */}
                    <div className="hero-left">
                        <div className="hero-status-pill">
                            <span className="status-dot"></span>
                            <span>{statusBadge}</span>
                        </div>

                        <div className="hero-greeting">{greeting}</div>

                        <h1 className="hero-name">{name}</h1>

                        <div className="hero-title-badge">
                            <span className="hero-specialty gradient-text">{title}</span>
                            <span className="pill-badge pill-badge-purple">{subtitle}</span>
                        </div>

                        <p className="hero-summary">{summary}</p>

                        <div className="hero-cta-group">
                            <a href="#experience" className="btn btn-primary">
                                <span>{ctaPrimary}</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </a>

                            <a href="#projects" className="btn btn-secondary">
                                <span>{ctaSecondary}</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="3" y1="9" x2="21" y2="9"></line>
                                    <line x1="9" y1="21" x2="9" y2="9"></line>
                                </svg>
                            </a>

                            <a
                                href={resumeLink}
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-ghost"
                                download="Rupesh_Prajapat_Resume.pdf"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                                <span>{ctaResume}</span>
                            </a>
                        </div>

                        {/* Quick Skills Ribbon */}
                        <div className="hero-quick-skills">
                            {quickSkills.map((skill, index) => (
                                <span className="quick-skill-tag" key={index}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Profile with Halo & Floating Badges */}
                    <div className="hero-right">
                        <div className="profile-container">
                            <div className="profile-halo"></div>

                            <div className="profile-image-wrap">
                                <img
                                    className="hero-profile-img"
                                    src={rupeshPic}
                                    alt={profilePicAlt}
                                    loading="eager"
                                />
                            </div>

                            {/* Top Floating Badge */}
                            <div className="floating-badge floating-badge-top">
                                <div className="badge-icon-box badge-icon-blue">
                                    ⚡
                                </div>
                                <div className="badge-info">
                                    <span className="badge-title">Certinia PSA Specialist</span>
                                    <span className="badge-sub">Product Development</span>
                                </div>
                            </div>

                            {/* Bottom Floating Badge */}
                            <div className="floating-badge floating-badge-bottom">
                                <div className="badge-icon-box badge-icon-purple">
                                    🏆
                                </div>
                                <div className="badge-info">
                                    <span className="badge-title">4x Salesforce Certified</span>
                                    <span className="badge-sub">Agentforce & PD2</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hero Metrics Strip */}
                <div className="hero-metrics-strip">
                    {metrics.map((metric, index) => (
                        <div className="glass-card metric-card" key={index}>
                            <span className="metric-value">{metric.value}</span>
                            <span className="metric-label">{metric.label}</span>
                            <span className="metric-desc">{metric.description}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HomeSection;
