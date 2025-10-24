import "./HomeSection.css";
import rupeshPic from "../assets/images/rupesh.jpg";
import { HOME_TEXTS } from "../textHelper/i18n";

function HomeSection() {
    const {
        profilePicAlt,
        greeting,
        intro1,
        intro2,
        role,
        description,
        technicalSkills,
        skills: SKILLS,
    } = HOME_TEXTS;

    return (
        <section id="home" className="home-container">
            <div className="home-left">
                <img
                    className="profile-pic"
                    src={rupeshPic}
                    alt={profilePicAlt}
                />
            </div>
            <div className="home-right">
                <div className="greeting">{greeting}</div>
                <div className="name">
                    {intro1} <span>{intro2}</span>
                </div>
                <div className="role">{role}</div>
                <p>{description}</p>
                <div className="role">{technicalSkills}</div>
                <div className="skills">
                    {SKILLS.map((skill, index) => (
                        <div className="skill" key={index}>
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HomeSection;
