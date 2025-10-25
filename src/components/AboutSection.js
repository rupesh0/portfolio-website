import "./AboutSection.css";
import { ABOUT_ME_TEXTS } from "../dataModeling/i18n";

function AboutSection() {
    const { aboutMeHeading, aboutMeParagraphs: ABOUT_ME } = ABOUT_ME_TEXTS;
    return (
        <section id="about" className="about-container">
            <h2>{aboutMeHeading}</h2>
            <div className="about-me-container">
                {ABOUT_ME.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </section>
    );
}

export default AboutSection;
