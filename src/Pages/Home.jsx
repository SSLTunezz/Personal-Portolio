import {ThemeToggle} from "@/Components/ThemeToggle.jsx";
import {StarBackground} from "@/Components/StarBackground.jsx";
import {Navbar} from "@/Components/Navbar.jsx";
import { HeroSection} from "@/Components/HeroSection.jsx";
import { AboutSection} from "@/Components/AboutMe.jsx";
import { ProjectSection} from "@/Components/Projects.jsx";

export const Home = () => {

    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Theme Toggle */}
        <ThemeToggle />
        {/* Background Effects */}
        <StarBackground />
        {/* Navbar */}
        <Navbar />
        {/* Main Content */}
        <main>
            <HeroSection />
            <AboutSection />
            <ProjectSection />
        </main>

        {/* Footer*/}
    </div>;
};