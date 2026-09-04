import "./CredentialSection.css";
import { CREDENTIAL_TEXTS } from "../dataModeling/i18n";

function CredentialSection() {
    const {
        heading,
        subheading,
        certificationsHeading,
        educationsHeading,
        certifications,
        educations,
        trailblazerUrl,
    } = CREDENTIAL_TEXTS;

    const getCertIcon = (id) => {
        if (id.includes("agentforce")) return "🤖";
        if (id.includes("pd2")) return "⚡";
        if (id.includes("jd1")) return "📜";
        if (id.includes("pd1")) return "☁️";
        return "💻";
    };

    return (
        <section id="credentials" className="credentials-section">
            <div className="section-wrapper">
                <div className="section-header">
                    <h2 className="section-title">{heading}</h2>
                    <p className="section-subtitle">{subheading}</p>
                </div>


                {/* Subheading: Certifications */}
                <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                    <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--text-primary)" }}>
                        {certificationsHeading}
                    </h3>
                </div>

                <div className="certifications-subgrid">
                    {certifications.map((cert) => (
                        <div key={cert.id} className="glass-card cert-card">
                            <div>
                                <div className="cert-header">
                                    <div className="cert-badge-icon">
                                        {getCertIcon(cert.id)}
                                    </div>
                                    <div style={{ display: "flex", gap: "0.5rem" }}>
                                        {cert.isNew && (
                                            <span className="pill-badge pill-badge-emerald">
                                                New
                                            </span>
                                        )}
                                        {cert.year && (
                                            <span className="cert-meta-tag">{cert.year}</span>
                                        )}
                                    </div>
                                </div>

                                <div style={{ marginTop: "1rem" }}>
                                    <h4 className="cert-name">{cert.name}</h4>
                                    <div className="cert-issuer-row">
                                        <span>Issued by {cert.issuer}</span>
                                    </div>
                                </div>

                                <p className="cert-desc" style={{ marginTop: "0.75rem" }}>
                                    {cert.description}
                                </p>
                            </div>

                            <div className="cert-footer-links">
                                {cert.link && (
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="cert-verify-btn"
                                    >
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                        <span>{cert.link.endsWith(".pdf") ? "View Certificate (PDF)" : "Verify Credential"}</span>
                                    </a>
                                )}

                                {cert.verifiedUrl && (
                                    <a
                                        href={cert.verifiedUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="cert-verify-btn"
                                        style={{ background: "transparent", borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }}
                                    >
                                        <span>Trailhead Profile</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Subheading: Academic Education */}
                <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                    <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--text-primary)" }}>
                        {educationsHeading}
                    </h3>
                </div>

                <div className="education-container">
                    {educations.map((edu, idx) => (
                        <div key={idx} className="glass-card education-card">
                            <div className="edu-card-header">
                                <div className="edu-title-box">
                                    <h4 className="edu-degree">{edu.degree}</h4>
                                    <span className="edu-institution">{edu.institution}</span>
                                </div>
                                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                                    <span className="pill-badge pill-badge-purple">{edu.score}</span>
                                    <span className="edu-period-badge">{edu.period}</span>
                                </div>
                            </div>

                            <ul className="edu-highlights-list">
                                {edu.highlights.map((item, hIdx) => (
                                    <li key={hIdx} className="edu-highlight-item">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent-blue)", flexShrink: 0, marginTop: "3px" }}>
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Trailblazer Banner */}
                <div className="trailblazer-banner">
                    <div className="trailblazer-info">
                        <h4 className="trailblazer-title">Official Salesforce Trailblazer Profile</h4>
                        <p className="trailblazer-sub">
                            View all badges, superbadges, rank, and verified Salesforce credentials on Trailhead.
                        </p>
                    </div>
                    <a
                        href={trailblazerUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary"
                    >
                        <span>View Trailblazer Profile</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default CredentialSection;
