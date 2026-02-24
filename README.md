# Interactive AI Portfolio with 3D Avatar and Voice (Dockan)

This is an interactive developer portfolio designed to make it easier for recruiters to explore my experience through conversation instead of static content.

It features Dockan — an AI assistant represented as a real-time 3D avatar capable of answering questions, explaining my projects, and presenting technical experience in a more natural and interactive way.

Instead of navigating traditional portfolio pages, recruiters can interact directly with the system and receive contextual responses powered by AI.

The project is designed as an evolving platform and is continuously being improved in terms of architecture, interaction, and user experience.

---
## Features

* AI assistant powered by OpenAI
* Real-time 3D avatar rendered using React Three Fiber and Three.js
* Lip sync animation and procedural avatar movement
* Neural voice synthesis using AWS Polly (Swedish voice)
* Server-side AI and voice integration via Next.js API routes
* Secure prompt and API configuration using environment variables
* Real-time conversational interface between recruiter and AI assistant

---

## Tech Stack

**Frontend**

* Next.js
* React
* TypeScript
* Tailwind CSS

**3D Rendering**

* Three.js
* React Three Fiber
* GLTF models (Ready Player Me)
* FBX animations (Blender)

**AI and Voice**

* OpenAI API
* AWS Polly (Neural Text-to-Speech)
* SSML phoneme control

**Deployment**

* Vercel

**3D Tools**

* Blender
* Ready Player Me

---

## Architecture

The system consists of three main layers:

**AI Layer**
Handles conversation logic using OpenAI.
System prompt is securely injected via environment variables.

**Voice Layer**
Converts AI responses into speech using AWS Polly neural voice synthesis.

**Rendering Layer**
Displays and animates the avatar in real time using WebGL via React Three Fiber.

All AI and voice processing is handled server-side to ensure security and prevent exposure of sensitive configuration.

---

## Deployment

The application is deployed using Vercel.

Production deployments are automatically triggered when changes are merged into the `master` branch.

Environment variables such as API keys and system prompt configuration are securely managed through Vercel.

This ensures secure server-side execution and prevents sensitive data exposure.

---

## Purpose

The purpose of this project is to explore how AI, voice synthesis, and real-time graphics can be combined to create more natural and interactive developer portfolios.

It is designed to improve how recruiters interact with technical portfolios by enabling direct conversational exploration instead of static browsing.

---

## Future Improvements

Planned improvements include:

* Allowing recruiters to leave feedback directly through the interface
* Improving Dockan's conversational accuracy and contextual understanding
* Adding interaction controls such as pause, interrupt, and response control
* Enhancing avatar realism and visual presentation
* Improving performance and responsiveness
* Expanding Dockan’s ability to explain architecture and technical decisions
* Exploring more advanced interaction patterns and interface improvements

This project will continue evolving as new technologies and interaction patterns are explored.

---

## Running Locally

Clone repository:

```bash
git clone https://github.com/Nigora21-02/my-ai-portfolio
cd my-ai-portfolio
npm install
npm run dev
```

Environment variables required:

```env
OPENAI_API_KEY=your_key
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_key
DOCKAN_PROMPT=your_prompt
```

---
## Live Demo

Production:
https://my-ai-portfolio-six.vercel.app

---
## Author

Nigora Kholmatova
Frontend & Mobile Developer

This project explores AI-driven interfaces, real-time 3D graphics, and voice interaction using modern web technologies.
