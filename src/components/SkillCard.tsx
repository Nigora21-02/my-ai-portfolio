'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Skill} from '../data/skillsData'

interface SkillCardProps {
    skill: Skill
}

export default function SkillCard({ skill }: SkillCardProps) {
    const [isHovered, setIsHovered] = useState(false)
    const Icon = skill.icon

    return (
        <motion.div role='listitem'
            whileHover={{ scale: 1.05 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex flex-col items-center text-center p-3 rounded-xl bg-white shadow-md transition"
        >
            <Icon className="text-4xl mb-2 text-[var(--primary)]" />
            <p className="font-medium">{skill.name}</p>

            {isHovered && (
                <p className="text-sm mt-1 text-[var(--color-hover)]">
                    {skill.desc}
                </p>
            )}
        </motion.div>
    )
}
