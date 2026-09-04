import Header from "../components/Header";
import HomeSection from "../components/HomeSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import WorkSection from "../components/WorkSection";
import ProjectsSection from "../components/ProjectsSection";
import AchievementsSection from "../components/AchievementsSection";
import CredentialSection from "../components/CredentialSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

import "./Home.css";

function Home() {
    return (
        <>
            <Header />
            <main>
                <HomeSection />
                <AboutSection />
                <SkillsSection />
                <WorkSection />
                <ProjectsSection />
                <AchievementsSection />
                <CredentialSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    );
}

export default Home;
