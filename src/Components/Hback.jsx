

export const HackerBackground = () => {


    return (
        <div className="flex min-h-screen bg-background text-foreground overflow-x-hide items-center justify-center"
        id="hacker">
            <div className={"terminal relative "}>
                <div className=" absolute top-2 left-2">
                    <a href={"lolityy"}>
                    <div className={"circle-567"}></div>
                    </a>
                </div>
                <div className=" absolute top-2 left-7">
                    <a href={"Yellow"}>
                    <div className={"circle-569"}></div>
                    </a>
                </div>
                <div className=" absolute top-2 left-12">
                    <div className={"circle-568"}></div>
                </div>

                <div className="  absolute top-10 right-0 inline-block">
                    <p
                        className="animate-typewriter overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5  text-text-hacker font-bold">
                        SSH: Greetings, fellow inquirer. I am Naitik's Terminal, and I know everything about him. From his most useless pycharm programs to
                        fun facts not much people know about
                    </p>

                    <p
                        className="animate-typewriter-delay-1 overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5  text-text-hacker font-bold">
                        get to know more about this person by clicking on the button that intrests you the most. Come back after you click it to go to the other
                        facts. Watch out for easter eggs !
                    </p>

                    <p
                        className=" text-5xl animate-typewriter-delay-2 overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5  text-text-hacker font-bold">
                       Hint: 2 of the Top left 3 buttons lead somewhere...

                    </p>

                </div>
                <a href={"#Geese"}>
                <div className={"  absolute bottom-8 left-10 h-15 w-45 bg-green-500 " }>

                    <h className={" font-bold tracking-light text-black align-center "}>
                        <p className={"text-2xl"}> Geese? </p>
                    </h>


                </div>
                </a>

                <a href={"#Villian"}>
                <div className={" absolute bottom-8 left-150 h-15 w-45 bg-green-500 " }>
                    <h className={" font-bold tracking-light text-black align-center "}>
                        <p className={"text-2xl"}> Villans? </p>
                    </h>

                </div>
                </a>

                <a
               Href={"#Beyblade"}>
                <div className={" absolute bottom-8 left-300 h-15 w-45 bg-green-500 " }>
                    <h className={" font-bold tracking-light text-black align-center "}>
                        <p className={"text-2xl"}> Beyblade </p>
                    </h>

                </div>
                </a>



            </div>

        </div>

    )


}
