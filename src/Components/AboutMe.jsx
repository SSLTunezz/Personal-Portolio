import {MoonIcon, Sun} from "lucide-react";
import Platform from "../resources/platform.png";
import GithubIcon from "../resources/github.png";
import GmailIcon from "../resources/gmail.png";
export const AboutSection = () => {
    return <section
    id="about"
    className={"py-24 px-4 relative"}>
        {""}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center ">
                About <span className={"text-primary"}>Me</span>
            </h2>

            <p className={"space-y-6"}>
                <span className={"text-1l md:text-2l font-bold tracking-light"}> Hi, I am </span>
                <span className={"text-1l md:text-2l font-bold tracking-light text-primary"}> Naitik Singh, </span>
                <span className={"text-1l md:text-2l font-bold tracking-light"}> Known as </span>
                <span className={"text-1l md:text-2l font-bold tracking-light text-primary"}> SSLTunezz  </span>
                <span className={"text-1l md:text-2l font-bold tracking-light"}> on slack, and as </span>
                <span className={"text-1l md:text-2l font-bold tracking-light text-primary"}> Simply Clix </span>
                <span className={"text-1l md:text-2l font-bold tracking-light"}> on games. I love making tech, such as macropads, robotic arms, and time to time software projects,
                    like the one your looking at right now! </span>
            </p>
            <h2 className={"text-4xl font-bold text-foreground"}> Pop a Hello! </h2>

            <button >
                <a href={"https://google.com/"}>
                <img
                    src={Platform}
                    alt="Logo"
                    className=" h-10 w-10"
                    />
                </a>
            </button>
            <button >
                <a href={"https://github.com/SSLTunezz?tab=repositories/"}>
                    <img
                        src={GithubIcon}
                        alt="Logo-2"
                        className=" h-10 w-10 bg-white"
                    />
                </a>
            </button>
            <button >
                <a href={"mailto:naitiksingh.jsr@gmail.com"}>
                    <img
                        src={GmailIcon}
                        alt="Logo-2"
                        className=" h-10 w-10 "
                    />
                </a>
            </button>




        </div>

    </section>
};