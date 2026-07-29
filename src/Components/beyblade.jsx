

export const BeybladeSection = () => {
    return (
        <section
            id="Beyblade"
            className={"py-24 px-4 relative"} >

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
                    <header className={"text-5xl text-red-700 font-bold"}> Beys </header>
                    <p
                        className="  px-75 max-w-4/5 overflow-hidden  pr-5  text-teal-800 font-bold">
                        <span className={" text-fuchsia-600"}> Beyblades are cool. </span>

                        As we know, there was a massive beyblade spike in 2020s time. Peak times ngl. Naitik LOVED beybaldes
                        and him and his friend used to play so much and watch beyblade alot. Infact at that time Naitik
                        truly belived he could get the "connection" he needed from his beyblade and do something legandary (he still belives).
                        In moments like these him and his friend would scream something hoping it awakens something in their
                        Beys. While this may look silly, looking back those were really fun times.

                        Heres one time it nearly went wrong.

                        *Young Naitik wanted to make his own Beyblade, and he didn't know what 3d printing was, hence like
                        any little boy would do, he searched up on youtube* Naitik got this one tutorial that involved taking a plastic cup
                        squashing it, cutting it up to a bey shape, and putting it in the microwave. Naitik was about to do this
                        but his friend didn't feel like it. Thank Goodness for that.


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
