import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import CredentialSection from "../components/CredentialSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeSection from "../components/HomeSection";
import WorkSection from "../components/WorkSection";

import "./Home.css";

function Home() {
    return (
        <>
            <Header />
            <main>
                <HomeSection />
                <AboutSection />
                <WorkSection />
                <CredentialSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    );
}

export default Home;
