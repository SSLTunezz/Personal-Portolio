import {HackerBackground} from "@/Components/Hback.jsx";
import {Geese} from "@/Components/Geese.jsx";
import {VillianSection} from "@/Components/Villans.jsx";
import {BeybladeSection} from "../Components/Beyblade.jsx";
import {SecretSection} from "@/Components/Secret.jsx";


export const Hacker = () => {
    return (
     <div className="min-h-screen bg-background text-foreground overflow-x-hidden">


        {/* Background Effects */}
         <HackerBackground />
        {/* Main Content */}
        <main>
            <VillianSection />

            <Geese />

            <BeybladeSection />

            <SecretSection />

        </main>


        {/* Footer*/}
    </div>);

};