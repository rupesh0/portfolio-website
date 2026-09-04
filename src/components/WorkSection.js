import "./WorkSection.css";
import { WORK_EXPERIENCE_TEXTS } from "../dataModeling/i18n";

function WorkSection() {
    const { heading, subheading, workExperiences } = WORK_EXPERIENCE_TEXTS;

    return (
        <section id="experience" className="experience-section">
            <div className="section-wrapper">
                <div className="section-header">
                    <span className="kicker">Career Trajectory</span>
                    <h2 className="section-title">{heading}</h2>
                    <p className="section-subtitle">{subheading}</p>
                </div>

                <div className="timeline-container">
                    {workExperiences.map((exp, index) => (
                        <div key={index} className="timeline-item">
                            {/* Dot on track */}
                            <div className={`timeline-dot ${exp.isCurrent ? "current" : ""}`}>
                                <div className="timeline-dot-inner"></div>
                            </div>

                            {/* Card Content */}
                            <div className="glass-card timeline-card">
                                <div className="timeline-header">
                                    <div className="timeline-role-info">
                                        <h3 className="timeline-role">{exp.role}</h3>
                                        <div className="timeline-company-row">
                                            <span className="timeline-company">{exp.company}</span>
                                            <span className="timeline-location">• {exp.location}</span>
                                        </div>
                                    </div>

                                    <div className="timeline-meta-box">
                                        <span className="timeline-duration">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                                <line x1="3" y1="10" x2="21" y2="10"></line>
                                            </svg>
                                            <span>{exp.duration}</span>
                                        </span>

                                        {exp.projectTitle && (
                                            <span className="timeline-project-badge">
                                                {exp.projectTitle}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Responsibilities & Accomplishments */}
                                <ul className="timeline-responsibilities">
                                    {exp.responsibilities.map((resp, rIdx) => (
                                        <li key={rIdx} className="timeline-bullet-item">
                                            <svg className="bullet-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                            <span>{resp}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Role Tech Tags */}
                                {exp.tags && (
                                    <div className="timeline-tags-wrap">
                                        {exp.tags.map((tag, tIdx) => (
                                            <span key={tIdx} className="timeline-tag">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WorkSection;
