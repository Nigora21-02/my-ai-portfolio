import { IconType } from 'react-icons'
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaVuejs, FaGitAlt, FaUserAstronaut } from 'react-icons/fa'
import { FiBell, FiLayers, FiShield, FiVolume2 } from 'react-icons/fi'
import { SiBlender, SiExpress, SiFigma, SiFirebase, SiJavascript, SiMongodb, SiNextdotjs, SiOpenai, SiRedux, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { TbDatabase, TbApi, TbCube } from 'react-icons/tb'


export interface Skill {
    id: string
    name: string
    icon: IconType
    desc: string
}

export interface SkillCategory {
    id: string
    category: string
    items: Skill[]
}

export const skills: SkillCategory[] = [
    {
        id: 'frontend',
        category: 'Frontend',
        items: [
            { id: 'react', name: 'React', icon: FaReact, desc: 'Building reusable component-driven architectures using hooks and context' },
            { id: 'nextjs', name: 'Next.js', icon: SiNextdotjs, desc: 'Server-side rendering, SEO optimization and modern App Router architecture' },
            { id: 'vuejs', name: 'Vue.js', icon: FaVuejs, desc: 'Developing responsive and reactive Vue applications' },
            { id: 'html', name: 'HTML', icon: FaHtml5, desc: 'Semantic and accessible HTML5 structure' },
            { id: 'css-scss', name: 'CSS / SCSS', icon: FaCss3Alt, desc: 'Responsive layouts, animations and scalable styling architecture' },
            { id: 'tailwindcss', name: 'Tailwind CSS', icon: SiTailwindcss, desc: 'Utility-first CSS framework for scalable UI systems' },
            { id: 'javascript', name: 'JavaScript', icon: SiJavascript, desc: 'ES6+, asynchronous programming and modern browser APIs' },
            { id: 'typescript', name: 'TypeScript', icon: SiTypescript, desc: 'Static typing and type-safe frontend development' },
        ]
    },
    {
        id: 'backend-database',
        category: 'Backend & Database',
        items: [
            { id: 'nodejs', name: 'Node.js', icon: FaNodeJs, desc: 'Building REST APIs using Express.js' },
            { id: 'expressjs', name: 'Express.js', icon: SiExpress, desc: 'Routing, middleware handling and API architecture' },
            { id: 'mongodb', name: 'MongoDB', icon: SiMongodb, desc: 'Document-based database with Mongoose ODM' },
            { id: 'firebase', name: 'Firebase', icon: SiFirebase, desc: 'Authentication, Firestore database and cloud hosting (BaaS)' },
            { id: 'onesignal', name: 'OneSignal', icon: FiBell, desc: 'Push notification integration in React Native applications' }
        ]
    },
    {
        id: 'state-management',
        category: 'State Management & Data Layer',
        items: [
            { id: 'redux-toolkit', name: 'Redux Toolkit', icon: SiRedux, desc: 'Scalable global state management using slices and async thunks' },
            { id: 'react-query', name: 'React Query', icon: TbDatabase, desc: 'Managed server-state with caching, optimistic updates and pagination' },
            { id: 'zustand', name: 'Zustand', icon: FiLayers, desc: 'Lightweight state management for UI-driven state separation' },
            { id: 'orval-openapi', name: 'Orval (OpenAPI)', icon: TbApi, desc: 'Generated TypeScript types from OpenAPI schemas for type-safe API integration' }
        ]
    },
    {
        id: 'authentication-security',
        category: 'Authentication & Security',
        items: [
            {
                id: 'clerk',
                name: 'Clerk',
                icon: FiShield,
                desc: 'Implemented authentication and secure session handling in React Native applications using Clerk SDK'
            }
        ]
    },
    {
        id: 'design-devops',
        category: 'Design & DevOps',
        items: [
            { id: 'figma', name: 'Figma', icon: SiFigma, desc: 'UI/UX design, prototyping and component-based design systems' },
            { id: 'github-actions', name: 'GitHub Actions', icon: FaGitAlt, desc: 'CI/CD workflows for automated testing and deployment' },
        ]
    },
    {
        id: 'ai-3d-integration',
        category: 'AI & 3D Integration',
        items: [
            { id: 'threejs', name: 'Three.js', icon: TbCube, desc: '3D rendering and animation in the browser' },
            { id: 'react-three-fiber', name: 'React Three Fiber', icon: TbCube, desc: 'Declarative 3D rendering with Three.js in React' },
            { id: 'ready-player-me', name: 'Ready Player Me', icon: FaUserAstronaut, desc: 'Avatar integration and morph target animation control' },
            { id: 'openai-gpt', name: 'OpenAI GPT', icon: SiOpenai, desc: 'Integrated AI-driven chat functionality with GPT models' },
            { id: 'google-cloud-tts', name: 'Google Cloud TTS', icon: FiVolume2, desc: 'Text-to-Speech integration with dynamic voice selection' },
            { id: 'blender', name: 'Blender', icon: SiBlender, desc: '3D asset optimization and animation conversion (FBX → glTF)' },
        ]
    }
]


