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
                    like the one your looking at right now! I attend a </span>

                <span className={"text-1l md:text-2l font-bold tracking-light text-primary"}>   International School </span>

                <span className={"text-1l md:text-2l font-bold tracking-light"}>   that focuses on the </span>

                <span className={"text-1l md:text-2l font-bold tracking-light text-primary"}>   IB curriculum </span>

                <span className={"text-1l md:text-2l font-bold tracking-light"}>   .My favourite sport to play is </span>

                <span className={"text-1l md:text-2l font-bold tracking-light text-primary"}>    table tennis, </span>
                <span className={"text-1l md:text-2l font-bold tracking-light"}>
                    I train at
                    a club, have fun with friends, at play various competitions and tournements. I also enjoy playing

                    football

                    with my friends. Additionally Im in a
                    </span>

                <span className={"text-1l md:text-2l font-bold tracking-light text-primary"}>  robotics </span>
                <span className={"text-1l md:text-2l font-bold tracking-light"}>
                    team called "Ghost"
                    , we do FRC and just recently joined FTC too (in ftc we are Ghosttt!). </span>
            </p>
            <h2 className={"text-4xl font-bold text-foreground"}> Explore more </h2>

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