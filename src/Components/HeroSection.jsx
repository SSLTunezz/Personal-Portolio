import {ArrowDownIcon} from "lucide-react";

export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
            >
            <div className="container max-w-4xl ,x-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-light">
                        <span className="opacity-0 animate-fade-in"> Hiya, I'm</span>
                        <span className=" text-primary opacity-0 animate-fade-in-delay-1"> Naitik </span>
                        <span className=" text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Singh </span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        YOYOOYOYOYOYOYOYOYOYOYOYOYYOOU TESTETSTESTETSTESTESTETSTESTESTESTEST hope this works lool
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a className="cosmic-button" href="#projects" >
                            test

                        </a>
                    </div>

                </div>

            </div>

            <div className="absolute bottom-23 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2"> Scrooollly </span>
                <ArrowDownIcon className="h-5 w-5 text-primary" />
            </div>


        </section>)
}