import "./App.css";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import ContactMain from "./components/contactMeSection/ContactMain";
import FloatingBlobs from "./components/FloatingBlobs";
import FooterMain from "./components/footer/FooterMain";
import HeroMain from "./components/heroSection/HeroMain.jsx";
import NavbarMain from "./components/navbar/NavbarMain";
import ProjectsMain from "./components/projectSection/ProjectsMain";
import SkillsMain from "./components/skillsSection/SkillsMain";

function App() {
  return (
    <main className="bg-gradient-to-tl from-[#1A1A2E] via-[#16213E] to-[#0F3460] w-screen min-h-screen overflow-x-hidden scroll-smooth">
      <FloatingBlobs className="pointer-events-none" />
      <NavbarMain />
      <HeroMain />
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent mt-36"></div>
      <AboutMeMain />
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent  mb-5"></div>
      <SkillsMain/>
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
      <ProjectsMain/>
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
      <ContactMain/>
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent mb-10"></div>
      <FooterMain/>
    </main>
  );
}

export default App;
