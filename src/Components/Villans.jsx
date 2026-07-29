

export const VillianSection = () => {
    return (
        <section
            id="Villian"
            className={"py-24 px-4 relative"}
        >
            <div className="flex min-h-screen bg-background text-foreground overflow-x-hide items-center justify-center">
                <div className={"terminal relative "}>
                    <div className=" absolute top-2 left-2">
                        <div className={"circle-567"}></div>
                    </div>
                    <div className=" absolute top-2 left-7">
                        <div className={"circle-569"}></div>
                    </div>
                    <div className=" absolute top-2 left-12">
                        <div className={"circle-568"}></div>
                    </div>
                    <div className=" items-center justify-center absolute top-50 right-0 inline-block">
                        <header className={"text-5xl text-white font-bold"}> Movies in general </header>
                        <p
                            className="  px-75 max-w-4/5 overflow-hidden  pr-5  text-text-hacker font-bold">
                            <span className={" text-white"}>
                                For some strange reason Naitik has never liked the main charecter of any show, additionally he
                                normally sides with the villian unless it's spiderman. Naitik also preferes the main charecter's
                                friend over the main charecter. Example, Kai over Lloyd. Zoro over Luffy. Sukuna over Gojo (ik Gojo
                                isn't the main charecter offically) etc...

                                I'm not sure how this piece of knowledge will ever benefit you but eeh. Information is Information.
                                /cant argue with that.
                            </span>



                        </p>
                    </div>
                    <div className={"  absolute bottom-8 left-10 h-15 w-45 bg-green-500 " }>
                        <a href={"#hacker"}>
                            <h className={" font-bold tracking-light text-black align-center "}>
                                <p className={"text-2xl"}> Go back to Main terminal </p>
                            </h>
                        </a>

                    </div>

                    <div className={"  absolute bottom-8 right-10 h-15 w-45 bg-green-500 " }>
                        <a href={"#secret"}>
                            <h className={" font-bold tracking-light text-black align-center "}>
                                <p className={"text-2xl"}> Continue Ahead </p>
                            </h>
                        </a>
                    </div>

                </div>

            </div>
        </section>


    )
}
