export type Project = {
  title: string
  company?: string
  description: string
  extendedDescription?: string
  image?: string | string[]
  video?: string
  thumbnail?: string
  stack: string[]
  github?: string
  live?: string
  role: string
  date: string
  category?: string
  link?: string
  privateRepo?: boolean
  note?: string
  mediaType: 'mobile' | 'design' | 'web'

}

export const projectsData: Project[] = [
  {
    category: 'Webb & Mobil',
    company: 'FixMeApp AB',
    mediaType: 'mobile',
    title: 'Cross-Platform Frontend & Arkitektur för AI-driven Bokningsplattform',
    image: ['/images/FixmeappPrompt 1.png', '/images/FixmeappPrompt.png', '/images/Fixmeapp3.png', '/images/Fixmeapp4.png', '/images/Fixmeapp5.png', '/images/Fixmeapp6.png', '/images/Fixmeapp7.png'],
    description: 'Arbetade som frontendutvecklare i utvecklingen av en AI-driven bokningsplattform. Ansvarade för cirka 80 % av frontend-delen och drev implementationen end-to-end i nära samarbete med seniora utvecklare. Byggde mobilapplikationen från grunden och Migrerade webbkomponenter till återanvändbara cross-platform-komponenter (React & React Native) och minskade duplicerad implementation med ~40 %, Implementerade core booking-flows inklusive profiler för användare, arbetare och leverantörer (salonger/frilansare). Fokuserade på clean och skalbar arkitektur med tydlig separation of concerns, isolerad affärslogik via custom hooks samt strukturerad folderstruktur. Använde React Query för API-integration mot FastAPI-backend och säkerställde konsekvent hantering av server state. Utvecklade dynamiska komponenter anpassade efter AI-baserade prompt-intentioner och var aktivt involverad i UX-processen för att säkerställa tydliga och användarcentrerade flöden.',
    stack: ['Next.js', 'React Native', 'Expo', 'TypeScript', 'Redux Toolkit', 'React Query', 'FastAPI', 'Orval'],
    role: 'Frontend Developer',
    date: '2025-2026'
  },
  {
    category: 'UX / Design',
    company: 'Carmy AB',
    mediaType: 'design',
    title: 'UX/UI-omdesign & Design av Nytt Onboardingflöde',
    image: '/images/carmy_design.png',
    description: 'Tog initiativ till att förbättra Carmys onboarding- och autentiseringsflöden genom att identifiera friktion i användarresan under interna produktgranskningar. Utvecklade ett konceptuellt förslag som visualiserade appens kärnvärde innan kontoskapande, vilket tydliggjorde produktens AI-drivna diagnostikfunktioner redan i första interaktionen. Genomförde UX- och produktresearch för att validera hypoteser, skapade wireframes och high-fidelity design i Figma samt definierade förbättrad informationshierarki, komponentstruktur och visuellt system. Implementerade samtliga godkända designförändringar i React Native-applikationen. Refaktorerade frontend-arkitekturen genom att separera UI-komponenter, affärslogik och navigationslager för ökad skalbarhet och långsiktig underhållbarhet.',
    stack: [
      'Figma',
      'User Research',
      'UX Analysis',
      'Wireframing',
      'High-Fidelity Prototyping',
      'Design System'
    ],
    github: '',
    link: '',
    role: 'Frontend Developer & UX Designer',
    date: 'Sep 2025 -Februari 2026',
  },
  {
    category: 'Mobile',
    company: 'Carmy AB',
    mediaType: 'mobile',
    title: 'Mobil Frontend Arkitektur & Produktutveckling',
    description: `
    Ledde implementationen av den godkända redesignen och refaktorerade frontend-arkitekturen för ökad skalbarhet och långsiktig underhållbarhet. 
    Omstrukturerade projektets mappstruktur och separerade UI-komponenter, affärslogik och navigationslager enligt en mer modulär arkitektur. Extraherade inline-kod till återanvändbara komponenter och custom hooks för förbättrad läsbarhet och återanvändbarhet.
    Implementerade klientbaserad state management med Zustand inklusive persistens för AI-drivna diagnosflöden. Förbättrade autentiseringsflöden samt anpassade navigationsstrukturen efter den nya UX-designen. 
    Integrerade internationalisering (i18n) med stöd för 7 språk.`,
    image: ['/images/Carmy01.png', '/images/Carmy07.png', '/images/Carmy03.png', '/images/Carmy04.png', '/images/Carmy06.png', '/images/Carmy07.png', '/images/Carmy08.png', '/images/Carmy09.png', '/images/Carmy10.png'],
    stack: [
      'React Native',
      'Expo',
      'TypeScript',
      'Zustand',
      'i18n',
      'Clerk',
      'Arkitektur & Refaktorering'
    ],
    privateRepo: true,
    role: 'Frontend Developer',
    date: 'Sep 2025 - Februari 2026',
  },

  {
    category: 'Mobile',
    company: 'Finanstid AB',
    title: 'Utveckling av Nyhetsapp i React Native',
    mediaType: 'web',
    description: 'Fullt utvecklad nyhetsapp för Finanstid AB. Byggd från grunden av mig med React Native. Innehåller sök, pushnotiser och formulär. Sluttestas nu inför publicering på Google Play och App Store. Projektet utvecklades och testades i Android Studio och Xcode.',
    image: ['/images/finanstid_1.png', '/images/finanstid_2.png'],
    stack: ['React Native', 'OneSignal', 'WordPress API', 'TypeScript', 'Rule.io', 'Firebase'],
    github: 'https://github.com/2102kh',

    live: '',
    link: '',
    privateRepo: true,
    role: 'Huvudutvecklare',
    date: 'Januari 2025 - Juli 2025',
  },
  {
    category: 'UX / Design',
    company: 'Finanstid AB',
    title: 'Visuell Omdesign & Design System',
    mediaType: 'design',
    description: 'Genomförde en fullständig redesign av Finanstids visuella identitet i Figma för både webb och mobilapp. Arbetet inkluderade förbättrad informationshierarki, moderniserad typografi, färgsystem samt konsekvent komponentstruktur för att skapa en mer läsbar och användarvänlig upplevelse. Designprocessen omfattade wireframes, high-fidelity mockups och responsiva layouter för olika skärmstorlekar.',
    image: [
      '/images/finanstid_figma_1.png',
      '/images/finanstid_figma_2.png',
      '/images/finanstid_figma_3.png'
    ],
    video: "ecy5gqaA9TA",
    thumbnail: "/images/Finanstid.png",
    stack: ['Figma', 'UX Research', 'Wireframing', 'Design System'],
    github: '',
    link: 'https://finanstid.se/',
    privateRepo: true,
    role: 'UX/UI Designer',
    date: 'Januari 2025 - Juli 2025',
  },
  {
    category: 'Mobile',
    title: 'World Meditations',
    mediaType: 'web',
    description: 'Meditationsapp med integrerad ljudspelare. Jag bidrog till en vidareutvecklad version av appen där jag implementerade navigeringsknappar för föregående/nästa spår, ersatte hårdkodad innehåll med dynamisk data från Firebase, samt testade stöd för nedladdning och uppspelning av ljud offline.Projektet utvecklades och testades i Android Studio.',
    image: ['/images/w_meditations.png', '/images/w_meditations_1.png'],
    stack: ['React Native', 'TypeScript', 'Node.js', 'Firebase', 'Express.js',],
    github: 'https://github.com/2102kh',
    live: '',
    link: 'https://play.google.com/store/apps/details?id=com.worldmeditation',
    privateRepo: true,
    role: 'LIA 1 / Medutvecklare',
    date: 'September-November 2024',
  },
  {
    category: 'Webb',
    title: 'AI Portfolio',
    mediaType: 'web',
    description: 'Mitt första AI-drivna portfolio-projekt, där jag experimenterade med GPT, röstsyntes och 3D-animation. Applikationen är responsiv och byggd med Next.js och React Three Fiber, och innehåller en interaktiv 3D-avatar som presenterar mina projekt, svarar på frågor via GPT och pratar med hjälp av Google TTS. Projektet fokuserar på AI-integration, animation och användarupplevelse.',
    image: '/images/ai-portfolio.png',
    stack: ['Next.js', 'React', 'Three.js', 'React Three Fiber', 'OpenAI API', 'Tailwind CSS', 'Blender', 'Google TTS (Poly)', 'Ready Player Me'],
    github: 'https://github.com/2102kh/my-ai-portfolio',
    live: 'https://my-ai-portfolio-six.vercel.app/',
    link: 'https://my-ai-portfolio-six.vercel.app/',
    role: 'Eget projekt',
    date: 'Maj 2025',
  },
  {
    category: 'Webb',
    title: 'CleanPFAS',
    mediaType: 'web',
    description: 'The PFAS Information Map är en webbaserad applikation utvecklad för Linespotting AB, i samarbete med 22 svenska länsstyrelser. Applikationen visualiserar miljödata genom en interaktiv Sverigekarta, där användaren kan zooma in på specifika kommuner för att se aggregerad PFAS-information. Målet är att ge länsstyrelser möjlighet att logga in, lägga till och uppdatera data om förekomst av PFAS (per- och polyfluorerade alkylsubstanser). Projektet syftar till att öka tillgänglighet, transparens och förståelse för miljögifter i hela landet',
    image: '/images/cleanpfas_1.png',
    stack: ['React', 'TypeScript', 'SASS', 'Firebase', 'Express.js', 'Cypress'],
    github: 'https://github.com/2102kh/pfas-map.git',
    live: '',
    link: 'https://sweden-pfas-data.netlify.app/',
    role: 'Examensprojekt',
    date: 'December 2024',
  },
  {
    category: 'Webb',
    title: 'The Zoo',
    mediaType: 'web',
    description: 'Mitt första skolprojekt där jag använde React för att utveckla en interaktiv och dynamisk applikation med möjlighet att hämta data från ett API. Syftet med projektet var att skapa ett djurparksystem där användaren enkelt kunde hålla koll på när djuren senast matades och få en tydlig översikt över tiden som passerat sedan deras senaste måltid.',
    image: '/images/theZoo_1.png',
    stack: ['React', 'JavaScript', 'SASS', 'API'],
    github: 'https://github.com/Medieinstitutet/react-the-zoo-2102kh',
    link: 'https://thezoo-2102-react.netlify.app/',
    role: 'Skolprojekt',
    date: 'September 2024',
  },
  {
    category: 'Webb',
    title: 'Webbshop',
    mediaType: 'web',
    description: 'Grupprojekt där vi byggde en komplett webbshop med produktkategorier, varukorg, responsiv design och beställningsflöde. Jag ansvarade för produktlistning, filtrering och mobilanpassning. OBS:Webbshopen är inte responsiv.',
    image: '/images/webbshop_1.png',
    stack: ['JavaScript', 'HTML', 'SASS'],
    github: 'https://github.com/2102kh/webbshop-grupp',
    link: 'https://apexheaven.netlify.app/',
    role: 'Grupprojekt (skola)',
    date: 'Oktober 2023',
  },
  {
    category: 'Webb',
    title: 'Quiz App',
    mediaType: 'web',
    description: 'En responsiv quizapplikation där användaren kan testa sina kunskaper inom olika ämnen. Designad för att vara mobilvänlig med tydlig UI och dynamiska frågekategorier.',
    image: '/images/quiz1.png',
    stack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/2102kh/quiz-app',
    link: 'https://simplequiz-01.netlify.app/',
    role: 'Eget projekt',
    date: 'Maj 2024',
  }
]
