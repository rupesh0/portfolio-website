import { useState } from "react";
import "./SkillsSection.css";
import { SKILLS_TEXTS } from "../dataModeling/i18n";

function SkillsSection() {
    const { heading, subheading, categories } = SKILLS_TEXTS;
    const [activeTab, setActiveTab] = useState("all");

    const getLevelClass = (level) => {
        switch (level?.toLowerCase()) {
            case "expert":
                return "level-expert";
            case "specialist":
                return "level-specialist";
            case "advanced":
                return "level-advanced";
            case "intermediate":
                return "level-intermediate";
            default:
                return "level-expert";
        }
    };

    const getCategoryIcon = (id) => {
        switch (id) {
            case "salesforce":
                return "☁️";
            case "certinia":
                return "⚡";
            case "integrations":
                return "🔌";
            case "frontend":
                return "💻";
            case "security":
                return "🛡️";
            case "devops":
                return "⚙️";
            default:
                return "✨";
        }
    };

    const displayedCategories =
        activeTab === "all"
            ? categories
            : categories.filter((cat) => cat.id === activeTab);

    return (
        <section id="skills" className="skills-section">
            <div className="section-wrapper">
                <div className="section-header">
                    <span className="kicker">Technical Expertise</span>
                    <h2 className="section-title">{heading}</h2>
                    <p className="section-subtitle">{subheading}</p>
                </div>

                {/* Filter Tabs */}
                <div className="skills-tabs" role="tablist">
                    <button
                        className={`skill-tab-btn ${activeTab === "all" ? "active" : ""}`}
                        onClick={() => setActiveTab("all")}
                    >
                        All Categories
                    </button>
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            className={`skill-tab-btn ${activeTab === cat.id ? "active" : ""}`}
                            onClick={() => setActiveTab(cat.id)}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Category Cards Grid */}
                <div className="skills-categories-grid">
                    {displayedCategories.map((category) => (
                        <div key={category.id} className="glass-card skills-category-card">
                            <div className="category-card-header">
                                <h3 className="category-title">
                                    <span className="category-icon">{getCategoryIcon(category.id)}</span>
                                    <span>{category.name}</span>
                                </h3>
                                <span className="skill-count-badge">
                                    {category.skills.length} skills
                                </span>
                            </div>

                            <div className="skills-chips-wrap">
                                {category.skills.map((skill, sIdx) => (
                                    <div key={sIdx} className="skill-chip">
                                        <span className="skill-name">{skill.name}</span>
                                        {skill.level && (
                                            <span className={`skill-level ${getLevelClass(skill.level)}`}>
                                                {skill.level}
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;
