import "./AchievementsSection.css";
import { ACHIEVEMENTS_TEXTS } from "../dataModeling/i18n";

function AchievementsSection() {
    const { heading, subheading, achievements } = ACHIEVEMENTS_TEXTS;

    const renderIcon = (type) => {
        switch (type) {
            case "trophy":
                return (
                    <div className="achievement-icon-box icon-trophy">
                        🏆
                    </div>
                );
            case "star":
                return (
                    <div className="achievement-icon-box icon-star">
                        ⭐
                    </div>
                );
            case "award":
                return (
                    <div className="achievement-icon-box icon-award">
                        🎖️
                    </div>
                );
            default:
                return (
                    <div className="achievement-icon-box icon-star">
                        ✨
                    </div>
                );
        }
    };

    const getBadgeClass = (badge) => {
        if (badge.toLowerCase().includes("executive")) return "badge-gold";
        if (badge.toLowerCase().includes("innovator")) return "badge-blue";
        return "badge-purple";
    };

    return (
        <section id="achievements" className="achievements-section">
            <div className="section-wrapper">
                <div className="section-header">
                    <span className="kicker">Honors & Impact</span>
                    <h2 className="section-title">{heading}</h2>
                    <p className="section-subtitle">{subheading}</p>
                </div>

                <div className="achievements-grid">
                    {achievements.map((item) => (
                        <div
                            key={item.id}
                            className={`glass-card achievement-card ${
                                item.id === "pwc-golive" ? "highlight-card" : ""
                            }`}
                        >
                            <div className="achievement-card-header">
                                {renderIcon(item.icon)}
                                <span className={`achievement-badge ${getBadgeClass(item.badge)}`}>
                                    {item.badge}
                                </span>
                            </div>

                            <h3 className="achievement-title">{item.title}</h3>
                            <div className="achievement-issuer">{item.issuer}</div>
                            <p className="achievement-desc">{item.description}</p>

                            {item.highlight && (
                                <div className="achievement-highlight-pill">
                                    ✓ {item.highlight}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AchievementsSection;
