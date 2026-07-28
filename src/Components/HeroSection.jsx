import {ArrowDownIcon} from "lucide-react";

export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col items-center justify-center px-4"
            >
            <div className=" relative container max-w-4xl mx-auto text-center z-10">
                <p className="space-y-6 ">
                     <h1 className="text-4xl md:text-6xl font-bold tracking-light  ">
                        <span className={"  text-foreground"} > Hey I'm </span>
                        <span className="  text-primary animate-pulse-1" > Naitik Singh </span>

                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        A student who loves to innovate and create. He also loves milkshakes
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a className="cosmic-button" href="hacker" >
                            View my Maker Portfolio

                        </a>
                    </div>

                </p>

            </div>

            <div className="absolute bottom-23 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2"> Scroll Down </span>
                <ArrowDownIcon className="h-5 w-5 text-primary" />
            </div>


        </section>)
}