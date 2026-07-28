

export const SkillsSection = () =>
{
    return (
        <section id="skills"
        className={"container mx-auto max-w-5xl"}>
            <h2 className="text-4xl md:text-6xl font-bold tracking-light  " >
                <span className={"text-primary"}> Skills </span>
                Distribution
            </h2>
            <p className="text-lg font-bold tracking-light  " >
                Skill cards are overused and a bit boring, instead, here is a representation of my skill distribution.
            </p>

            <progress max={"100"} value={"60"} data-label={""} className={" container  bg-primary-foreground"}>
            </progress>
            <p> I would say my skills are split 60:40 with hardware and software, I am still trying to learn software.</p>

        </section>
    )
}