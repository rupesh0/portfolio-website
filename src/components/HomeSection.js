import "./HomeSection.css";
import rupeshPic from "../assets/images/rupesh.jpg";
import { HOME_TEXTS } from "../textHelper/english";

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
        <section id="home" class="home-container">
            <div class="home-left">
                <img class="profile-pic" src={rupeshPic} alt={profilePicAlt} />
            </div>
            <div class="home-right">
                <div class="greeting">{greeting}</div>
                <div class="name">
                    {intro1}
                    <span>{intro2}</span>
                </div>
                <div class="role">{role}</div>
                <p>{description}</p>
                <div class="role">{technicalSkills}</div>
                <div class="skills">
                    {SKILLS.map((skill, index) => (
                        <div class="skill" key={index}>
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HomeSection;
