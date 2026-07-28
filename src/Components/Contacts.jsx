import Platform from "@/Resources/platform.png";
import GithubIcon from "@/Resources/github.png";
import GmailIcon from "@/Resources/gmail.png";
import Handshake from "../Resources/handshake.png";


export const ContactSection = () => {
    return (
        <section className={"container mx-auto max-w-10xl"}
        section id="contact">

            <h2 className="text-5xl font-bold tracking-light  " >
                Contact me
            </h2>
            <p> I'll typically respond within a day or two, for partnerships, sponsors etc click the hand icon</p>
            <div className="flex flex-wrap items-center justify-center  space-x-40">
            <button >
                <a href={"https://google.com/"}>
                    <img
                        src={Platform}
                        alt="Logo"
                        className=" h-50 w-50"
                    />
                </a>
            </button>
            <button >
                <a href={"https://github.com/SSLTunezz?tab=repositories/"}>
                    <img
                        src={GithubIcon}
                        alt="Logo-2"
                        className=" h-50 w-50 bg-white"
                    />
                </a>
            </button>
            <button >
                <a href={"mailto:naitiksingh.jsr@gmail.com"}>
                    <img
                        src={GmailIcon}
                        alt="Logo-2"
                        className=" h-50 w-50 "
                    />
                </a>
            </button>

                <button >
                    <a href={"mailto:28tunezz@gmail.com"}>
                        <img
                            src={Handshake}
                            alt="Logo-2"
                            className=" h-50 w-50 "
                        />
                    </a>
                </button>
            </div>

        </section>
    )
}