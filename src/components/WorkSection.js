import "./WorkSection.css";
import { WORK_EXPERIENCE_TEXTS } from "../textHelper/i18n";

function WorkSection() {
    const { workExperienceHeading, workExperiences: WORK_EXPERIENCES } =
        WORK_EXPERIENCE_TEXTS;
    return (
        <section id="work">
            <h2>{workExperienceHeading}</h2>
            <div className="experience-container">
                {WORK_EXPERIENCES.map((experience, index) => (
                    <div className="experience-item" key={index}>
                        <div className="experience-details">
                            <div className="experience-company-post">
                                <h3>{experience.company}</h3>
                                <h4>{experience.role}</h4>
                            </div>
                            <div className="experience-duration">
                                <svg
                                    className="work-svg"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    ></path>
                                </svg>
                                <span>{experience.duration}</span>
                            </div>
                        </div>
                        <ul className="experience-responsibility-list">
                            {experience.responsibilities.map(
                                (responsibility, idx) => (
                                    <li key={idx}>
                                        <span>
                                            <svg
                                                className="work-svg"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                ></path>
                                            </svg>
                                        </span>
                                        <span>{responsibility}</span>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default WorkSection;
