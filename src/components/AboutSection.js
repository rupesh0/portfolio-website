import "./AboutSection.css";
import { ABOUT_ME } from "../textHelper/constants";

function AboutSection() {
    return (
        <section id="about" class="about-container">
            <h2>About Me</h2>
            <div class="about-me-container">
                {ABOUT_ME.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </section>
    );
}

export default AboutSection;
