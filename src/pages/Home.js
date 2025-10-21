import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import CredentialSection from "../components/CredentialSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeSection from "../components/HomeSection";
import WorkSection from "../components/WorkSection";

function Home() {
    return (
        <>
            <Header />
            <main style={{ paddingTop: "90px" }}>
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
