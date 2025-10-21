import "./HomeSection.css";
import rupeshPic from "../assets/images/rupesh.jpg";
import { SKILLS } from "../textHelper/constants";

function HomeSection() {
    return (
        <section id="home" class="home-container">
            <div class="home-left">
                <img
                    class="profile-pic"
                    src={rupeshPic}
                    alt="Rupesh Prajapat Pic."
                />
            </div>
            <div class="home-right">
                <div class="greeting">HI THERE!</div>
                <div class="name">
                    I'M <span>RUPESH</span>
                </div>
                <div class="role">
                    Senior Software Engineer / Salesforce Developer / PSA
                    Consultant
                </div>
                <p>
                    I’m a Salesforce Developer and Full-Stack Engineer
                    passionate about building scalable applications and seamless
                    user experiences.
                </p>
                <div class="role">Technical Skills</div>
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
