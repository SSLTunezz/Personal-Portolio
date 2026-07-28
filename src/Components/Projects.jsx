

export const ProjectSection = () => {
    return (
        <section
            id="projects"
            className={"py-24 px-4 relative"}>
            {""}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center ">
                    Showcase of my
                    <span className={"text-primary"}> projects </span>
                </h2>
            </div>
            <div className={"container mx-auto max-w-10xl flex flex-col flex-row md:flex-row gap-12 justify center items-center"}>
                <div  className={"box bg-card"}>

                    <a href={"https://github.com/SSLTunezz?tab=repositories/"} >Project 1 (yet to be updated) click on me to get sent to the github repo </a>
                 </div>
                <div className={"box bg-card"}>
                    <a href={"https://github.com/SSLTunezz?tab=repositories/"} >Project 2 (yet to be updated) click on me to get sent to the github repo </a>
                </div>
                <div className={"box bg-card"}>
                    <a href={"https://github.com/SSLTunezz?tab=repositories/"} >Project 3 (yet to be updated) click on me to get sent to the github repo </a>
                </div>
                <div className={"box bg-card"}>
                    <a href={"https://github.com/SSLTunezz?tab=repositories/"} >Project 4 (yet to be updated) click on me to get sent to the github repo </a>
                </div>
            </div>
            <div className="container mx-auto max-w-5xl">
                <p className={" text-xl font-bold text-center text-center text-center"}>
                    These are some of my highlighted projects I have worked on, I have a good mix of hardware and software and I strongly believe they go hand in hand
                    for engineering. Personally I prefer hardware products more because I can freely express the various ideas that pop up in my mind, and see it in real life.
                    I also like to improve my software skills time to time, the thing I like about software is you see your result almost immediately and feels perfect when
                    you just want to sit down and casually make something. I haven't dipped my hands into the world of "backend" coding which is something I plan to do in the future!
                </p>
            </div>
        </section>
    )
}