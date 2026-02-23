'use client'
import SkillCard from './SkillCard'
import { skills } from '../data/skillsData'


export default function SkillsSection() {


    return (
        <section id='skills' className="py-16 px-4 bg-[var(--color-latte)] text-[var(--foreground)]">
            <h2 className="text-3xl font-semibold mb-10 text-center text-[var(--color-accent)]">Tech Stack</h2>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
                {skills.map((group) => (
                    <div key={group.id}>
                        <h3 className="text-xl font-semibold mb-4 text-[var(--color-accent)] ">{group.category}</h3>
                        <div className="grid grid-cols-2 gap-4 ">
                            {group.items.map((skill) => (
                                <SkillCard key={skill.id} skill={skill} />

                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
