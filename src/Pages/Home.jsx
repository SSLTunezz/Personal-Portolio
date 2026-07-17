import {ThemeToggle} from "@/Components/ThemeToggle.jsx";
import {StarBackground} from "@/Components/StarBackground.jsx";
import {Navbar} from "@/Components/Navbar.jsx";

export const Home = () => {

    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Theme Toggle */}
        <ThemeToggle />
        {/* Background Effects */}
        <StarBackground />
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}

        {/* Footer*/}
    </div>;
};