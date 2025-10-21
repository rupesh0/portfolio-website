import "./HomeSection.css";
import rupeshPic from "../assets/images/rupesh.jpg";

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
                    <div class="skill">Salesforce</div>
                    <div class="skill">Lightning Web Components</div>
                    <div class="skill">Bryntum Grid</div>
                    <div class="skill">Bryntum Scheduler</div>
                    <div class="skill">Apex</div>
                    <div class="skill">SOQL</div>
                    <div class="skill">SOSL</div>
                    <div class="skill">HTML</div>
                    <div class="skill">CSS</div>
                    <div class="skill">JavaScript</div>
                    <div class="skill">Jest</div>
                </div>
            </div>
        </section>
    );
}
export default HomeSection;
